<template>
  <div class="flex flex-col w-full items-center justify-center">
    <span
      class="text-xl font-semibold flex flex-row items-center justify-center space-x-5"
      :class="dark ? 'text-white' : 'text-black'"
    >
      <div
        class="flex flex-col md:flex-row items-center justify-center space-x-5"
      >
        <span>{{ experience.job }}</span>
        <span class="hidden md:inline-block">@</span>
        <span>{{ experience.name }}</span>
      </div>
      <span class="hidden md:inline-block text-sm text-gray-400">
        ({{ experience.type }})
      </span>
    </span>
    <span class="mt-2 mb-5 text-sm text-gray-400">
      {{ new Date(experience.from).toDateString() }} &middot;
      {{ experience.to }}
    </span>
    <ul class="sm:list-disc w-[70%] text-xs md:text-normal lg:text-lg">
      <li class="my-3" v-for="work in experience.responsibilities" :key="work">
        {{ work }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { ref, watch, onMounted } from "vue";

// Initialize Store
const store = useStore();

// Data
const dark = ref(false);

// Props
defineProps({
  experience: Object,
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
