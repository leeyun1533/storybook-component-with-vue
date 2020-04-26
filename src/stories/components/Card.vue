<template>
  <div class="card-example-wrapper">
    <h3>세로형 카드</h3>
    <div class="vertical">
      <Card
        v-for="(item, index) in list"
        :key="index"
        :label="item.label"
        :title="item.title"
        :content="item.content"
        availableStar
        :starLabel="item.starLabel"
        :imageUrl="item.imageUrl"
      />
    </div>
    <h3>가로형 카드</h3>
    <div class="horizonal">
      <Card
        v-for="(item, index) in list"
        :key="index"
        :label="item.label"
        :title="item.title"
        :content="item.content"
        availableStar
        :starLabel="item.starLabel"
        :imageUrl="item.imageUrl"
        horizontal="true"
      />
    </div>
  </div>
</template>

<script>
import Card from "../../components/CardUI.vue";

export default {
  components: {
    Card
  },
  data() {
    return {
      list: [
        {
          label: "YARNpnc",
          title: "(3개세트)카네이션브로치",
          content: "",
          starLabel: "어버이날 때 드리려고..",
          imageUrl:
            "https://image.idus.com/image/files/255c05e13ff84dbba6746223167ad738_512.jpg"
        },
        {
          label: "핸디언즈",
          title: "[예약할인] 푸에블로 가죽 반지갑 - 에디",
          content: "",
          starLabel: "아빠 드리려고 샀어요 완전 예뻐요~ 근데",
          imageUrl:
            "https://image.idus.com/image/files/8efdf9c6f4114fc7bcd8e0bb94b9d4e1_512.jpg"
        },
        {
          label: "세븐비 도자기",
          title: "세븐비 앨리스가든 미니 앞접시(1P)",
          content: "",
          starLabel: "정성스럽게 포장한 제품 잘받았",
          imageUrl:
            "https://image.idus.com/image/files/6e4e1e781f03467d91ca43f27e6103e3_512.jpg"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.card-example-wrapper {
  .vertical {
    display: flex;
  }
  h3 {
    margin: 24px 12px;
    font-size: 22px;
    color: #333;
  }
}
</style>>