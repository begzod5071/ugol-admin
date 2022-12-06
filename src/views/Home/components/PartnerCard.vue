<template>
  <div>
    <div class="d-flex flex-column align-items-center">
      <div class="partner-box d-flex align-items-center justify-content-center">
        <img src="../../../assets/partner.png" alt="" />
      </div>
      <span class="partner-text d-block">Usoft - IT company</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "PartnerCard",
  data() {
    return {};
  },
};
</script>

<style>
.partner-box {
  margin-bottom: 7px;
  width: 171px;
  height: 175px;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.9) -1.52%,
    rgba(255, 255, 255, 0.5) 104.35%
  );
  -webkit-backdrop-filter: blur(39.6002px);
  backdrop-filter: blur(39.6002px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 15px;
  border: 2px solid #646464;
}

.partner-text {
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;

  color: #ffffff;
}
</style>