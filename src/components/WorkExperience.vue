<template>
  <div
    class="w-screen h-screen flex flex-col items-center justify-center space-y-10"
    :class="dark ? 'bg-[#181A1B] text-white' : 'bg-white text-black'"
  >
    <h1
      class="text-6xl border-b"
      :class="dark ? 'border-white' : 'border-black'"
    >
      Where I've Worked
    </h1>
    <div class="w-[50%] mx-auto grid grid-cols-12">
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
      <div class="col-span-8 flex flex-col w-full">
        <span
          class="text-xl font-semibold"
          :class="dark ? 'text-white' : 'text-black'"
        >
          {{ experiences[selected].job }} @ {{ experiences[selected].name }}
          <span class="text-sm text-gray-400"
            >({{ experiences[selected].type }})</span
          >
        </span>
        <span class="mt-2 mb-5 text-sm text-gray-400">
          {{ experiences[selected].from }} &middot;
          {{ experiences[selected].to }}
        </span>
        <ul class="list-disc">
          <li
            class="my-3"
            v-for="work in experiences[selected].responsibilities"
            :key="work"
          >
            {{ work }}
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
const selected = ref(0);
const experiences = ref([
  {
    id: 0,
    name: "PureLogics",
    from: "10th April 2023",
    to: "Present",
    job: "Software Engineer",
    type: "Full-Time",
    responsibilities: [
      "Write efficient, maintainable code for a variety of clients and internal projects.",
      "Working with a variety of Frontend Libraries and Frameworks.",
      "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis.",
    ],
  },
  {
    id: 1,
    name: "Intech Studio",
    from: "26th January 2023",
    to: "10th April 2023",
    job: "Full Stack Developer",
    type: "Part-Time",
    responsibilities: [
      "Provide Support to Existing Projects near Deadline.",
      "Deploy Full Stack applications to the Web on linux-based servers using Apache.",
      "Add or Manipulate new or existing Features.",
    ],
  },
  {
    id: 2,
    name: "SoftSquare",
    from: "3rd November 2022",
    to: "31st March 2023",
    job: "Frontend Developer",
    type: "Full-Time",
    responsibilities: [
      "Write modern, performant, maintainable code for a diverse array of client and internal projects",
      "Provide Support to Existing Projects near Deadline.",
      "Create Standalone projects for Clients.",
    ],
  },
  {
    id: 3,
    name: "KoalaBase",
    from: "March 21st 2021",
    to: "November 1st 2022",
    job: "Full Stack Developer",
    type: "Contract",
    responsibilities: [
      "Single-handedly developed a Flagship Web app for the Company",
      "Provided support to Existing Projects",
      "Communicated and provided support and maintenance to clients after testing during implementation",
    ],
  },
]);

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
