

<script lang="ts" setup>
import headImage from "~/assets/head.jpg";

const tab = ref("languages");

const projects = [
  {
    name: "datacrunch",
    description: "The startup I currently part of",
    link: "https://github.com/datacrunch-com",
    languages: [
      "java",
      "spring",
      "python",
      "docker",
      "vue.js",
      "mysql",
      "bash",
      "nginx",
      "git",
    ],
  },
  {
    name: "42",
    description: "All of my work from the 42 school",
    link: "https://github.com/Caceresenzo/42",
    languages: ["c", "c++", "python", "docker", "bash", "git"],
  },
  {
    name: "42 Piscine",
    description: "All of my work from the piscine of 42 school",
    link: "https://github.com/Caceresenzo/42",
    languages: ["c", "bash", "git"],
  },
  {
    name: "caceresenzo.dev (this)",
    description: "Source code of this website",
    link: "https://github.com/Caceresenzo/caceresenzo.dev",
    languages: ["docker", "vue.js", "nginx", "git"],
  },
  {
    name: "My IUT Schedule",
    description:
      "A simple calendar-like app for checking next lessons from the IUT I left for 42",
    link: "https://github.com/Caceresenzo/My-IUT-Schedule",
    languages: ["android", "git"],
  },
  {
    name: "BoxPlay",
    description: "A Netflix clone, but even better ;)",
    link: "https://github.com/Caceresenzo/boxplay-android",
    languages: ["android", "git"],
  },
  {
    name: "Mon Guide Musculation",
    description: "My first Flutter app",
    link: "https://github.com/Caceresenzo/MonGuideMusculation",
    languages: ["flutter", "git"],
  },
  {
    name: "Negro SA",
    description: "Work done for Negro SA",
    link: "https://github.com/Caceresenzo/negrosa",
    languages: ["java", "spring", "vue.js", "flutter", "docker", "git"],
  },
  {
    name: "JELDWEN",
    description: "Work done for JELDWEN",
    link: "https://github.com/Caceresenzo/jeldwen",
    languages: ["java", "spring", "vue.js", "docker", "git"],
  },
];

const languages = [
  {
    name: "Java",
    description: "My favorite language, and pretty good at it",
    icon: "java/java-original.svg",
  },
  {
    name: "Spring",
    description: "My go to for doing APIs",
    icon: "spring/spring-original.svg",
  },
  {
    name: "Python",
    description:
      "I hate it, but if I need to do something quick... no choice then...",
    icon: "python/python-original.svg",
  },
  {
    name: "C",
    description: "Where are objects?",
    icon: "c/c-original.svg",
  },
  {
    name: "C++",
    description: "Structs in disguise",
    icon: "cplusplus/cplusplus-original.svg",
  },
  {
    name: "Docker",
    description: "I can't live without them now...",
    icon: "docker/docker-original.svg",
  },
  {
    name: "Vue.js",
    description: "I was having the choice with React",
    icon: "vuejs/vuejs-original.svg",
  },
  {
    name: "MySQL",
    description: "For all my projects",
    icon: "mysql/mysql-original.svg",
  },
  {
    name: "Git",
    description: "Saved me more than once...",
    icon: "git/git-original.svg",
  },
  {
    name: "Android",
    description: "Hard to make a simple thing, but cool once it work",
    icon: "android/android-original.svg",
  },
  {
    name: "Bash",
    description: "Humm oh-my-zsh",
    icon: "bash/bash-original.svg",
  },
  {
    name: "Flutter",
    description: "Only visually usable",
    icon: "flutter/flutter-original.svg",
  },
  {
    name: "NGiNX",
    description: "This website is itself a reverse proxy",
    icon: "nginx/nginx-original.svg",
  },
];

function getProject(language: (typeof languages)[0]) {
  const lower = language.name.toLowerCase();

  return projects.filter((x) => x.languages.includes(lower));
}
</script>

<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="10" md="8">
      <v-card class="mt-8">
        <div class="d-flex justify-center">
          <v-avatar class="mt-2" color="primary" size="128">
            <v-img max-height="150" max-width="250" :src="headImage" />
          </v-avatar>
        </div>
        <v-card-title class="headline d-flex justify-center mt-4">
          Enzo CACERES
        </v-card-title>
        <v-card-subtitle class="text-center">
          Full Stack Developer <br />
          (if you don't consider the look)
        </v-card-subtitle>
        <v-divider class="mt-4" />
        <client-only>
          <v-tabs v-model="tab" fixed-tabs>
            <v-tab value="languages">Languages</v-tab>
            <v-tab value="projects">Projects</v-tab>
          </v-tabs>
        </client-only>
        <v-window v-model="tab">
          <v-window-item value="languages">
            <v-expansion-panels>
              <language-expansion-panel
                v-for="(language, index) in languages"
                :key="index"
                :language="language"
                :projects="getProject(language)"
              />
            </v-expansion-panels>
          </v-window-item>
          <v-window-item value="projects">
            <v-list>
              <project-list-item
                v-for="(project, index) in projects"
                :key="index"
                :project="project"
              />
            </v-list>
          </v-window-item>
        </v-window>
      </v-card>
    </v-col>
  </v-row>
</template>
