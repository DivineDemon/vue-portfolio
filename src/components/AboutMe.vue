<template>
  <div
    class="w-screen h-screen"
    :class="{ 'bg-[#181A1B] text-white': dark }"
  ></div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useStore } from "vuex";

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
</script>
