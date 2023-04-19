<template>
  <div class="col-span-8 flex flex-col w-full">
    <span
      class="text-xl font-semibold"
      :class="dark ? 'text-white' : 'text-black'"
    >
      {{ experience.job }} @ {{ experience.name }}
      <span class="text-sm text-gray-400">({{ experience.type }})</span>
    </span>
    <span class="mt-2 mb-5 text-sm text-gray-400">
      {{ experience.from }} &middot;
      {{ experience.to }}
    </span>
    <ul class="list-disc">
      <li class="my-3" v-for="work in experience.responsibilities" :key="work">
        {{ work }}
      </li>
    </ul>
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
