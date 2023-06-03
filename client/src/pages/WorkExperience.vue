<template>
  <div
    id="experience"
    class="w-screen h-screen flex flex-col items-center justify-center"
    :class="dark ? 'bg-[#181A1B] text-white' : 'bg-white text-black'"
  >
    <h1
      v-motion-pop-visible
      :delay="600"
      class="text-2xl sm:text-4xl md:text-6xl border-b"
      :class="dark ? 'border-white' : 'border-black'"
    >
      Where I've Worked
    </h1>
    <!-- Labels -->
    <ul
      v-motion-pop-visible
      :delay="600"
      class="w-full grid grid-rows-1 grid-cols-12"
    >
      <div class="hidden xl:flex col-span-2" id="splitter" />
      <li
        v-for="experience in experiences"
        class="my-3 mx-12 sm:mx-3 col-span-12 sm:col-span-6 xl:col-span-2 px-5 py-3 rounded-lg cursor-pointer"
        @click="activeTab(experience.id)"
        :key="experience.id"
        :class="
          dark
            ? 'bg-[#181A1B] text-white border border-white'
            : 'bg-white text-black border border-black'
        "
      >
        <span :class="selected === experience.id && 'underline font-bold'">
          {{ experience.name }}
        </span>
      </li>
      <div class="hidden xl:flex col-span-2" id="splitter" />
    </ul>
    <!-- Info -->
    <JobInformation
      v-motion-pop-visible
      :delay="600"
      :experience="experiences[selected]"
    />
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { ref, watch, onMounted } from "vue";

import { experiences } from "@/utils/data";
import JobInformation from "@/components/JobInformation.vue";

// Initialize Store
const store = useStore();

// Data
const dark = ref(false);
const selected = ref(0);

// Methods
const activeTab = (value) => {
  selected.value = value;
};

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
