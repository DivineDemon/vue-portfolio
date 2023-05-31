<template>
  <Menu as="div" class="relative inline-block text-left">
    <div>
      <MenuButton
        class="inline-flex w-full justify-center rounded-lg px-4 py-2 text-sm font-medium focus:border-0 focus:outline-0 focus:ring-0 focus-visible:border-0 focus-visible:outline-0 focus-visible:ring-0"
        :class="dark ? 'bg-white text-[#181A1B]' : 'bg-[#181A1B] text-white'"
      >
        <font-awesome-icon icon="fa-solid fa-bars" />
      </MenuButton>
    </div>

    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems
        class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        :class="dark ? 'bg-white text-[#181A1B]' : 'bg-[#181A1B] text-white'"
      >
        <div class="px-1 py-1">
          <MenuItem v-for="item in items" :key="item">
            <button
              class="group flex w-full items-center rounded-md px-2 py-2 text-sm"
              :class="
                dark ? 'bg-white text-[#181A1B]' : 'bg-[#181A1B] text-white'
              "
            >
              {{ item }}
            </button>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { ref, watch, onMounted } from "vue";
import { useStore } from "vuex";

// Props
defineProps({
  items: Array,
});

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
