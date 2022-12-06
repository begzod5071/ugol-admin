<template>
  <div class="">
    <div class="card-box" :class="detectNum ? 'card-box-even' : ''">
      <img :src="items.img" alt="card" width="423" height="236" />
      <p class="m-0 card-text">
        {{ items.text }}
      </p>
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

<style lang="scss">
.card-box-even  {
  flex-direction: row-reverse;
  margin-left: auto;
}

.card-box-even .card-text{
  margin-left: 0 !important;
  margin-right: 18px !important;
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

.card-text {
  margin-left: 18px !important;
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 30px;

  color: #ffffff;
}
</style>