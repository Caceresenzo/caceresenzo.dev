<script lang="ts" setup>
const props = defineProps<{
  language: {
    icon: string;
  };
  projects: Array<object>;
}>();
</script>

<template>
  <v-expansion-panel>
    <v-expansion-panel-title>
      <v-avatar size="80">
        <img
          max-height="64"
          max-width="64"
          :src="`https://raw.githubusercontent.com/devicons/devicon/master/icons/${props.language.icon}`"
        />
      </v-avatar>
      <v-col class="py-0">
        <v-card-title>
          {{ props.language.name }}
        </v-card-title>
        <v-card-subtitle>
          {{ props.language.description }}
        </v-card-subtitle>
      </v-col>
    </v-expansion-panel-title>
    <v-expansion-panel-text>
      <v-list v-if="props.projects" dense>
        <v-list-subheader>Projects</v-list-subheader>
        <v-list-item
          v-for="(project, index2) in props.projects"
          :key="index2"
          target="_blank"
          :href="project.link"
          :title="project.name"
        />
      </v-list>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>
