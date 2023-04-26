<template>
  <div
    v-motion-pop
    class="w-full h-full rounded-lg shadow-xl flex flex-col items-start justify-start p-5"
    :class="dark ? 'bg-black text-white' : 'bg-gray-300 text-black'"
  >
    <div class="w-[100%] flex flex-row items-center justify-between">
      <font-awesome-icon icon="fa-solid fa-folder" class="w-8 h-8" />
      <ul class="flex flex-row items-center justify-center space-x-5">
        <li v-if="repo.repo !== ''">
          <a :href="repo.repo">
            <font-awesome-icon icon="fa-brands fa-github" class="w-6 h-6" />
          </a>
        </li>
        <li v-if="repo.link !== ''">
          <a :href="repo.link">
            <font-awesome-icon icon="fa-solid fa-link" class="w-6 h-6" />
          </a>
        </li>
      </ul>
    </div>
    <div
      class="w-[100%] flex flex-1 flex-col items-start justify-between space-y-4 text-left mt-7"
    >
      <h1 class="text-xl font-semibold">{{ repo.name }}</h1>
      <p class="text-sm">{{ repo.description }}</p>
      <ul
        class="w-full flex flex-row items-start justify-start space-x-5 text-xs"
      >
        <li v-for="tech in repo.stack" :key="tech">{{ tech }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { defineProps, ref, watch, onMounted } from "vue";

// Initialize Store
const store = useStore();

// Data
const dark = ref(false);

// Props
defineProps({
  repo: Object,
});

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
</script>
