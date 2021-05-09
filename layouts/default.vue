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
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>
