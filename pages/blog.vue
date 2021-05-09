<template>
  <v-row>
    <v-col class="text-center"> maybe one day </v-col>
  </v-row>
</template>

<script>
export default {
  head() {
    return {
      title: 'Blog',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Some posts I write for anyone to read',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'Blog, FreeLance, FullStack',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: 'An empty blog, for now...',
        },
      ],
    }
  },
}
</script>
