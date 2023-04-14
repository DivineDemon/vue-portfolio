<template>
  <nav
    class="fixed top-0 w-screen px-10 py-5 flex flex-row items-center justify-between space-x-10 backdrop-blur-sm"
    :class="dark ? 'text-white bg-black/30' : 'text-black bg-white/30'"
  >
    <!-- Logo -->
    <img
      v-if="dark"
      src="@/assets/img/logo-light.png"
      alt="logo"
      class="w-10 h-10"
    />
    <img v-else src="@/assets/img/logo.png" alt="logo" class="w-10 h-10" />
    <div class="hidden flex-1 w-full lg:flex items-center justify-between">
      <!-- Nav Items -->
      <ul class="flex flex-row items-center justify-center space-x-10">
        <li
          class="cursor-pointer hover:border-b-2 hover:border-black"
          :class="{ 'hover:border-white': dark }"
        >
          Services
        </li>
        <li
          class="cursor-pointer hover:border-b-2 hover:border-black"
          :class="{ 'hover:border-white': dark }"
        >
          Experience
        </li>
        <li
          class="cursor-pointer hover:border-b-2 hover:border-black"
          :class="{ 'hover:border-white': dark }"
        >
          Projects
        </li>
        <li
          class="cursor-pointer hover:border-b-2 hover:border-black"
          :class="{ 'hover:border-white': dark }"
        >
          Contact
        </li>
      </ul>
      <!-- Nav Controls -->
      <div class="flex flex-row items-center justify-center space-x-10">
        <!-- Dark Mode Toggle -->
        <DarkMode />
        <!-- Download Resume -->
        <a
          href="../assets/downloads/resume.pdf"
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
import { ref, watch } from "vue";
import { useStore } from "vuex";

import DropDown from "@/utils/DropDown.vue";
import DarkMode from "@/utils/DarkMode.vue";

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
</script>
