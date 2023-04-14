<template>
  <nav
    class="fixed top-0 w-screen px-10 py-5 flex flex-row items-center justify-between space-x-10 backdrop-blur-sm bg-white/30"
  >
    <!-- Logo -->
    <img src="@/assets/img/logo.png" alt="logo" class="w-10 h-10" />
    <div class="hidden flex-1 w-full lg:flex items-center justify-between">
      <!-- Nav Items -->
      <ul class="flex flex-row items-center justify-center space-x-10">
        <li class="hover:border-b-2 hover:border-black">Services</li>
        <li class="hover:border-b-2 hover:border-black">Experience</li>
        <li class="hover:border-b-2 hover:border-black">Projects</li>
        <li class="hover:border-b-2 hover:border-black">Contact</li>
      </ul>
      <!-- Nav Controls -->
      <div class="flex flex-row items-center justify-center space-x-10">
        <!-- Dark Mode Toggle -->
        <DarkMode />
        <!-- Download Resume -->
        <button class="rounded-lg px-3 py-1 hover:border-2 hover:border-black">
          Download Resume
        </button>
      </div>
    </div>

    <!-- Responsive Navbar -->
    <DropDown class="flex lg:hidden" :items="dropDown" />
  </nav>
</template>

<script>
import DropDown from "@/utils/DropDown.vue";
import DarkMode from "@/utils/DarkMode.vue";

export default {
  name: "NavBar",
  components: {
    DropDown,
    DarkMode,
  },
  data() {
    return {
      dropDown: [
        "Services",
        "Experience",
        "Projects",
        "Contact",
        "Download Resume",
      ],
    };
  },
};
</script>
