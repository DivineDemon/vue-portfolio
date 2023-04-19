<template>
  <div
    class="w-screen h-screen flex flex-col items-center"
    :class="dark ? 'bg-[#181A1B] text-white' : 'bg-white text-black'"
  >
    <h1
      class="mb-16 text-6xl border-b"
      :class="dark ? 'border-white' : 'border-black'"
    >
      Some Things I've Built
    </h1>
    <div class="w-[50%] flex items-center justify-center relative">
      <div class="w-[70%] absolute top-10 left-0 shadow-2xl bg-black">
        <img
          src="@/assets/img/binaziz.png"
          alt="binaziz"
          class="w-full opacity-50 hover:opacity-100"
        />
      </div>
      <div
        class="w-[50%] flex flex-col items-end justify-end space-y-5 absolute top-20 right-0"
      >
        <p class="text-xs underline uppercase">featured project</p>
        <h1 class="text-xl font-semibold capitalize">bin aziz builders</h1>
        <p
          class="w-full p-3 text-right backdrop-blur-sm"
          :class="dark ? 'text-white bg-black/30' : 'text-black bg-white/30'"
        >
          A national construction company wanting to expand their horizon and
          reach needed a IT infrastructure for their business model. Work in
          Progress.
        </p>
        <ul
          class="w-full text-xs flex flex-row items-end justify-end space-x-5"
        >
          <li>Vue 3</li>
          <li>Tailwind CSS</li>
          <li>Font Awesome</li>
        </ul>
        <ul
          class="w-full text-xs flex flex-row items-end justify-end space-x-10"
        >
          <li>
            <a href="https://github.com/DivineDemon/coming-soon">
              <font-awesome-icon icon="fa-brands fa-github" class="w-6 h-6" />
            </a>
          </li>
          <li>
            <a href="https://binaziz.com">
              <font-awesome-icon icon="fa-solid fa-link" class="w-6 h-6" />
            </a>
          </li>
        </ul>
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
