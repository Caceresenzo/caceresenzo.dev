<script lang="ts" setup>
import { projects } from "~/data/projects";
</script>

<template>
  <v-row justify="center" align="center" class="mt-4">
    <v-col cols="12" sm="10" md="8">
      <v-card title="Portfolio">
        <v-list>
          <project-list-item
            v-for="(project, index) in projects"
            :key="index"
            :project="project"
          />
        </v-list>
      </v-card>
    </v-col>
  </v-row>
</template>
