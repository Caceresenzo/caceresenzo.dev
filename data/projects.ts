export interface Project {
    name: string,
    description: string,
    link: string,
    languages: Array<string>
}

export const projects: Array<Project> = [
    {
        name: "CrunchDAO",
        description: "The startup I currently part of",
        link: "https://github.com/crunchdao",
        languages: [
            "java",
            "spring",
            "python",
            "docker",
            "vue.js",
            "mysql",
            "bash",
            "nginx",
            "git",
        ],
    },
    {
        name: "42",
        description: "All of my work from the 42 school",
        link: "https://github.com/Caceresenzo/42",
        languages: ["c", "c++", "python", "docker", "bash", "git"],
    },
    {
        name: "42 Piscine",
        description: "All of my work from the piscine of 42 school",
        link: "https://github.com/Caceresenzo/42",
        languages: ["c", "bash", "git"],
    },
    {
        name: "caceresenzo.dev (this)",
        description: "Source code of this website",
        link: "https://github.com/Caceresenzo/caceresenzo.dev",
        languages: ["docker", "vue.js", "nginx", "git"],
    },
    {
        name: "My IUT Schedule",
        description:
            "A simple calendar-like app for checking next lessons from the IUT I left for 42",
        link: "https://github.com/Caceresenzo/My-IUT-Schedule",
        languages: ["android", "git"],
    },
    {
        name: "BoxPlay",
        description: "A Netflix clone, but even better ;)",
        link: "https://github.com/Caceresenzo/boxplay-android",
        languages: ["android", "git"],
    },
    {
        name: "Mon Guide Musculation",
        description: "My first Flutter app",
        link: "https://github.com/Caceresenzo/MonGuideMusculation",
        languages: ["flutter", "git"],
    },
    {
        name: "Negro SA",
        description: "Work done for Negro SA",
        link: "https://github.com/Caceresenzo/negrosa",
        languages: ["java", "spring", "vue.js", "flutter", "docker", "git"],
    },
    {
        name: "JELDWEN",
        description: "Work done for JELDWEN",
        link: "https://github.com/Caceresenzo/jeldwen",
        languages: ["java", "spring", "vue.js", "docker", "git"],
    },
];