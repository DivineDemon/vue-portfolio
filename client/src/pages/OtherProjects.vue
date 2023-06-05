<template>
  <div
    class="w-screen flex flex-col items-center justify-center space-y-5"
    :class="{ 'bg-[#181A1B] text-white': dark }"
  >
    <h1
      class="text-xl md:text-3xl border-b"
      :class="dark ? 'border-white' : 'border-black'"
    >
      Other Noteworthy Projects
    </h1>
    <a
      href="https://www.github.com/DivineDemon"
      class="text-sm lowercase hover:underline"
      v-motion-pop-visible
      :delay="600"
    >
      ( view the archive )
    </a>
    <div
      class="w-[70%] xl:w-[50%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
    >
      <AppCard v-for="repo in repoInfo" :key="repo.id" :repo="repo" />
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { ref, watch, onMounted } from "vue";

import { repoInfo } from "@/utils/data";
import AppCard from "@/components/AppCard.vue";

// Initialize Store
const store = useStore();

// Data
const dark = ref(false);

// Watchers
watch(
  () => {
    return store.getters.getDarkMode;
  },
  (newValue) => {
    dark.value = newValue;
  }
);

// Mounted
onMounted(() => {
  dark.value = JSON.parse(localStorage.getItem("vuex")).darkMode;
});

// v-motion-pop-visible
// :delay="600"
</script>
