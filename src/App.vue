<template>
  <div id="app" class="relative overflow-x-hidden">
    <NavBar />
    <HeroBanner />
    <AboutMe />
    <WorkExperience />
    <WebProjects />
    <SocialButtons />
    <HoverEmail />
  </div>
</template>

<script>
import AboutMe from "./pages/AboutMe.vue";
import HeroBanner from "./pages/HeroBanner.vue";
import NavBar from "./pages/NavBar.vue";
import SocialButtons from "./pages/SocialButtons.vue";
import HoverEmail from "./pages/HoverEmail.vue";
import WorkExperience from "./pages/WorkExperience.vue";
import WebProjects from "./pages/WebProjects.vue";

export default {
  name: "App",
  components: {
    NavBar,
    HeroBanner,
    AboutMe,
    WorkExperience,
    SocialButtons,
    HoverEmail,
    WebProjects,
  },
};
</script>
