import TextareaUi from '../../components/InputUI.vue'

import { boolean } from '@storybook/addon-knobs'
export default {
  title: '컴포넌트/Input',
  component: TextareaUi,
};

export const 기본 = () => ({
  components: { TextareaUi },
  props: {
    disabled: {
      default: boolean('disabled', false)
    },
    readonly: {
      default: boolean('readonly', false)
    },
  },
  data() {
    return {
      savedData: '',
    }
  },
  render() {
    return (
      <TextareaUi
        savedData={this.savedData}
        readonly={this.readonly}
        disabled={this.disabled}
        on={{
          'save': (event) => {
            this.savedData = event
          }
        }}
      />
    )
  }
});

export const readonly = () => ({
  components: { TextareaUi },
  render() {
    return (
      <TextareaUi
        readonly
      />
    )
  }
});
export const disabled = () => ({
  components: { TextareaUi },
  render() {
    return (
      <TextareaUi
        disabled
      />
    )
  }
});