<template>
  <div class="w-[70%] flex flex-col items-center justify-center relative">
    <div
      class="py-20 flex flex-col lg:flex-row items-center justify-center w-full"
      v-for="(app, index) in appInfo"
      :key="app.id"
    >
      <div
        v-motion-slide-visible-left
        :delay="600"
        class="w-[80%] lg:w-[50%]"
        :class="index % 2 !== 0 && 'order-last'"
      >
        <img
          :src="app.image"
          :alt="app.name"
          class="w-full rounded-lg shadow-xl my-5 lg:my-0"
        />
      </div>
      <div
        v-motion-slide-visible-right
        class="w-[80%] lg:w-[50%] flex flex-col space-y-5"
        :class="
          index % 2 !== 0
            ? 'items-center justify-center lg:items-start lg:justify-start'
            : 'items-center justify-center lg:items-end lg:justify-end'
        "
      >
        <p class="text-xs underline uppercase">featured project</p>
        <h1 class="text-xl font-semibold capitalize">{{ app.name }}</h1>
        <div
          class="w-full lg:w-[75%] p-3"
          :class="
            dark
              ? 'text-black bg-white rounded-lg'
              : 'text-white bg-black rounded-lg'
          "
        >
          <p
            class="w-full text-xs md:text-normal lg:text-lg"
            :class="index % 2 !== 0 ? 'text-left' : 'text-right'"
          >
            {{ app.description }}
          </p>
        </div>
        <ul
          class="w-full text-xs flex flex-row space-x-5"
          :class="
            index % 2 !== 0
              ? 'items-center justify-center lg:items-start lg:justify-start'
              : 'items-center justify-center lg:items-end lg:justify-end'
          "
        >
          <li v-for="tech in app.stack" :key="tech">{{ tech }}</li>
        </ul>
        <ul
          class="w-full text-xs flex flex-row space-x-10"
          :class="
            index % 2 !== 0
              ? 'items-center justify-center lg:items-start lg:justify-start'
              : 'items-center justify-center lg:items-end lg:justify-end'
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

// Initialize Store
const store = useStore();

// Data
const dark = ref(false);
const appInfo = store.getters.getAppInfo;

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
