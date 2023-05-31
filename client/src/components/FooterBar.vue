<template>
  <div
    class="w-screen p-5 flex flex-col items-center justify-center space-y-3"
    :class="dark ? 'bg-[#181A1B] text-white' : 'bg-white text-black'"
  >
    <p class="text-sm">
      <a href="https://www.github.com/DivineDemon" class="hover:underline">
        Designed and Built by Mushood Hanif
      </a>
    </p>
    <!-- <p></p> -->
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
