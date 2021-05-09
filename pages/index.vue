<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="10" md="8">
      <v-card class="mt-8">
        <v-row justify="center" align="center">
          <v-avatar class="mt-2" color="primary" size="128">
            <v-img
              lazy-src="https://cdn.intra.42.fr/users/small_ecaceres.jpg"
              max-height="150"
              max-width="250"
              src="https://cdn.intra.42.fr/users/large_ecaceres.jpg"
            />
          </v-avatar>
        </v-row>
        <v-card-title class="headline">
          <v-spacer />
          Enzo CACERES
          <v-spacer />
        </v-card-title>
        <v-card-subtitle class="text-center">
          Full Stack Developer <br />
          (if you don't consider the look)
        </v-card-subtitle>
        <v-divider />
        <v-expansion-panels>
          <v-expansion-panel
            v-for="(language, index) in languages"
            :key="index"
          >
            <v-expansion-panel-header>
              <v-avatar size="80">
                <v-img
                  max-height="64"
                  max-width="64"
                  :src="`https://raw.githubusercontent.com/devicons/devicon/master/icons/${language.icon}`"
                ></v-img>
              </v-avatar>
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
              <v-list v-if="language.projects" dense>
                <v-subheader>Projects</v-subheader>
                <v-list-item-group color="primary">
                  <v-list-item
                    v-for="(project, index2) in language.projects"
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
        </v-expansion-panels>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
function datacrunch() {
  return {
    name: 'datacrunch',
    link: 'https://github.com/datacrunch-com',
  }
}

export default {
  data: () => ({
    languages: [
      {
        name: 'Java',
        description: 'My favorite language, and pretty good at it',
        icon: 'java/java-original.svg',
        projects: [datacrunch()],
      },
      {
        name: 'Spring',
        description: 'My go to for doing APIs',
        icon: 'spring/spring-original.svg',
        projects: [datacrunch()],
      },
      {
        name: 'Python',
        description:
          'I hate it, but if I need to do something quick... no choice then...',
        icon: 'python/python-original.svg',
        projects: [datacrunch()],
      },
      {
        name: 'C',
        description: 'Where are objects?',
        icon: 'c/c-original.svg',
        projects: [
          {
            name: '42',
            link: 'https://github.com/Caceresenzo/42',
          },
          {
            name: 'My School 42 Piscine Experience',
            link:
              'https://github.com/Caceresenzo/My-School-42-Piscine-Experience',
          },
        ],
      },
      {
        name: 'C++',
        description: 'Structs in disguise',
        icon: 'cplusplus/cplusplus-original.svg',
        projects: [
          {
            name: '42',
            link: 'https://github.com/Caceresenzo/42',
          },
        ],
      },
      {
        name: 'Docker',
        description: "I can't leave without them now...",
        icon: 'docker/docker-original.svg',
        projects: [
          datacrunch(),
          {
            name: '42',
            link: 'https://github.com/Caceresenzo/42',
          },
        ],
      },
      {
        name: 'Vue.js',
        description: 'I was having the choice with React',
        icon: 'vuejs/vuejs-original.svg',
        projects: [
          datacrunch(),
          {
            name: 'caceresenzo.dev (this)',
            link: 'https://github.com/Caceresenzo/caceresenzo.dev',
          },
        ],
      },
      {
        name: 'MySQL',
        description: 'For all my projects',
        icon: 'mysql/mysql-original.svg',
        projects: [datacrunch()],
      },
      {
        name: 'Git',
        description: 'Saved me more than once...',
        icon: 'git/git-original.svg',
        projects: [
          {
            name: '<all of them>',
            link: 'https://github.com/Caceresenzo/',
          },
        ],
      },
      {
        name: 'Android',
        description: 'Hard to make a simple thing, but cool once it work',
        icon: 'android/android-original.svg',
        projects: [
          {
            name: 'My IUT Schedule',
            link: 'https://github.com/Caceresenzo/My-IUT-Schedule',
          },
          {
            name: 'BoxPlay',
            link: 'https://github.com/Caceresenzo/boxplay-android',
          },
        ],
      },
      {
        name: 'Bash',
        description: 'Humm oh-my-zsh',
        icon: 'bash/bash-original.svg',
      },
      {
        name: 'Flutter',
        description: 'Only visually usable',
        icon: 'flutter/flutter-original.svg',
        projects: [
          {
            name: 'Mon Guide Musculation',
            link: 'https://github.com/Caceresenzo/MonGuideMusculation',
          },
        ],
      },
      {
        name: 'NGiNX',
        description: 'This website is itself a reverse proxy',
        icon: 'nginx/nginx-original.svg',
        projects: [
          datacrunch(),
          {
            name: 'caceresenzo.dev (this)',
            link: 'https://github.com/Caceresenzo/caceresenzo.dev',
          },
        ],
      },
    ],
  }),
}
</script>
