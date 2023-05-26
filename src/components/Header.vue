<template>
  <div>
    <header>
      <nav>
        <ul>
          <li>
            <router-link :to="{ name: 'homePage' }">Accueil</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'artistsGallery' }">Artists</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'contactPage' }">Contact</router-link>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: "HeaderBand",
};
</script>
<style>
header {
  background-color: #333;
  color: white;
  padding: 10px;
}

nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

nav li {
  float: left;
}

nav li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

nav li a:hover {
  background-color: #111;
}
</style>
