<template>
  <div
    id="contact"
    class="w-screen h-screen flex flex-col items-center justify-center space-y-10"
    :class="dark ? 'bg-[#181A1B] text-white' : 'bg-white text-black'"
  >
    <h1
      class="text-3xl md:text-6xl border-b"
      :class="dark ? 'border-white' : 'border-black'"
      v-motion-pop-visible
      :delay="600"
    >
      Get in Touch
    </h1>
    <p
      class="text-gray-400 w-[75%] lg:w-[35%] text-center"
      v-motion-pop-visible
      :delay="600"
    >
      I'm currently looking for any new opportunities, my inbox is always open.
      Whether you have a question or just want to say hi, I'll try my best to
      get back to you!
    </p>
    <form
      v-motion-slide-visible-top
      :delay="600"
      @submit.prevent="sendEmail"
      class="flex flex-col items-center justify-center w-[75%] lg:w-[35%]"
    >
      <div class="w-full flex flex-col space-y-3">
        <label for="name" class="w-full text-left">Name:</label>
        <input
          type="text"
          id="name"
          name="user_name"
          v-model="name"
          placeholder="Your Name Here"
          autocomplete="username"
          class="text-black w-full px-5 py-3 rounded-lg shadow-lg focus:border-0 focus:-outline-0 focus:ring-0 focus-visible:border-0 focus-visible:outline-0 focus-visible:ring-0"
          :class="dark ? 'bg-white' : 'bg-gray-200'"
        />
      </div>
      <div class="my-5 w-full flex flex-col space-y-3">
        <label for="email" class="w-full text-left">Email:</label>
        <input
          type="email"
          id="email"
          name="user_email"
          placeholder="Your Email Here"
          autocomplete="email"
          v-model="email"
          class="text-black w-full px-5 py-3 rounded-lg shadow-lg focus:border-0 focus:-outline-0 focus:ring-0 focus-visible:border-0 focus-visible:outline-0 focus-visible:ring-0"
          :class="dark ? 'bg-white' : 'bg-gray-200'"
        />
      </div>
      <div class="w-full flex flex-col space-y-3">
        <label for="message" class="w-full text-left">Message:</label>
        <textarea
          name="message"
          id="message"
          cols="46"
          rows="3"
          v-model="message"
          class="text-black w-full px-5 py-3 rounded-lg shadow-lg focus:border-0 focus:-outline-0 focus:ring-0 focus-visible:border-0 focus-visible:outline-0 focus-visible:ring-0"
          :class="dark ? 'bg-white' : 'bg-gray-200'"
        />
      </div>
      <button
        type="submit"
        class="shadow-lg mt-5 rounded-lg"
        :class="dark ? 'bg-white text-black' : 'bg-black text-white'"
      >
        <div
          class="w-full px-5 py-3 font-medium flex flex-row items-center justify-center space-x-5"
          v-if="!loading"
        >
          <span>Submit</span>
          <font-awesome-icon icon="fa-solid fa-plane" />
        </div>
        <div
          v-else
          class="w-full px-5 py-3 font-medium flex flex-row items-center justify-center space-x-5"
        >
          <font-awesome-icon icon="fa-solid fa-spinner" class="animate-spin" />
        </div>
      </button>
    </form>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import emailjs from "@emailjs/browser";
import { ref, watch, onMounted } from "vue";
import { useToast } from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";

// Initialize Store
const store = useStore();
const toast = useToast();

// Data
const name = ref(null);
const email = ref(null);
const dark = ref(false);
const message = ref(null);
const loading = ref(false);

// Methods
const sendEmail = () => {
  loading.value = true;

  const templateParams = {
    user_name: name.value,
    message: message.value,
    user_email: email.value,
  };

  emailjs
    .send(
      process.env.VUE_APP_SERVICE_ID,
      process.env.VUE_APP_TEMPLATE_ID,
      templateParams,
      process.env.VUE_APP_PUBLIC_KEY
    )
    .then(
      () => {
        toast.success("Sent! I'll Reach back to you ASAP!");
        loading.value = false;
      },
      () => {
        toast.error("Please Try Again!");
        loading.value = false;
      }
    );

  toast.clear();
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
