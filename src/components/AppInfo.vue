<template>
  <div class="w-[50%] flex items-center justify-center relative">
    <div
      class="w-[70%] absolute top-10 left-0 shadow-2xl bg-black"
      v-for="app in appInfo"
      :key="app.id"
    >
      <img
        :src="require(`@/assets/img/${app.img}`)"
        alt="binaziz"
        class="w-full opacity-50 hover:opacity-100"
      />
    </div>
    <div
      class="w-[50%] flex flex-col items-end justify-end space-y-5 absolute top-20 right-0"
      v-for="app in appInfo"
      :key="app.id"
    >
      <p class="text-xs underline uppercase">featured project</p>
      <h1 class="text-xl font-semibold capitalize">{{ app.name }}</h1>
      <p
        class="w-full p-3 text-right backdrop-blur-sm"
        :class="dark ? 'text-white bg-black/30' : 'text-black bg-white/30'"
      >
        {{ app.description }}
      </p>
      <ul
        v-for="tech in app.techstack"
        :key="tech"
        class="w-full text-xs flex flex-row items-end justify-end space-x-5"
      >
        <li>{{ tech }}</li>
      </ul>
      <ul class="w-full text-xs flex flex-row items-end justify-end space-x-10">
        <li>
          <a :href="app.github">
            <font-awesome-icon icon="fa-brands fa-github" class="w-6 h-6" />
          </a>
        </li>
        <li>
          <a :href="app.link">
            <font-awesome-icon icon="fa-solid fa-link" class="w-6 h-6" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { ref, watch, onMounted } from "vue";
import { appInfo } from "@/utils/data";

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
