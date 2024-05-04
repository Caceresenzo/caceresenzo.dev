<script lang="ts" setup>
import type { Project } from "~/data/projects";

const props = defineProps<{
  project: Project;
}>();
</script>

<template>
  <v-list-item lines="two" target="_blank" :href="props.project.link">
    <v-list-item-title class="d-flex flex-row align-center">
      {{ props.project.name }}
      <v-chip
        size="small"
        class="text-uppercase ml-2"
        :color="props.project.quality.color"
        style="height: 16px"
      >
        <v-icon start size="small">mdi-xml</v-icon>
        {{ props.project.quality.value }}
      </v-chip>
      <v-chip
        v-if="props.project.internal"
        size="small"
        class="ml-2"
        color="error"
        style="height: 16px"
      >
        INTERNAL
      </v-chip>
      <v-chip
        v-if="props.project.deprecated"
        size="small"
        class="ml-2"
        color="error"
        style="height: 16px"
      >
        DEPRECATED
      </v-chip>
    </v-list-item-title>
    <v-list-item-subtitle>
      {{ props.project.description }}
    </v-list-item-subtitle>
    <v-list-item-subtitle>
      <v-chip
        v-for="language in props.project.languages"
        :key="language"
        size="x-small"
        class="mr-2 mt-1"
      >
        {{ language }}
      </v-chip>
    </v-list-item-subtitle>
    <template v-if="props.project.logo" #append>
      <v-avatar size="80">
        <img height="56" width="56" :src="props.project.logo" />
      </v-avatar>
    </template>
  </v-list-item>
</template>
