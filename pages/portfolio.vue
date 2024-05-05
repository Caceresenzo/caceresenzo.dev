<script lang="ts" setup>
import { projects } from "~/data/projects";

useSeoMeta({
  title: "Portfolio",
  ogTitle: "Enzo CACERES's Portfolio",
  description: "List of the project I did so far.",
  ogDescription: "The list of all the project I ever did!",
});
</script>

<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12">
        <v-card title="Portfolio">
          <v-list>
            <template v-for="(project, index) in projects" :key="index">
              <project-list-item :project="project" />
              <template v-if="project.children">
                <project-list-item
                  v-for="(child, index2) in project.children"
                  :key="`${index}-${index2}`"
                  class="pl-16"
                  :project="child"
                />
              </template>
            </template>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
