export interface Skill {
    name: string,
    description: string,
    icon: string
}

export const skills: Array<Skill> = [
    {
        name: "Java",
        description: "My favorite language, and pretty good at it",
        icon: "java/java-original.svg",
    },
    {
        name: "Spring",
        description: "My go to for doing APIs",
        icon: "spring/spring-original.svg",
    },
    {
        name: "Python",
        description: "I hate it, but if I need to do something quick... no choice then...",
        icon: "python/python-original.svg",
    },
    {
        name: "AWS",
        description: "I try to avoid vendor lock-in",
        icon: "amazonwebservices/amazonwebservices-plain-wordmark.svg"
    },
    {
        name: "Terraform",
        description: "Tricky to setup, but infinite peace afterward",
        icon: "terraform/terraform-original.svg"
    },
    {
        name: "C",
        description: "Where are objects?",
        icon: "c/c-original.svg",
    },
    {
        name: "C++",
        description: "Structs in disguise",
        icon: "cplusplus/cplusplus-original.svg",
    },
    {
        name: "Docker",
        description: "I can't live without them now...",
        icon: "docker/docker-original.svg",
    },
    {
        name: "Vue.js",
        description: "I was having the choice with React",
        icon: "vuejs/vuejs-original.svg",
    },
    {
        name: "MySQL",
        description: "For all my projects",
        icon: "mysql/mysql-original.svg",
    },
    {
        name: "MongoDB",
        description: "For all my projects that I can't model with MySQL",
        icon: "mongodb/mongodb-original.svg",
    },
    {
        name: "Git",
        description: "Saved me more than once...",
        icon: "git/git-original.svg",
    },
    {
        name: "Android",
        description: "Hard to make a simple thing, but cool once it work",
        icon: "android/android-original.svg",
    },
    {
        name: "Bash",
        description: "Humm oh-my-zsh",
        icon: "bash/bash-original.svg",
    },
    {
        name: "Flutter",
        description: "Only visually usable",
        icon: "flutter/flutter-original.svg",
    },
    {
        name: "NGiNX",
        description: "This website is itself a reverse proxy",
        icon: "nginx/nginx-original.svg",
    },
];
