<template>
  <v-btn color="primary" target="_blank" :href="props.url" icon>
    <img height="24" width="24" :src="props.icon" />
    <v-tooltip activator="parent" location="top">
      {{ props.description }}
    </v-tooltip>
  </v-btn>
</template>

<script lang="ts" setup>
const props = defineProps<{
  description: string;
  icon: string;
  url: string;
}>();
</script>
