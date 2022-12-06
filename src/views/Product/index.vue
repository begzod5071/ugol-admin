<template>
  <div>
    <section class="home-bg">
      <b-container>
        <Header />
        <h1 class="home-header-title">Продажа и поставка угля</h1>
      </b-container>
    </section>
    <section class="home-main-bg">
      <b-container>
        <b-row class="text-center mb-5">
          <b-col lg="12" md="12">
            <h1 class="main-section-title">Уголь</h1>
          </b-col>
        </b-row>

        <template v-for="(card, index) in cards">
          <CardProduct
            class="card-mar"
            :items="card"
            :key="index"
            :index="index + 1"
          />
        </template>
        <b-row class="box-manager">
          <b-col>
            <div class="d-flex align-items-center manager-wrapper">
              <img src="../../assets/manager.png" alt="manager" class="mr-4" />
              <!-- <b-avatar src="../../assets/manager.png" size="8rem" class="mr-4"> -->
              <!-- </b-avatar> -->
              <div>
                <span class="manager-name">Майкл Джордан</span>
                <span class="manager-position">Менеджер отдела продаж </span>
                <div class="d-flex align-items-center mb-2">
                  <img src="../../assets/gmail.svg" alt="gmail" class="mr-3" />
                  <a href="mailto:manager@gmail.com">manager@gmail.com</a>
                </div>
                <div class="d-flex align-items-center">
                  <img src="../../assets/phone.svg" alt="phone" class="mr-3" />
                  <a href="tel:+998 98 170 70 06">+998 98 170 70 06</a>
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <div class="footer-wrapper">
      <b-container>
        <Footer />
      </b-container>
    </div>
  </div>
</template>

<script>
import { BContainer, BRow, BCol, BAvatar } from "bootstrap-vue";
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";
import CardProduct from "./components/CardPrduct.vue";

export default {
  data() {
    return {
      cards: [
        {
          img: require("@/assets/card-4.png"),
          title: "Горошек",
          text1: "5-25 мм",
          text2: "3%",
          text3: ">29 000 KJ/кДж",
          text4: "0,8%",
        },
        {
          img: require("@/assets/card-5.png"),
          title: "Орех",
          text1: "25-40 мм",
          text2: "3%",
          text3: ">29 000 KJ/кДж",
          text4: "0,8%",
        },
        {
          img: require("@/assets/card-6.png"),
          title: "Сортовой",
          text1: "40-100 мм",
          text2: "3%",
          text3: ">29 000 KJ/кДж",
          text4: "0,8%",
        },
      ],
    };
  },
  components: {
    Header,
    Footer,
    BContainer,
    BRow,
    BCol,
    CardProduct,
    BAvatar,
  },
};
</script>

<style scoped>
.home-bg {
  padding-top: 56px;
  padding-bottom: 410px;
  background-image: url("../../assets/second-bg.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  /* // height: 100vh; */
  /* position: relative; */
}

.home-header-title {
  margin-top: 260px;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 49px;

  color: #ffffff;
}

.home-main-bg {
  padding-top: 30px;
  padding-bottom: 78px;
  background-image: url("../../assets/main-img.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}

.main-section-title {
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 49px;
  margin: 0;
  color: #ffffff;
}

.card-mar {
  margin-bottom: 24px;
}

.footer-wrapper {
  background-color: #000000;
}

.manager-name {
  display: block;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;

  color: #ffffff;
  margin-bottom: 13px;
}
.manager-position {
  display: block;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 18px;
  /* identical to box height, or 100% */
  margin-bottom: 13px;
  color: #fb7c00;
}

.box-manager {
  margin-top: 70px;
}

.manager-wrapper {
  position: relative;
  left: 80%;
}
</style>