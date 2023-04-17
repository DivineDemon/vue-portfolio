<template>
  <div id="app" class="relative overflow-x-hidden">
    <NavBar />
    <HeroBanner />
    <AboutMe />
    <WorkExperience />
    <SocialButtons />
    <HoverEmail />
  </div>
</template>

<script>
import AboutMe from "./components/AboutMe.vue";
import HeroBanner from "./components/HeroBanner.vue";
import NavBar from "./components/NavBar.vue";
import SocialButtons from "./components/SocialButtons.vue";
import HoverEmail from "./components/HoverEmail.vue";
import WorkExperience from "./components/WorkExperience.vue";

export default {
  name: "App",
  components: {
    NavBar,
    HeroBanner,
    AboutMe,
    WorkExperience,
    SocialButtons,
    HoverEmail,
  },
};
</script>
