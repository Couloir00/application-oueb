<template>
  <div class="background-image">
    <div class="text-animation">
      <span class="word">We</span>
      <span class="word">are</span>
      <span class="word">Indie</span>
      <span class="word">Bangerzzz</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  mounted() {
    this.startAnimation();
  },
  methods: {
    startAnimation() {
      const words = document.querySelectorAll(".word");
      let currentWord = 0;

      setInterval(() => {
        words[currentWord].classList.remove("show");
        currentWord = (currentWord + 1) % words.length;
        words[currentWord].classList.add("show");
      }, 1000);
    },
  },
};
</script>

<style>
.background-image {
  position: relative;
  height: 100vh;
  background-image: url("@/assets/home-pic.jpg");
  background-size: cover;
  background-position: center;
}

.text-animation {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  width: 100%;
}

.word {
  opacity: 0;
  font-size: 8.5vw;
  font-weight: bold;
}

.word.show {
  opacity: 1;
}

@media (max-width: 768px) {
  .word {
    font-size: 14vw;
  }
  .text-animation {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: white;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
