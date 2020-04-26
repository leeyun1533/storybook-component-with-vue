import CardUi from '../../components/CardUI.vue'

import { text, boolean } from '@storybook/addon-knobs'
export default {
  title: '컴포넌트/Card',
  component: CardUi,
};

export const 기본 = () => ({
  components: { CardUi },
  props: {
    label: {
      default: text('label', 'Card Label')
    },
    title: {
      default: text('title', 'Card Title')
    },
    content: {
      default: text('content', 'Card Content')
    },
    availableStar: {
      default: boolean('availableStar', true)
    },
    starLabel: {
      default: text('startLabel', '별점 입니다.')
    },
    imageUrl: {
      default: text('imageUrl', 'https://image.idus.com/image/files/7a8f0e5e16df4f919e1bcc30667714d8_512.jpg')
    },
    horizontal: {
      default: boolean('horizontal', false)
    }
  },
  render() {
    return (
      <CardUi
        label={this.label}
        title={this.title}
        content={this.content}
        availableStar={this.availableStar}
        starLabel={this.starLabel}
        imageUrl={this.imageUrl}
        horizontal={this.horizontal}
      />
    )
  }
});

export const 세로형 = () => ({
  components: { CardUi },
  props: {
    label: {
      default: text('label', 'Card Label')
    },
    title: {
      default: text('title', 'Card Title')
    },
    content: {
      default: text('content', 'Card Content')
    },
    availableStar: {
      default: boolean('availableStar', true)
    },
    starLabel: {
      default: text('startLabel', '별점 입니다.')
    },
    imageUrl: {
      default: text('imageUrl', 'https://image.idus.com/image/files/7a8f0e5e16df4f919e1bcc30667714d8_512.jpg')
    },
  },
  render() {
    return (
      <CardUi
        label={this.label}
        title={this.title}
        content={this.content}
        availableStar={this.availableStar}
        starLabel={this.starLabel}
        imageUrl={this.imageUrl}
      />
    )
  }
});

export const 가로형 = () => ({
  components: { CardUi },
  props: {
    label: {
      default: text('label', 'Card Label')
    },
    title: {
      default: text('title', 'Card Title')
    },
    content: {
      default: text('content', 'Card Content')
    },
    availableStar: {
      default: boolean('availableStar', true)
    },
    starLabel: {
      default: text('startLabel', '별점 입니다.')
    },
    imageUrl: {
      default: text('imageUrl', 'https://image.idus.com/image/files/7a8f0e5e16df4f919e1bcc30667714d8_512.jpg')
    },
  },
  render() {
    return (
      <CardUi
        label={this.label}
        title={this.title}
        content={this.content}
        availableStar={this.availableStar}
        starLabel={this.starLabel}
        imageUrl={this.imageUrl}
        horizontal={true}
      />
    )
  }
});

export const slot = () => ({
  components: { CardUi },

  render() {
    return (
      <CardUi
      >
        <img src="https://image.idus.com/image/files/2c87be58a2634174b4ebfb074ec05c33_512.jpg" class="image" />
        <div style="padding: 14px;">
          <span >포토키링, 드로잉키링 에어팟키링 (니켈,18k도금)</span>
          <div style="margin-top: 12px;" class="bottom">
            <span>너무 이뻐요 ㅠㅠㅠㅠㅠㅠ</span>
          </div>
        </div>
      </CardUi>
    )
  }
});