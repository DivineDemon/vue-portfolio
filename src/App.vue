<template>
  <div id="app" class="overflow-x-hidden">
    <NavBar />
    <HeroBanner />
    <AboutMe />
  </div>
</template>

<script>
import AboutMe from "./components/AboutMe.vue";
import HeroBanner from "./components/HeroBanner.vue";
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
    HeroBanner,
    AboutMe,
  },
};
</script>
