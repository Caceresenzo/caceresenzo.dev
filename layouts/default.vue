<script lang="ts" setup>
const footerLinks = [
  {
    description: "Send me an email",
    icon: "mdi-email",
    url: "mailto:caceresenzo1502@gmail.com",
  },
  {
    description: "See my projects",
    icon: "mdi-github",
    url: "https://github.com/Caceresenzo",
  },
  {
    description: "Linked-in",
    icon: "mdi-linkedin",
    url: "https://www.linkedin.com/in/enzo-caceres/",
  },
];
</script>

<template>
  <v-app-bar>
    <v-app-bar-title>
      <v-btn outlined text class="ml-2 pr-0" to="/">
        caceresenzo
        <v-chip
          label
          color="primary"
          class="ml-2"
          style="border-radius: 3px !important; height: 34px"
          variant="flat"
        >
          dev
        </v-chip>
      </v-btn>
    </v-app-bar-title>
  </v-app-bar>
  <v-main>
    <slot />
  </v-main>
  <v-footer class="justify-center mt-8" style="gap: 8px">
    <footer-link
      v-for="(link, index) in footerLinks"
      :key="index"
      v-bind="link"
    />
  </v-footer>
</template>
