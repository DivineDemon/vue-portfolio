<template>
  <div
    id="about"
    class="w-full h-screen flex flex-col lg:flex-row items-center justify-center space-x-0 lg:space-x-16"
    :class="{ 'bg-[#181A1B] text-white': dark }"
  >
    <div
      v-motion-slide-visible-bottom
      :delay="600"
      class="order-2 lg:order-1 w-[75%] sm:w-[80%] lg:w-[50%] flex flex-col items-center sm:items-start justify-center space-y-5 text-xs sm:text-normal lg:text-lg"
    >
      <h1
        class="text-4xl sm:text-6xl border-b border-black"
        :class="{ 'border-white': dark }"
      >
        About Me
      </h1>
      <p class="text-gray-400">
        Hello! My name is Mushood and I enjoy creating things that live on the
        interwebs. My interest in web development started back in 2020. It was a
        hypetrain TBH — the amount of people catching web development like it
        was plague, it affected me as well!
      </p>
      <p class="text-gray-400">
        Fast-forward to today, and I've had the privilege of working at a
        <a
          href="https://softsquare.io"
          class="font-semibold border-b border-black text-black"
          :class="{ 'border-white text-white': dark }"
          >start-up</a
        >,
        <a
          href="https://github.com/DivineDemon/GuardJobPosting"
          class="font-semibold border-b border-black text-black"
          :class="{ 'border-white text-white': dark }"
          >building a start-up</a
        >
        and
        <a
          href="https://www.purelogics.net/"
          class="font-semibold border-b border-black text-black"
          :class="{ 'border-white text-white': dark }"
          >a huge corporation.</a
        >
        My main focus these days is building accessible, inclusive products and
        digital experiences at
        <a
          href="https://www.purelogics.net/"
          class="font-semibold border-b border-black text-black"
          :class="{ 'border-white text-white': dark }"
          >PureLogics</a
        >
        for a variety of clients.
      </p>
      <p class="text-gray-400">
        Here are a few technologies I've been working with recently:
      </p>
      <div
        class="text-black w-full flex flex-row items-center justify-between px-5"
        :class="{ 'text-white': dark }"
      >
        <ul class="list-disc">
          <li>JavaScript</li>
          <li>Vue</li>
          <li>React</li>
        </ul>
        <ul class="list-disc">
          <li>Node.js</li>
          <li>MySQL</li>
          <li>Prisma</li>
        </ul>
        <ul class="list-disc">
          <li>Nuxt</li>
          <li>Next</li>
        </ul>
      </div>
    </div>
    <div
      v-motion-slide-visible-top
      :delay="600"
      class="order-1 lg:order-2 2xl:w-[25%] h-[25%] lg:h-[50%] flex flex-col items-center justify-center space-y-5 my-8 lg:my-0"
    >
      <img
        src="https://i.imgur.com/1CwC9iz.jpeg"
        alt="profile"
        class="object-cover rounded-xl shadow-2xl w-full h-full"
      />
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
