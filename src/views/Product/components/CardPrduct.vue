<template>
  <div class="">
    <div class="card-box" :class="detectNum ? 'card-box-even' : ''">
      <img :src="items.img" alt="card" width="324" height="205" />
      <div class="ml-5">
        <span class="card-title">{{ items.title }}</span>
        <span class="card-product-text">Фракция: {{ items.text1 }}</span>
        <span class="card-product-text">Золность: {{ items.text2 }}</span>
        <span class="card-product-text">Теплота: {{ items.text3 }}</span>
        <span class="card-product-text"
          >Содержание серы: {{ items.text4 }}</span
        >
      </div>
    </div>
  </div>
</template>


<script>
import {} from "bootstrap-vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "category",
  components: {},
  computed: {
    detectNum() {
      if (this.index % 2 == 0) {
        return true;
      }
    },
  },
  props: {
    items: {
      type: Object,
      default: () => {},
    },
    index: {
      type: Number,
    },
  },
};
</script>

<style lang="scss" scoped>
.card-box-even {
  margin-left: auto;
}
.card-box {
  width: 810px;
  display: flex;
  align-items: center;
  padding: 20px 15px 20px 20px;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.1) -1.52%,
    rgba(255, 255, 255, 0.024) 104.35%
  );
  backdrop-filter: blur(39.6002px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 15px;
  border: 2px solid #ffffff;
}

.card-title {
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 155.4%;
  /* or 39px */

  text-transform: uppercase;

  color: #fb7c00;
}

.card-product-text {
  display: block;
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 155.4%;
  /* or 39px */

  text-transform: capitalize;

  color: #ffffff;
}
</style>