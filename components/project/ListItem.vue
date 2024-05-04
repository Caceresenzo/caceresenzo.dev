<script lang="ts" setup>
import type { Project } from "~/data/projects";

const props = defineProps<{
  project: Project;
}>();
</script>

<template>
  <v-list-item
    lines="two"
    target="_blank"
    :href="props.project.link"
    :title="props.project.name"
    :subtitle="props.project.description"
  >
    <v-list-item-subtitle class="my-1">
      <v-chip
        v-for="language in props.project.languages"
        :key="language"
        size="x-small"
        class="mr-2"
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
