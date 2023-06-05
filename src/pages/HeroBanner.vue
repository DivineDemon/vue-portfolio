<template>
  <div
    id="home"
    class="w-screen h-screen flex items-center justify-center lg:space-x-10"
    :class="{ 'bg-[#181A1B] text-white': dark }"
  >
    <!-- Profile -->
    <img
      v-motion-slide-left
      :delay="600"
      src="@/assets/img/profile.jpg"
      alt="profile"
      class="hidden lg:flex rounded-full w-[17.5%] h-[55%] object-cover shadow-2xl"
    />
    <!-- Introduction -->
    <div
      v-motion-slide-right
      :delay="600"
      class="flex flex-col items-center md:items-start justify-center w-[70%] md:w-[80%] lg:w-[30%]"
    >
      <p
        class="md:border-b md:border-black text-xs uppercase mb-5 text-center md:text-left"
        :class="{ 'border-white': dark }"
      >
        Hi! I'm Mushood Hanif / Fullstack Developer
      </p>
      <h1 class="text-4xl text-center md:text-left md:text-6xl">
        Need a Website?
      </h1>
      <h1 class="text-4xl text-center md:text-left md:text-6xl">
        Look No Further,
      </h1>
      <h1 class="text-4xl text-center md:text-left md:text-6xl">
        I Gotchu Fam!
      </h1>
      <p class="text-sm text-gray-400 text-justify mt-5">
        My expertise is Fullstack development. I breath life into UI mockups and
        integrate those living UI designs with efficient and excellent database
        and backend architecture.
      </p>
      <!-- Socials -->
      <div class="mt-5 w-full flex flex-row items-center justify-between">
        <button
          class="rounded-lg px-3 py-1 bg-black text-white font-medium hidden sm:flex flex-row items-center justify-center space-x-5"
        >
          <span>Contact Me</span>
          <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
        </button>
        <font-awesome-icon
          icon="fa-brands fa-facebook"
          class="cursor-pointer"
        />
        <font-awesome-icon icon="fa-brands fa-github" class="cursor-pointer" />
        <font-awesome-icon
          icon="fa-brands fa-stack-overflow"
          class="cursor-pointer"
        />
        <font-awesome-icon
          icon="fa-brands fa-linkedin"
          class="cursor-pointer"
        />
      </div>
    </div>
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
