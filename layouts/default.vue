<template>
  <v-app dark>
    <v-app-bar fixed app>
      <v-container class="py-0 fill-height">
        <v-btn outlined text class="ml-2 pr-0" nuxt to="/">
          caceresenzo
          <v-chip
            label
            color="primary"
            class="ml-2"
            style="border-radius: 3px !important; height: 34px"
          >
            dev
          </v-chip>
        </v-btn>

        <v-btn text class="ml-2" nuxt to="/blog"> blog </v-btn>
        <v-btn text class="ml-2" nuxt to="/resume"> resume </v-btn>
      </v-container>
    </v-app-bar>
    <v-main class="mb-10">
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer app>
      <v-spacer />
      <footer-link
        v-for="(link, index) in footerLinks"
        :key="index"
        v-bind="link"
      />
      <v-spacer />
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    footerLinks: [
      {
        description: 'Send me an email',
        icon: 'mail',
        url: 'mailto:caceresenzo1502@gmail.com',
      },
      {
        description: 'See my projects',
        icon: 'github',
        url: 'https://github.com/Caceresenzo',
      },
      {
        description: 'Linked-in',
        icon: 'linkedin',
        url: 'https://www.linkedin.com/in/enzo-caceres/',
      },
    ],
  }),
}
</script>
