<template>
  <HeaderBand> </HeaderBand>
  <div>
    <router-view></router-view>
  </div>
  <FooterBand> </FooterBand>
</template>

<script>
import HeaderBand from "@/components/Header.vue";
import FooterBand from "@/components/Footer.vue";
export default {
  components: {
    HeaderBand,
    FooterBand,
  },
};
</script>

<style>
@media screen and (max-width: 350px) {
  body {
    min-width: 350px;
  }
}
</style>
