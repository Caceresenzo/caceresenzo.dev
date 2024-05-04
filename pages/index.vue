<script lang="ts" setup>
import headImage from "~/assets/head.jpg";

useSeoMeta({
  title: "caceresenzo.dev",
  ogTitle: "Enzo CACERES's website",
  description: "Another boring developer portfolio website.",
  ogDescription: "Another boring developer portfolio website.",
  ogImage: headImage,
});
</script>

<template>
  <v-row justify="center" align="center" class="mt-4">
    <v-col cols="12" sm="10" md="8">
      <v-card class="py-4">
        <div class="d-flex justify-center">
          <v-avatar class="mt-2" color="primary" size="128">
            <img height="128" width="128" :src="headImage" />
          </v-avatar>
        </div>
        <v-card-title class="headline d-flex justify-center mt-4">
          Enzo CACERES
        </v-card-title>
        <v-card-subtitle class="text-center">
          Full Stack Developer <br />
          (if you don't consider the look)
        </v-card-subtitle>
      </v-card>
    </v-col>
    <v-col cols="12" sm="10" md="8">
      <v-card title="About me">
        <v-card-text>
          I enjoy programming and challenging myself to replicate what others
          have done. <br />
          <br />
          Being socially unfit is not an issue for me, as I prefer focusing on
          intense programming tasks rather than meeting new people in a bar.
          <br />
          <br />
          But if you need help with programming or have any questions about my
          work, don't hesitate to send me an email!
          <br />
          <br />
          I am so passionate, in fact, that I don't care where you came from or
          what you look like; as long as your code is beautiful, you will have
          my respect.
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
