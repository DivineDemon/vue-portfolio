<template>
  <div>
    <Switch
      v-model="enabled"
      :class="enabled ? 'bg-sky-500' : 'bg-yellow-500'"
      class="relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
    >
      <span class="sr-only">Dark Mode</span>
      <span
        aria-hidden="true"
        :class="enabled ? 'translate-x-9' : 'translate-x-0'"
        class="flex items-center justify-center pointer-events-none h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
      >
        <font-awesome-icon
          v-if="enabled"
          icon="fa-solid fa-moon"
          class="text-sky-500"
        />
        <font-awesome-icon
          v-else
          icon="fa-solid fa-sun"
          class="text-yellow-500"
        />
      </span>
    </Switch>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { Switch } from "@headlessui/vue";
import { useStore } from "vuex";

// Initialize Store
const store = useStore();

// Data
const enabled = ref(false);

// Watchers
watch(enabled, (newValue) => {
  store.commit("setDarkMode", newValue);
});
</script>
