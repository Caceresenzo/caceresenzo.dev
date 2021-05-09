<template>
  <v-list-item two-line link target="_blank" :href="project.link">
    <v-list-item-avatar>
      <v-icon>mdi-file-code</v-icon>
    </v-list-item-avatar>
    <v-list-item-content>
      <v-list-item-title>
        {{ project.name }}
      </v-list-item-title>
      <v-list-item-subtitle>
        {{ project.description }}
      </v-list-item-subtitle>
      <v-list-item-subtitle class="mt-1">
        <v-chip
          v-for="language in project.languages"
          :key="language"
          x-small
          class="mr-2"
        >
          {{ language }}
        </v-chip>
      </v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
}
</script>
