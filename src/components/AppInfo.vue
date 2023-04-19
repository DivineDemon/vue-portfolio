<template>
  <div class="w-[70%] flex flex-col items-center justify-center relative">
    <div
      class="my-20 flex flex-row items-center justify-center w-full"
      v-for="app in appInfo"
      :key="app.id"
    >
      <div class="w-[50%]" :class="app.id % 2 !== 0 && 'order-last'">
        <img
          :src="require(`@/assets/img/${app.img}`)"
          alt="binaziz"
          class="w-full rounded-lg shadow-xl"
        />
      </div>
      <div
        class="w-[50%] flex flex-col space-y-5"
        :class="
          app.id % 2 !== 0
            ? 'items-start justify-start'
            : 'items-end justify-end'
        "
      >
        <p class="text-xs underline uppercase">featured project</p>
        <h1 class="text-xl font-semibold capitalize">{{ app.name }}</h1>
        <div
          class="w-[75%] p-3"
          :class="
            dark
              ? 'text-black bg-white rounded-lg'
              : 'text-white bg-black rounded-lg'
          "
        >
          <p
            class="w-full"
            :class="app.id % 2 !== 0 ? 'text-left' : 'text-right'"
          >
            {{ app.description }}
          </p>
        </div>
        <ul
          class="w-full text-xs flex flex-row space-x-5"
          :class="
            app.id % 2 !== 0
              ? 'items-start justify-start'
              : 'items-end justify-end'
          "
        >
          <li v-for="tech in app.stack" :key="tech">{{ tech }}</li>
        </ul>
        <ul
          class="w-full text-xs flex flex-row space-x-10"
          :class="
            app.id % 2 !== 0
              ? 'items-start justify-start'
              : 'items-end justify-end'
          "
        >
          <li v-if="app.github !== ''">
            <a :href="app.github">
              <font-awesome-icon icon="fa-brands fa-github" class="w-6 h-6" />
            </a>
          </li>
          <li v-if="app.link !== ''">
            <a :href="app.link">
              <font-awesome-icon icon="fa-solid fa-link" class="w-6 h-6" />
            </a>
          </li>
        </ul>
      </div>
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
