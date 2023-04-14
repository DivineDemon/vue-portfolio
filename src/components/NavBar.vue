<template>
  <nav
    class="fixed top-0 w-screen px-10 py-5 flex flex-row items-center justify-between space-x-10 backdrop-blur-sm bg-white/30"
    :class="dark ? 'text-white bg-black/30' : 'text-black'"
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
        <li class="hover:border-b-2 hover:border-black">Services</li>
        <li class="hover:border-b-2 hover:border-black">Experience</li>
        <li class="hover:border-b-2 hover:border-black">Projects</li>
        <li class="hover:border-b-2 hover:border-black">Contact</li>
      </ul>
      <!-- Nav Controls -->
      <div class="flex flex-row items-center justify-center space-x-10">
        <!-- Dark Mode Toggle -->
        <DarkMode />
        <!-- Download Resume -->
        <button class="rounded-lg px-3 py-1 hover:border-2 hover:border-black">
          Download Resume
        </button>
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
    console.log(dark.value);
  }
);
</script>
