<script lang="ts" setup>
import type { Language } from "~/data/languages";
import { languages } from "~/data/languages";

import { projects } from "~/data/projects";

function getProject(language: Language) {
  const lower = language.name.toLowerCase();

  return projects.filter((x) => x.languages.includes(lower));
}
</script>

<template>
  <v-row justify="center" align="center" class="mt-4">
    <v-col cols="12" sm="10" md="8">
      <v-card title="Languages">
        <v-expansion-panels>
          <language-expansion-panel
            v-for="(language, index) in languages"
            :key="index"
            :language="language"
            :projects="getProject(language)"
          />
        </v-expansion-panels>
      </v-card>
    </v-col>
  </v-row>
</template>
