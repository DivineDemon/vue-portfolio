<template>
  <div
    class="w-screen h-screen flex flex-row items-center justify-center"
    :class="{ 'bg-[#181A1B] text-white': dark }"
  >
    <div
      class="flex flex-row items-center justify-center space-x-10 w-[50%] mx-auto"
    >
      <div class="w-[50%] flex flex-col items-start justify-center space-y-5">
        <h1
          class="text-4xl border-b border-black"
          :class="{ 'border-white': dark }"
        >
          About Me
        </h1>
        <p>
          Hello! My name is Mushood and I enjoy creating things that live on the
          interwebs. My interest in web development started back in 2020. It was
          a hypetrain TBH — the amount of people catching web development like
          it was plague, it affected me as well!
        </p>
        <p>
          Fast-forward to today, and I've had the privilege of working at a
          <a
            href="https://softsquare.io"
            class="font-semibold border-b border-black"
            :class="{ 'border-white': dark }"
            >start-up</a
          >,
          <a
            href="https://github.com/DivineDemon/GuardJobPosting"
            class="font-semibold border-b border-black"
            :class="{ 'border-white': dark }"
            >building a start-up</a
          >
          and
          <a
            href="https://www.purelogics.net/"
            class="font-semibold border-b border-black"
            :class="{ 'border-white': dark }"
            >a huge corporation.</a
          >
          My main focus these days is building accessible, inclusive products
          and digital experiences at
          <a
            href="https://www.purelogics.net/"
            class="font-semibold border-b border-black"
            :class="{ 'border-white': dark }"
            >PureLogics</a
          >
          for a variety of clients.
        </p>
        <p>Here are a few technologies I've been working with recently:</p>
        <div class="w-full flex flex-row items-center justify-between px-5">
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
      <div class="w-[50%] flex items-center justify-center">
        <img
          src="@/assets/img/about.jpg"
          alt="profile"
          class="object-cover rounded-xl shadow-2xl"
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
