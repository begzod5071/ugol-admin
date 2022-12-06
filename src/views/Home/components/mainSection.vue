<template>
  <div>
    <section class="home-main-bg">
      <b-container>
        <b-row class="text-center mb-5">
          <b-col lg="12" md="12">
            <h1 class="main-section-title">Поставка энергоресурсов</h1>
          </b-col>
        </b-row>
        <template v-for="(card, index) in cards">
          <Card
            class="card-mar"
            :items="card"
            :key="index"
            :index="index + 1"
          />
        </template>
        <b-row class="mb-5">
          <h2 class="partner-title m-0">Наши партнёры</h2>
        </b-row>
        <b-row class="justify-content-between">
          <b-col v-for="item in 5" md="2" lg="2" :key="item" class="p-0">
            <PartnerCard />
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>


<script>
import { BContainer, BRow, BCol } from "bootstrap-vue";
import Card from "./Card.vue";
import PartnerCard from "./PartnerCard.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "mainSection",
  data() {
    return {
      cards: [
        {
          img: require("@/assets/card-1.png"),
          text: "Уголь  — осадочная порода, полезное ископаемое, ценнейший вид топлива и сырьё для химической, и не только, промышленности.",
        },
        {
          img: require("@/assets/card-2.png"),
          text: "Нефтегазовая продукция  - смесь газов, образовавшихся в недрах земли при анаэробном разложении органических веществ  - катагенетического преобразования органического вещества осадочных горных пород",
        },
        {
          img: require("@/assets/card-3.png"),
          text: "Услуги — Наша компания оказывается услуги по сортировке и рассфасовке а так же транспортировке углей.",
        },
      ],
    };
  },
  components: {
    BContainer,
    BRow,
    BCol,
    Card,
    PartnerCard,
  },
};
</script>

<style lang="scss">
.home-main-bg {
  padding-top: 30px;
  padding-bottom: 148px;
  background-image: url("../../../assets/main-img.png");
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
  margin-bottom: 120px;
}

.partner-title {
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 37px;
  /* identical to box height */
  color: #fb7c00;
}
</style>