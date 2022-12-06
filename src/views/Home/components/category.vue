<template>
  <div class="box-card" @click="goCategory(item)" :style="{backgroundImage: 'url('+ item.img +')'}">

    <div class="box-radius">
      <span>{{ item.title }}</span>
    </div>
  </div>
</template>


<script>
import {} from "bootstrap-vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "category",
  components: {},
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },

  methods: {
    goCategory(e) {
      this.$router.push("product/1");
    },
  },
};
</script>

<style lang="scss">
.box-card {
  width: 282px;
  height: 188px;
  cursor: pointer;
  display: flex;
}
.box-radius {
  // width: 152px;
  // padding: 0px 40px;
  // height: auto;
  // margin: 0 auto;
  // position: relative;
  // border-top-right-radius: 10px;
  // border-top-left-radius: 10px;
  // text-align: center;
  // background: #191919;
  // border: 2px solid #828282;
  // border-right: 0;
  // border-left: 0;

  // &::after {
  //   content: "";
  //   position: absolute;
  //   border-top-right-radius: 5px;
  //   border-right: solid #828282 2px;
  //   border-bottom: solid #828282 2px;
  //   background: #191919;  
  //   top: 1px;
  //   right: -6px;
  //   bottom: 0;
  //   // height: 25px;
  //   height: auto;
  //   width: 20px;
  //   transform: skew(30deg);
  // }
  //  &::before {
  //   content: "";
  //   position: absolute;
  //   border-top-left-radius: 5px;
  //   border-left: solid #828282 2px;
  //   border-bottom: solid #828282 2px;
  //   background: #191919;  
  //   top: 1px;
  //   left: -6px;
  //   bottom: 0;
  //   // height: 25px;
  //    height: auto;
  //   width: 20px;
  //   transform: skew(-30deg);
  // }
  width: 152px;
  margin-top: auto;
  margin-left: auto;
  margin-right: auto;
  // height: 27px;
  background: #191919;
  border: 2px solid #828282;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  // transform: perspective(200px) rotateX(35deg) translateZ(25px) translateY(5px);
  // -webkit-backface-visibility: hidden;
  // transition: all 0.3s ease-out;
  text-align: center;
  // position: absolute;
  // transform-style: preserve-3d;
  // bottom: 0;
  // left: 50%;
  // transform: translateX(-50%);
}
</style>