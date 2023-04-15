<template>
  <div id="app" class="overflow-x-hidden">
    <NavBar />
    <HeroBanner />
    <AboutMe />
    <WorkExperience />
  </div>
</template>

<script>
import AboutMe from "./components/AboutMe.vue";
import HeroBanner from "./components/HeroBanner.vue";
import NavBar from "./components/NavBar.vue";
import WorkExperience from "./components/WorkExperience.vue";

export default {
  name: "App",
  components: {
    NavBar,
    HeroBanner,
    AboutMe,
    WorkExperience,
  },
};
</script>
