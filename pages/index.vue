

<script lang="ts" setup>
import headImage from "~/assets/head.jpg";

import type { Language } from "~/data/languages";
import { languages } from "~/data/languages";

import type { Project } from "~/data/projects";
import { projects } from "~/data/projects";

const tab = ref("languages");

function getProject(language: Language) {
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
