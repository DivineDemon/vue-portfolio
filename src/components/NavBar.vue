<template>
  <nav
    v-motion-fade
    class="fixed top-0 z-50 w-screen px-10 py-5 flex flex-row items-center justify-between space-x-10 backdrop-blur-sm"
    :class="dark ? 'text-white bg-black/30' : 'text-black bg-white/30'"
  >
    <!-- Logo -->
    <a v-if="dark" href="#home">
      <img src="@/assets/img/logo-light.png" alt="logo" class="w-10 h-10" />
    </a>
    <a v-else href="#home">
      <img src="@/assets/img/logo.png" alt="logo" class="w-10 h-10" />
    </a>
    <div class="hidden flex-1 w-full lg:flex items-center justify-between">
      <!-- Nav Items -->
      <ul class="flex flex-row items-center justify-center space-x-10">
        <li
          class="cursor-pointer hover:border-b-2 hover:border-black"
          :class="{ 'hover:border-white': dark }"
        >
          <a href="#about">About</a>
        </li>
        <li
          class="cursor-pointer hover:border-b-2 hover:border-black"
          :class="{ 'hover:border-white': dark }"
        >
          <a href="#experience">Experience</a>
        </li>
        <li
          class="cursor-pointer hover:border-b-2 hover:border-black"
          :class="{ 'hover:border-white': dark }"
        >
          <a href="#work">Work</a>
        </li>
        <li
          class="cursor-pointer hover:border-b-2 hover:border-black"
          :class="{ 'hover:border-white': dark }"
        >
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <!-- Nav Controls -->
      <div class="flex flex-row items-center justify-center space-x-10">
        <!-- Dark Mode Toggle -->
        <DarkMode />
        <!-- Download Resume -->
        <a
          href="https://www.mediafire.com/file/mtn1vk35a2rcgqe/Resume.pdf/file"
          class="rounded-lg px-3 py-1 hover:border-2 hover:border-black"
          :class="{ 'hover:border-white': dark }"
          download
        >
          Download Resume
        </a>
      </div>
    </div>

    <!-- Responsive Navbar -->
    <DropDown class="flex lg:hidden" :items="dropDown" />
  </nav>
</template>

<script setup>
import { useStore } from "vuex";
import { ref, watch, onMounted } from "vue";

import DropDown from "@/utils/DropDown.vue";
import DarkMode from "@/utils/DarkMode.vue";
// import Resume from "@/assets/downloads/resume.pdf";

// Initialize Store
const store = useStore();

// Data
const dark = ref(false);
const dropDown = ref([
  "Services",
  "Experience",
  "Projects",
  "Contact",
  "Download Resume",
]);

// Watchers
watch(
  () => {
    return store.getters.getDarkMode;
  },
  (newValue) => {
    dark.value = newValue;
  }
);

// Mounted Hook
onMounted(() => {
  dark.value = JSON.parse(localStorage.getItem("vuex")).darkMode;
});
</script>
