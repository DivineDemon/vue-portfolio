<template>
  <NavBar />
  <HeroBanner />
  <AboutMe />
  <WorkExperience />
  <WebProjects />
  <OtherProjects />
  <ContactCard />
  <FooterBar />
  <SocialButtons />
  <HoverEmail />
</template>

<script setup>
import { onMounted } from "vue";
import { useStore } from "vuex";

// Pages
import AboutMe from "./pages/AboutMe.vue";
import HeroBanner from "./pages/HeroBanner.vue";
import WebProjects from "./pages/WebProjects.vue";
import ContactCard from "./pages/ContactCard.vue";
import OtherProjects from "./pages/OtherProjects.vue";
import WorkExperience from "./pages/WorkExperience.vue";

// Components
import NavBar from "./components/NavBar.vue";
import FooterBar from "./components/FooterBar.vue";
import HoverEmail from "./components/HoverEmail.vue";
import SocialButtons from "./components/SocialButtons.vue";

// Initialize Store
const store = useStore();

// Mounted
onMounted(() => {
  store.dispatch("fetchAppInfo");
  store.dispatch("fetchRepoInfo");
  store.dispatch("fetchExperience");
});
</script>
