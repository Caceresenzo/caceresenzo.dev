<script lang="ts" setup>
import copy from "copy-to-clipboard";
import type { Tool } from "~/data/tools";
import { tools } from "~/data/tools";

useSeoMeta({
  title: "Tools",
  ogTitle: "Enzo CACERES's Tools",
  description: "List of I use everyday.",
  ogDescription: "The list of all my tools!",
});

const selectedWingetPackages = ref(Array<string>());
const installLine = computed(() =>
  selectedWingetPackages.value
    .map((package_) => `winget install --id=${package_} -e`)
    .join("\n")
);
</script>

<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12">
        <v-card title="Tools">
          <v-list>
            <v-list-item
              v-for="tool in tools"
              :key="tool.name"
              :title="tool.name"
              :subtitle="tool.description"
              :href="tool.downloadLink"
              target="_blank"
            >
              <template #prepend>
                <v-avatar size="80">
                  <img
                    v-if="tool.wingetPackage"
                    height="56"
                    width="56"
                    :src="`https://api.winstall.app/icons/next/${tool.wingetPackage}.webp`"
                  />
                </v-avatar>
              </template>
              <template v-if="tool.wingetPackage" #append>
                <v-checkbox
                  v-model="selectedWingetPackages"
                  :value="tool.wingetPackage"
                  multiple
                  style="transform: scale(1.5)"
                  hide-details
                />
              </template>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <v-dialog max-width="600">
    <template #activator="{ props: activatorProps }">
      <v-fab
        v-if="selectedWingetPackages.length"
        color="primary"
        icon="mdi-download"
        size="64"
        appear
        style="position: fixed; right: 80px; bottom: 80px; z-index: 1000"
        v-bind="activatorProps"
      />
    </template>
    <template #default="{ isActive }">
      <v-card title="Install command">
        <v-card-text>
          <v-code>
            <pre>{{ installLine }}</pre>
          </v-code>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text="Copy" @click="copy(installLine)" />
          <v-btn text="Close" @click="isActive.value = false" />
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>
