import { configure, addDecorator, addParameters } from '@storybook/vue'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { withKnobs } from '@storybook/addon-knobs'

import Vue from "vue";

import { Rate } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Rate);
import 'reset-css';
addDecorator(withKnobs)
addParameters({
  options: {
    panelPosition: 'right',
    showRoots: true,
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
})
configure(require.context('../src/stories', true, /\.stories\.js$/), module)
