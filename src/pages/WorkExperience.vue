<template>
  <div
    id="experience"
    class="w-screen h-screen flex flex-col items-center justify-center space-y-10"
    :class="dark ? 'bg-[#181A1B] text-white' : 'bg-white text-black'"
  >
    <h1
      class="text-6xl border-b"
      :class="dark ? 'border-white' : 'border-black'"
    >
      Where I've Worked
    </h1>
    <div v-motion-pop class="w-[50%] mx-auto grid grid-cols-12">
      <!-- Labels -->
      <div class="col-span-4 flex flex-col items-center justify-center">
        <ul>
          <li
            class="text-sm px-5 py-3 border-r w-full text-right cursor-pointer"
            :class="
              selected === xp.id
                ? dark
                  ? 'border-r-4 border-white font-bold'
                  : 'border-r-4 border-black font-bold'
                : dark
                ? 'border-white'
                : 'border-black'
            "
            @click="activeTab(xp.id)"
            v-for="xp in experiences"
            :key="xp.id"
          >
            {{ xp.name }}
          </li>
        </ul>
      </div>
      <!-- Info -->
      <JobInformation :experience="experiences[selected]" />
    </div>
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
