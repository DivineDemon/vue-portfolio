<template>
  <div
    id="contact"
    class="w-screen h-screen flex flex-col items-center justify-center space-y-10"
    :class="dark ? 'bg-[#181A1B] text-white' : 'bg-white text-black'"
  >
    <h1
      class="text-6xl border-b"
      :class="dark ? 'border-white' : 'border-black'"
    >
      Get in Touch
    </h1>
    <p class="text-gray-400 w-[35%] text-center">
      Although I'm not currently looking for any new opportunities, my inbox is
      always open. Whether you have a question or just want to say hi, I'll try
      my best to get back to you!
    </p>
    <form
      ref="form"
      v-motion-slide-top
      @submit.prevent="sendEmail"
      class="flex flex-col items-center justify-center w-[35%]"
    >
      <div class="w-full flex flex-col space-y-3">
        <label for="name" class="w-full text-left">Name:</label>
        <input
          type="text"
          name="user_name"
          placeholder="Your Name Here"
          class="text-black w-full px-5 py-3 rounded-lg shadow-lg focus:border-0 focus:-outline-0 focus:ring-0 focus-visible:border-0 focus-visible:outline-0 focus-visible:ring-0"
          :class="dark ? 'bg-white' : 'bg-gray-200'"
        />
      </div>
      <div class="my-5 w-full flex flex-col space-y-3">
        <label for="email" class="w-full text-left">Email:</label>
        <input
          type="email"
          name="user_email"
          placeholder="Your Email Here"
          class="text-black w-full px-5 py-3 rounded-lg shadow-lg focus:border-0 focus:-outline-0 focus:ring-0 focus-visible:border-0 focus-visible:outline-0 focus-visible:ring-0"
          :class="dark ? 'bg-white' : 'bg-gray-200'"
        />
      </div>
      <div class="w-full flex flex-col space-y-3">
        <label for="message" class="w-full text-left">Message:</label>
        <textarea
          name="message"
          cols="46"
          rows="3"
          class="text-black w-full px-5 py-3 rounded-lg shadow-lg focus:border-0 focus:-outline-0 focus:ring-0 focus-visible:border-0 focus-visible:outline-0 focus-visible:ring-0"
          :class="dark ? 'bg-white' : 'bg-gray-200'"
        />
      </div>
      <button
        type="submit"
        class="shadow-lg mt-5 rounded-lg px-5 py-3 font-medium flex flex-row items-center justify-center space-x-5"
        :class="dark ? 'bg-white text-black' : 'bg-black text-white'"
      >
        <span>Submit</span>
        <font-awesome-icon icon="fa-solid fa-plane" />
      </button>
    </form>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import emailjs from "@emailjs/browser";
import { ref, watch, onMounted } from "vue";

// Initialize Store
const store = useStore();

// Data
const dark = ref(false);
const form = ref(null);

// Methods
const sendEmail = () => {
  emailjs
    .sendForm(
      process.env.VUE_APP_SERVICE_ID,
      process.env.VUE_APP_TEMPLATE_ID,
      form.value,
      process.env.VUE_APP_PUBLIC_KEY
    )
    .then(
      (result) => {
        console.log("Success", result.text);
      },
      (err) => {
        console.log("Failure", err.text);
      }
    );
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
