<template>
  <v-avatar size="80">
    <v-img
      max-height="64"
      max-width="64"
      :src="`https://raw.githubusercontent.com/devicons/devicon/master/icons/${language.icon}`"
    ></v-img>
  </v-avatar>
</template>

<script>
export default {
  props: {
    language: {
      type: Object,
      required: true,
    },
  },
}
</script>
