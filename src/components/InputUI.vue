<template>
  <div>
    <div class="input-container">
      <textarea
        class="textarea"
        cols="20"
        rows="6"
        v-model="data"
        maxlength="500"
        placeholder="입력해주세요"
        :disabled="disabled"
        :readonly="readonly"
      ></textarea>
      <span class="count">
        <span v-if="data">{{data.length}} /</span>
        <span>500</span>
      </span>
    </div>

    <button
      v-if="!disabled && savedData !== data && data"
      class="save-button"
      @click="$emit('save', data)"
    >Save</button>
  </div>
</template>

<script>
export default {
  props: {
    readonly: Boolean,
    disabled: Boolean,
    savedData: String
  },
  data() {
    return {
      data: null
    }
  }
}
</script>
<style lang="scss" scoped>
div {
  display: flex;
  width: 100%;

  .input-container {
    position: relative;
    .textarea {
      width: 100%;
      resize: none;
      outline: none;
      font-size: 15px;
      padding: 6px;
      color: #333;
      &[disabled] {
        background-color: #f5f7fa;
        color: #c0c4cc;
      }
      &:focus {
        border-color: #22a7af;
      }
    }
    .count {
      font-size: 12px;
      color: #666;
      position: absolute;
      bottom: 10px;
      right: 10px;
    }
  }
  .save-button {
    width: 100px;
    font-size: 16px;
    margin-left: 8px;
    background: none;
    text-decoration: none;
    color: #22a7af;
  }
}
</style>