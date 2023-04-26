<template>
  <div
    v-motion-slide-bottom
    class="fixed bottom-0 h-[500px] right-0 flex flex-col items-center justify-center space-y-10"
    :class="dark ? 'text-white' : 'text-black'"
  >
    <p
      class="text-sm rotate-90 leading-none tracking-widest"
      :class="dark ? 'text-white' : 'text-black'"
    >
      mohdmushood@yahoo.com
    </p>
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
