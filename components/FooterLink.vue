<template>
  <v-tooltip top>
    <template #activator="{ on, attrs }">
      <v-btn
        color="primary"
        dark
        icon
        link
        target="_blank"
        :href="url"
        v-bind="attrs"
        v-on="on"
      >
        <v-icon> mdi-{{ icon }} </v-icon>
      </v-btn>
    </template>
    <span>{{ description }}</span>
  </v-tooltip>
</template>

<script>
export default {
  props: {
    description: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
}
</script>
