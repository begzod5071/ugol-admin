<template>
  <div>
    <footer class="footer-section">
      <div class="d-flex">
        <div class="footer-box-one">
          <img :src="logo" alt="site-logo" />
          <ul class="list-unstyled m-0 p-0 d-flex align-items-center list">
            <li
              v-for="(item, index) in social_media"
              :key="index"
              class="item-icon"
            >
              <a href="#" class="d-flex">
                <img :src="item" alt="logo" />
              </a>
            </li>
          </ul>
        </div>

        <ul class="list-unstyled m-0 p-0 footer-list-link">
          <li>
            <span class="footer-link">Главная</span>
          </li>
          <li>
            <span class="footer-link">Продукция</span>
          </li>
          <li>
            <span class="footer-link">О нас</span>
          </li>
        </ul>

        <div class="ml-auto footer-left-box">
          <div class="d-flex align-items-center mb-4">
            <img
              class="mr-3"
              src="../assets/phone.svg"
              alt="phone"
              width="25"
              height="25"
            />
            <a style="color: #ffff" href="tel:+998 97 749 62 48"
              >+998 97 749 62 48</a
            >
          </div>
          <div class="d-flex align-items-center">
            <img
              class="mr-3"
              src="../assets/email.svg"
              alt="phone"
              width="25"
              height="25"
            />
            <a style="color: #ffff" href="mailto:carboresource@mail.ru"
              >carboresource@mail.ru</a
            >
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logo: require("@/assets/site-logo.svg"),
      social_media: [
        require("@/assets/instagram.svg"),
        require("@/assets/facebook.svg"),
        require("@/assets/twitter.svg"),
        require("@/assets/telegram.svg"),
      ],
    };
  },
};
</script>

<style scoped>
.footer-section {
  padding-top: 33px;
  padding-bottom: 60px;
}

.list {
  margin-top: 70px !important;
}

.item-icon {
  margin-right: 52px;
}

.item-icon:last-child {
  margin-right: 0;
}

.footer-link {
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */

  color: #ffffff;
}

.footer-box-one {
  margin-right: 318px;
}

.footer-list-link {
  margin-top: 40px !important;
}

.footer-list-link li {
  margin-bottom: 20px;
}

.footer-list-link li:last-child {
  margin-bottom: 0;
}

.footer-left-box{
  margin-top: 80px;
}
</style>