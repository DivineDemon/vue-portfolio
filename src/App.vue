<template>
  <NavBar />
  <HeroBanner />
</template>

<script>
import HeroBanner from "./components/HeroBanner.vue";
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
    HeroBanner,
  },
};
</script>
