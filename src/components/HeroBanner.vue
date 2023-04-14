<template>
  <div
    class="w-screen h-screen flex items-center justify-center space-x-10"
    :class="{ 'bg-[#181A1B] text-white': dark }"
  >
    <!-- Profile -->
    <img
      src="@/assets/img/profile.jpg"
      alt="profile"
      class="rounded-full w-[17.5%] h-[55%] object-cover shadow-2xl"
    />
    <!-- Introduction -->
    <div class="flex flex-col items-start justify-center w-[30%]">
      <p
        class="border-b border-black text-xs uppercase mb-5"
        :class="{ 'border-white': dark }"
      >
        Hi! I'm Mushood Hanif / Fullstack Developer
      </p>
      <h1 class="text-6xl">Need a Website?</h1>
      <h1 class="text-6xl">Look No Further,</h1>
      <h1 class="text-6xl">I Gotchu Fam!</h1>
      <p class="text-sm text-gray-400 text-justify mt-5">
        My expertise is Fullstack development. I breath life into UI mockups and
        integrate those living UI designs with efficient and excellent database
        and backend architecture.
      </p>
      <!-- Socials -->
      <div class="mt-5 w-full flex flex-row items-center justify-between">
        <button
          class="rounded-lg px-3 py-1 bg-black text-white font-medium flex flex-row items-center justify-center space-x-5"
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
