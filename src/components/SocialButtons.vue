<template>
  <div
    v-motion-slide-bottom
    :delay="600"
    class="fixed bottom-0 w-[40px] xs:w-[100px] h-[500px] left-0 flex flex-col items-center justify-center space-y-10"
    :class="dark ? 'text-white' : 'text-black'"
  >
    <a href="https://www.facebook.com/Mushood.Hanif/">
      <font-awesome-icon icon="fa-brands fa-facebook" class="cursor-pointer" />
    </a>
    <a href="https://www.github.com/DivineDemon">
      <font-awesome-icon icon="fa-brands fa-github" class="cursor-pointer" />
    </a>
    <a href="https://stackoverflow.com/users/9131774/mushood-hanif">
      <font-awesome-icon
        icon="fa-brands fa-stack-overflow"
        class="cursor-pointer"
      />
    </a>
    <a href="https://www.linkedin.com/in/mushood-hanif/">
      <font-awesome-icon icon="fa-brands fa-linkedin" class="cursor-pointer" />
    </a>
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
