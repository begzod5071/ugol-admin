<template>
  <div>
    <section class="home-bg">
      <b-container>
        <Header />
        <h1 class="home-header-title">
          ВЫСОКОЕ КАЧЕСТВО УГЛЯ - <br />
          ЗАЛОГ ВАШЕГО УСПЕШНОГО БИЗНЕСА!
        </h1>
        <b-row class="category-box">
          <b-col lg="12" md="12">
            <div class="d-flex">
              <template v-for="(category, index) in categories">
                <category :item="category" :key="index" class="mr-5" />
              </template>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <div>
      <main-section />
    </div>
    <div class="footer-wrapper">
      <b-container>
        <Footer />
      </b-container>
    </div>
  </div>
</template>


<script>
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";
import category from "./components/category.vue";

import mainSection from "./components/mainSection.vue";
import { BContainer, BRow } from "bootstrap-vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "index",
  data() {
    return {
      categories: [
        {
          title: "Уголь",
          img: require("../../assets/ugol.png"),
        },
        {
          title: "Нефтегазовая продукция",
          img: require("../../assets/neft.png"),
        },
        {
          title: "Услуги",
          img: require("../../assets/uslugi.png"),
        },
      ],
    };
  },
  components: {
    Header,
    Footer,
    BContainer,
    category,
    BRow,
    mainSection,
  },
};
</script>

<style lang="scss" scoped>
.home-bg {
  padding-top: 56px;
  padding-bottom: 50px;
  background-image: url("../../assets/home-bg.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  // height: 100vh;
  /* position: relative; */
}

.home-header-title {
  margin-top: 160px;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 49px;

  color: #ffffff;
}

.category-box {
  margin-top: 223px;
}

.footer-wrapper {
  background-color: #000000;
}
</style>