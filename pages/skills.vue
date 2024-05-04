<script lang="ts" setup>
import type { Skill } from "~/data/skills";
import { skills } from "~/data/skills";
import { projects } from "~/data/projects";

useSeoMeta({
  title: "Skills",
  ogTitle: "Enzo CACERES's Skills",
  description: "List of my skills.",
  ogDescription: "The list of all my skills!",
});

function getProject(skill: Skill) {
  const lower = skill.name.toLowerCase();

  return projects.filter((x) => x.skills.includes(lower));
}
</script>

<template>
  <v-row justify="center" align="center" class="mt-4">
    <v-col cols="12" sm="10" md="8">
      <v-card title="Skills">
        <v-expansion-panels>
          <skill-expansion-panel
            v-for="(skill, index) in skills"
            :key="index"
            :skill="skill"
            :projects="getProject(skill)"
          />
        </v-expansion-panels>
      </v-card>
    </v-col>
  </v-row>
</template>
