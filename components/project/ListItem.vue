<script lang="ts" setup>
const props = defineProps<{
  project: {
    link: string;
    name: string;
    description: string;
    languages: Array<string>;
  };
}>();
</script>

<template>
  <v-list-item
    lines='two'
    target="_blank"
    :href="props.project.link"
    prepend-icon="mdi-file-code"
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
  </v-list-item>
</template>
