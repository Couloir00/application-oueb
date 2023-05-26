<template>
  <div class="loading">
    <img src="@/assets/record-load.gif" alt="Loading..." />
    <p class="loadingText">Loading...</p>
  </div>
</template>

<style>
.loading {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
}
.loading img {
  width: 100px;
  height: 100px;
}
</style>
