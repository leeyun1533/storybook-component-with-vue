<template>
  <div class="card" :class="horizontal ? 'horizontal-style' : ''">
    <div class="card-body" :style="bodyStyle">
      <slot>
        <div class="background-section" :style="{'background-image': `url(${imageUrl})`}"></div>
        <div>
          <div class="body-main-container">
            <span class="label">{{label}}</span>
            <span class="title">{{title}}</span>
            <span class="content">{{content}}</span>
          </div>
          <div class="body-footer-container" v-if="availableStar">
            <el-rate v-model="rate"></el-rate>
            <p>{{starLabel}}</p>
          </div>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    title: String,
    content: String,
    availableStar: Boolean,
    starLabel: String,
    imageUrl: String,
    horizontal: Boolean
  },
  data() {
    return {
      rate: null
    };
  }
};
</script>
<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  width: 33%;
  min-width: 200px;
  max-width: 270px;
  border-radius: 4px;
  border: 1px solid #e4e7ed;
  background-color: white;
  overflow: hidden;
  color: #303133;
  transition: 0.3s;
  margin: 12px;

  transition: all 0.2s ease-in-out;
  &:hover,
  &:focus {
    transform: scale(1.02);
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }

  &.horizontal-style {
    flex-direction: row;
    .card-body {
      display: flex;
      > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      .background-section {
        min-width: 200px;
        height: 200px;
      }
      .body-footer-container {
        border: none;
      }
    }
    width: 100%;
    max-width: 600px;
  }
  .card-body {
    .background-section {
      min-width: 150px;
      height: 230px;
      background-size: cover;
    }
    .body-main-container {
      display: flex;
      flex-direction: column;
      padding: 8px 12px;
      height: 90px;
      .label {
        font-size: 14px;
        color: #eeeeee;
        padding-bottom: 4px;
      }
      .title {
        font-size: 18px;
        color: black;
        padding-bottom: 18px;
      }
      .content {
        font-size: 16px;
      }
    }
    .body-footer-container {
      border-top: 1px solid #eeeeee;
      padding: 8px 12px;
      > p {
        margin-top: 8px;
        font-size: 14px;
        color: #999;
      }
    }
  }
}
</style>