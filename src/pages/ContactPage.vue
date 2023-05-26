<template>
  <div class="contact-container">
    <div class="contact-image"></div>
    <ContactFormComponent />
  </div>
</template>

<script>
import ContactFormComponent from "@/components/ContactFormComponent.vue";
export default {
  name: "ContactPage",
  components: {
    ContactFormComponent,
  },
};
</script>

<style scoped>
.contact-container {
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: row;
}

.contact-image {
  width: 50%;
  background-image: url("@/assets/contact-pic.jpg");
  background-size: cover;
  background-position: center;
  height: 100vh;
}

@media (max-width: 768px) {
  .contact-container {
    flex-direction: column;
    height: auto;
  }

  .contact-image {
    width: 100%;
    height: 20vh;
  }
}
</style>
