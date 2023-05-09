<template>
  <div
    v-motion-slide-bottom
    :delay="300"
    class="fixed bottom-0 w-[100px] h-[500px] left-0 flex flex-col items-center justify-center space-y-10"
    :class="dark ? 'text-white' : 'text-black'"
  >
    <font-awesome-icon icon="fa-brands fa-facebook" class="cursor-pointer" />
    <font-awesome-icon icon="fa-brands fa-github" class="cursor-pointer" />
    <font-awesome-icon
      icon="fa-brands fa-stack-overflow"
      class="cursor-pointer"
    />
    <font-awesome-icon icon="fa-brands fa-linkedin" class="cursor-pointer" />
    <div
      class="fixed bottom-0 rotate-90 w-[250px] border-b"
      :class="dark ? 'border-white' : 'border-black'"
    ></div>
  </div>
</template>

<script setup>
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
