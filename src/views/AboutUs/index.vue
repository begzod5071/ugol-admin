<template>
  <div>
    <section class="about-bg">
      <b-container>
        <Header />

        <section class="about-wrapper">
          <h2 class="about-heading text-center">О нас</h2>

          <h6 class="about-tile m-0 mb-4 text-center">
            Основные направления нашей деятельности - добыча природного сырья.
          </h6>
          <p class="about-text m-0 mb-4 mx-auto">
            Добыча полезных ископаемых — процесс извлечения твёрдых, жидких и
            газообразных полезных ископаемых из недр Земли с помощью технических
            средств. Добыча полезных ископаемых относится к первичному сектору
            экономики.
          </p>
          <p class="about-text m-0 mb-4 mx-auto">
            Процесс добычи полезных ископаемых заключается в разработке
            месторождений полезных ископаемых. При разработке месторождений
            производится выемка полезного ископаемого и транспортировка его к
            местам дальнейшей переработки или полезного использования.
          </p>
          <p class="about-text m-0 mx-auto">
            В сфере добычи полезных ископаемых в нашей компани работает
            слаженная команда квалифицированных специалистов, что является
            залогом бесперебойной поставки газа, нефти угля и стабильных
            результатов работы.
          </p>
        </section>
        <section>
          <h2 class="about-heading text-center wrapper-before">Преимущества</h2>
          <b-row class="justify-content-between">
            <b-col
              class="p-0 box-feature"
              md="5"
              lg="5"
              v-for="(feature, index) in featureArr"
              :key="index"
            >
              <FeatureCard :item="feature" />
            </b-col>
          </b-row>
        </section>

        <section class="counter-section">
          <b-row>
            <b-col md="4" lg="4">
              <div>
                <number
                  class="counter-number"
                  ref="number1"
                  :from="0"
                  :to="10"
                  :format="theFormat"
                  :duration="1"
                  :delay="2"
                  easing="Power1.easeOut"
                />

                <!-- <number
                  tag="div"
                  animationPaused
                  ref="number2"
                  :to="10000"
                  :duration="5"
                  easing="Back.easeIn"
                  @complete="completed"
                  @click="playAnimation"
                /> -->
                <span class="counter-number">+</span>
                <span class="counter-text d-block">партнеров по бизнесу</span>
              </div>
            </b-col>
            <b-col md="4" lg="4">
              <div>
                <number
                  class="counter-number"
                  ref="number1"
                  :from="0"
                  :to="275"
                  :format="theFormat"
                  :duration="1"
                  :delay="2"
                  easing="Power1.easeOut"
                />
                <!-- <span class="counter-number d-block">275 </span> -->
                <span class="counter-text d-block">млн. тонн добытой руды</span>
              </div>
            </b-col>
            <b-col md="4" lg="4">
              <div>
                <number
                  class="counter-number"
                  ref="number1"
                  :from="0"
                  :to="265"
                  :format="theFormat"
                  :duration="1"
                  :delay="2"
                  easing="Power1.easeOut"
                />
                <span class="counter-number">+</span>
                <span class="counter-text d-block">сотрудников в штате</span>
              </div>
            </b-col>
          </b-row>
        </section>
      </b-container>
    </section>

    <section>
      <b-container>
        <div id="map">
          <svg class="canvas" :viewBox="`0, 0, ${width}, ${height}`">
            <g class="pathGroup"></g>
            <text id="tooltip" x="50" y="50">{{ displayedCountry }}</text>
          </svg>
        </div>
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
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";
import FeatureCard from "./components/featureCard.vue";
import { BContainer, BRow, BCol } from "bootstrap-vue";

import json from "@/assets/world.json";
import { geoPath, geoEqualEarth } from "d3-geo";
import * as selection from "d3-selection";
import * as zoom from "d3-zoom";
import { feature } from "topojson-client";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "about",
  data() {
    return {
      myJson: feature(json, json.objects["ne_50m_admin_0_countries_lakes"]),
      displayedCountry: "",
      width: 876,
      height: 463,
      featureArr: [
        {
          img: require("../../assets/feature-1.svg"),
          title: "Прямые поставки с карьеров",
          text: "Осуществляем доставку материала напрямую с собственных карьеров",
        },
        {
          img: require("../../assets/feature-2.svg"),
          title: "Наличие собственного автопарка",
          text: "Более 40 единиц спецтехники, для транспортировки и добывания рудных ископаемых",
        },
        {
          img: require("../../assets/feature-3.svg"),
          title: "Имеется вся документация",
          text: "В наличие всегда все документы, акты, договора, квитанции об оплате и сертификаты",
        },
        {
          img: require("../../assets/feature-4.svg"),
          title: "Работа с физ. и юр. лицами",
          text: "Мы работаем как с крупными строительными компаниями, так и с физическими лицами",
        },
      ],
    };
  },
  // methods: {
  //   theFormat(number) {
  //     return number.toFixed(0);
  //   },
  //   completed() {
  //     console.log("Animation ends!");
  //   },
  //   playAnimation() {
  //     this.$refs.number2.play();
  //   },

  // },

  methods: {
    theFormat(number) {
      return number.toFixed(0);
    },
    completed() {
      console.log("Animation ends!");
    },
    playAnimation() {
      this.$refs.number2.play();
    },
    // zoomed() {
    //   const { transform } = selection.event;
    //   this.g.attr("transform", transform);
    //   this.g.attr("stroke-width", 1 / transform.k);
    // },
    clicked(d) {
      const [[x0, y0], [x1, y1]] = this.path.bounds(d);
      selection.event.stopPropagation();
      this.svg
        .transition()
        .duration(750)
        .call(
          this.zoom.transform,
          zoom.zoomIdentity
            .translate(this.width / 2, this.height / 2)
            .scale(
              Math.min(
                8,
                0.9 / Math.max((x1 - x0) / this.width, (y1 - y0) / this.height)
              )
            )
            .translate(-(x0 + x1) / 2, -(y0 + y1) / 2),
          selection.mouse(this.svg.node())
        );
    },
    reset() {
      this.svg
        .transition()
        .duration(750)
        .call(
          this.zoom.transform,
          zoom.zoomIdentity,
          zoom
            .zoomTransform(this.svg.node())
            .invert([this.width / 2, this.height / 2])
        );
    },
    mouseentered(d, i, nodes) {
      this.displayedCountry = d.properties.NAME;
      selection.select(nodes[i]).classed("active", true).raise();
    },
    mouseleft(d, i, nodes) {
      this.displayedCountry = "";
      selection.select(nodes[i]).classed("active", false);
    },
  },
  computed: {
    projection() {
      return geoEqualEarth().fitSize([this.width, this.height], this.myJson);
    },
    path() {
      return geoPath().projection(this.projection);
    },
    g() {
      return selection.select(".pathGroup");
    },
    svg() {
      return selection.select(".canvas");
    },
    zoom() {
      return zoom.zoom().scaleExtent([1, 8]).on("zoom", this.zoomed);
    },
  },
  mounted() {
    this.g
      .selectAll(".country")
      .data(this.myJson.features)
      .join("path")
      .attr("class", "country")
      .attr("d", this.path)
      .on("mouseenter", this.mouseentered)
      .on("mouseleave", this.mouseleft)
      .on("click", this.clicked);
    this.svg.on("click", this.reset).call(this.zoom);
  },
  components: {
    Header,
    Footer,
    FeatureCard,
    BContainer,
    BRow,
    BCol,
  },
};
</script>

<style lang="scss" scoped>
.about-bg {
  padding-top: 56px;
  padding-bottom: 116px;
  // background-image: url("../../assets/about-bg.png");
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url("../../assets/about-bg.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  // height: 100vh;
  /* position: relative; */
}
.footer-wrapper {
  background-color: black;
}
.about-wrapper {
  margin-top: 78px;
  margin-bottom: 127px;
}

.about-heading {
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 49px;
  /* identical to box height */
  margin-bottom: 100px;
  color: #ffffff;
}

.about-tile {
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 30px;

  color: #ffffff;
}

.about-text {
  width: 1026px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;

  color: #ffffff;
}

.about-tile::before {
  content: "";
  position: relative;
  width: 194px;
  height: 3px;
  background-color: #fb7c00;
  display: block;
  top: -15px;
  left: 45px;
}

.wrapper-before::after {
  content: "";
  display: block;
  width: 156px;
  height: 2px;
  background-color: #fb7c00;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  bottom: -21px;
}

.box-feature {
  margin-bottom: 92px;
}

.counter-section {
  margin-top: 57px;
}

.counter-number {
  font-style: normal;
  font-weight: 700;
  font-size: 80px;
  line-height: 98px;

  color: #fb7c00;
}

.counter-text {
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 30px;

  color: #ffffff;
}
</style>