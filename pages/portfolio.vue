<script lang="ts" setup>
import { projects } from "~/data/projects";
</script>

<template>
  <v-row justify="center" align="center" class="mt-4">
    <v-col cols="12" sm="10" md="8">
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
</template>
