<script lang="ts" setup>
import githubIcon from "~/assets/icons/github.svg"
import gmailIcon from "~/assets/icons/gmail.svg"
import linkedinIcon from "~/assets/icons/linkedin.svg"
import myanimelistIcon from "~/assets/icons/myanimelist.svg"

const footerLinks = [
  {
    description: "Send me an email",
    icon: gmailIcon,
    url: "mailto:caceresenzo1502@gmail.com",
  },
  {
    description: "See my projects",
    icon: githubIcon,
    url: "https://github.com/Caceresenzo",
  },
  {
    description: "Linked-in",
    icon: linkedinIcon,
    url: "https://www.linkedin.com/in/enzo-caceres/",
  },
  {
    description: "Send help",
    icon: myanimelistIcon,
    url: "https://myanimelist.net/profile/Caceresenzo",
  },
];
</script>

<template>
  <v-app-bar>
    <v-app-bar-title>
      <v-btn
        outlined
        text
        class="ml-2 pr-0"
        to="/"
        color="primary"
        style="border: 2px solid rgb(var(--v-theme-primary))"
      >
        caceresenzo
        <v-chip
          label
          color="primary"
          class="ml-2"
          style="
            height: 34px;
            border-radius: 1px;
            border-top-left-radius: 0px;
            border-bottom-left-radius: 0px;
          "
          variant="flat"
        >
          dev
        </v-chip>
      </v-btn>
      <v-btn class="ml-2" to="/portfolio"> portfolio </v-btn>
      <v-btn class="ml-2" to="/skills"> skills </v-btn>
      <v-btn class="ml-2" to="/tools"> tools </v-btn>
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
