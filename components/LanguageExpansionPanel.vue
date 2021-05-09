<template>
  <v-expansion-panel>
    <v-expansion-panel-header>
      <icon-language :language="language" />
      <v-col class="py-0">
        <v-card-title>
          {{ language.name }}
        </v-card-title>
        <v-card-subtitle>
          {{ language.description }}
        </v-card-subtitle>
      </v-col>
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      <v-list v-if="projects" dense>
        <v-subheader>Projects</v-subheader>
        <v-list-item-group color="primary">
          <v-list-item
            v-for="(project, index2) in projects"
            :key="index2"
            link
            target="_blank"
            :href="project.link"
          >
            <v-list-item-content>
              <v-list-item-title>{{ project.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
export default {
  props: {
    language: {
      type: Object,
      required: true,
    },
    projects: {
      type: [Array, null],
      default: () => [],
    },
  },
}
</script>
