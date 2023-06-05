<template>
  <div
    id="work"
    class="flex flex-col items-center"
    :class="dark ? 'bg-[#181A1B] text-white' : 'bg-white text-black'"
  >
    <h1
      class="mb-5 lg:mb-16 text-lg md:text-2xl sm:text-4xl lg:text-6xl border-b"
      :class="dark ? 'border-white' : 'border-black'"
      v-motion-pop-visible
      :delay="600"
    >
      Some Things I've Built
    </h1>
    <AppInfo />
  </div>
</template>

<script setup>
import AppInfo from "@/components/AppInfo.vue";
import { ref, watch, onMounted } from "vue";
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

// Mounted
onMounted(() => {
  dark.value = JSON.parse(localStorage.getItem("vuex")).darkMode;
});
</script>
