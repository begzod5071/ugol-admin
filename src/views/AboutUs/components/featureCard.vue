<template>
  <div>
    <div class="text-center">
      <div class="feature-box mx-auto">
        <img :src="item.img" :alt="item.title" />
      </div>
      <h3 class="m-0 feature-title mb-3">{{ item.title }}</h3>
      <span class="feature-text mx-auto">{{ item.text }} </span>
    </div>
  </div>
</template>

<script>
import { BCard } from "bootstrap-vue";
export default {
  data() {
    return {};
  },
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  comments: {
    BCard,
  },
};
</script>

<style scoped>
.feature-box {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 33px;
  border: 3px solid #626263;
  width: 200px;
  height: 200px;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.1) -1.52%,
    rgba(255, 255, 255, 0.024) 104.35%
  );
  backdrop-filter: blur(39.6002px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 15px;
}

.feature-title {
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 30px;

  color: #ffffff;
}

.feature-text {
  display: block;
  width: 346px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;

  color: #ffffff;
}
</style>