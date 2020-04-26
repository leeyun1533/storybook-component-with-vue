const path = require('path')

module.exports = {
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-knobs/register',
    '@storybook/addon-viewport/register',
  ],
  stories: ['../src/**/*.stories.[tj]s'],
  webpackFinal: async config => {
    config.module.rules = [
      {
        test: /\.stories\.jsx?$/,
        loaders: [
          {
            loader: require.resolve('@storybook/source-loader'),
            options: { parser: 'typescript' },
          },
        ],
        enforce: 'pre',
      },
      {
        test: /\.[jt]sx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
        exclude: file => /node_modules/.test(file) && !/\.vue\.js/.test(file),
      },
      {
        test: /\.vue$/,
        use: 'vue-docgen-loader',
        enforce: 'post',
      },
      {
        test: /\.(jpe?g|png|gif|svg|eot|ttf|woff|woff2)(\?.*)?$/,
        use: 'file-loader',
      },
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.s?css$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
          },
        ],
      },
    ]
    config.resolve.alias['@'] = path.resolve(__dirname, '..')
    // config.resolve.alias['~'] = path.resolve(__dirname, '../../web/src')
    // config.resolve.extensions.push('.ts', '.tsx')
    config.node = {
      __dirname: true,
    }
    return config
  },
};