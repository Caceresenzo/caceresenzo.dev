import crunchdaoLogo from "~/assets/logo/crunchdao.jpg"
import fortyTwoLogo from "~/assets/logo/42.png"

export interface Project {
    name: string,
    description: string,
    logo?: string,
    languages: Array<string>
    link: string,
    quality: Quality,
    children?: Array<Project>
}

export interface Quality {
    value: string;
    color: string;
}

function collection(collection: Omit<Project, "languages">): Project {
    const languages = [
        ...new Set(collection.children?.flatMap((project) => project.languages) || []),
    ].sort()

    return {
        ...collection,
        languages,
    }
}

export const projects: Array<Project> = [
    {
        name: "CrunchDAO",
        description: "The startup I currently part of",
        logo: crunchdaoLogo,
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
        quality: {
            value: "startup",
            color: "primary"
        }
    },
    collection({
        name: "42",
        description: "All of my work from the 42 school",
        logo: fortyTwoLogo,
        link: "https://github.com/Caceresenzo/42",
        quality: {
            value: "school",
            color: "primary"
        },
        children: [
            {
                name: "kfs",
                description: "Mini kernel",
                link: "https://github.com/Caceresenzo/42/tree/master/kfs-2",
                languages: [
                    "c++",
                ],
                quality: {
                    value: "good",
                    color: "success"
                }
            },
            {
                name: "ssl_md5",
                description: "Remake of MD5sum and SHA256sum",
                link: "https://github.com/Caceresenzo/42/tree/master/ft_ssl_md5",
                languages: [
                    "c",
                ],
                quality: {
                    value: "good",
                    color: "success"
                }
            },
            {
                name: "webserv",
                description: "Remake of nginx",
                link: "https://github.com/Caceresenzo/42/tree/master/webserv",
                languages: [
                    "c++",
                ],
                quality: {
                    value: "good-ish",
                    color: "success"
                }
            },
            {
                name: "cloud-1",
                description: "Deployment of a wordpress on AWS using Terraform",
                link: "https://github.com/Caceresenzo/42/tree/master/cloud-1",
                languages: [
                    "docker",
                    "aws",
                    "terraform",
                ],
                quality: {
                    value: "good?",
                    color: "success"
                }
            },
            {
                name: "scop",
                description: "Simple 3D model viewer",
                link: "https://github.com/Caceresenzo/42/tree/master/scop",
                languages: [
                    "c++",
                ],
                quality: {
                    value: "good",
                    color: "success"
                }
            },
            {
                name: "Inception-of-Things",
                description: "Simple Kubernetes deployment on VMs using Vagrant",
                link: "https://github.com/Caceresenzo/42/tree/master/Inception-of-Things",
                languages: [
                    "kubernetes",
                    "vagrant",
                ],
                quality: {
                    value: "good?",
                    color: "success"
                }
            },
            {
                name: "nm",
                description: "Remake of Linux's nm utility",
                link: "https://github.com/Caceresenzo/42/tree/master/nm",
                languages: [
                    "c",
                ],
                quality: {
                    value: "good",
                    color: "success"
                }
            },
            {
                name: "transcendence",
                description: "Small multiplayer pong platform with friend and chat integration",
                link: "https://github.com/Caceresenzo/42/tree/master/ft_transcendence",
                languages: [
                    "javascript",
                    "mysql",
                ],
                quality: {
                    value: "average+",
                    color: "warning"
                }
            },
            {
                name: "containers",
                description: "Remake of C++'s containers",
                link: "https://github.com/Caceresenzo/42/tree/master/ft_containers",
                languages: [
                    "c++",
                ],
                quality: {
                    value: "average+",
                    color: "warning"
                }
            },
            {
                name: "cub3d",
                description: "Simple ray-caster",
                link: "https://github.com/Caceresenzo/42/tree/master/cub3d",
                languages: [
                    "c",
                ],
                quality: {
                    value: "average-",
                    color: "warning"
                }
            },
            {
                name: "printf",
                description: "Remake of the `printf` function",
                link: "https://github.com/Caceresenzo/42/tree/master/ft_printf",
                languages: [
                    "c",
                ],
                quality: {
                    value: "bad",
                    color: "error"
                }
            },
        ]
    }),
    {
        name: "42 Piscine",
        description: "All of my work from the piscine of 42 school",
        link: "https://github.com/Caceresenzo/42",
        languages: ["c", "bash", "git"],
        quality: {
            value: "school",
            color: "primary"
        },
    },
    {
        name: "caceresenzo.dev (this)",
        description: "Source code of this website",
        link: "https://github.com/Caceresenzo/caceresenzo.dev",
        languages: ["docker", "vue.js", "nginx", "git"],
        quality: {
            value: "average",
            color: "warning"
        },
    },
    {
        name: "My IUT Schedule",
        description:
            "A simple calendar-like app for checking next lessons from the IUT I left for 42",
        link: "https://github.com/Caceresenzo/My-IUT-Schedule",
        languages: ["android", "git"],
        quality: {
            value: "good-ish",
            color: "success"
        },
    },
    {
        name: "BoxPlay",
        description: "A Netflix clone, but even better ;)",
        link: "https://github.com/Caceresenzo/boxplay-android",
        languages: ["android", "git"],
        quality: {
            value: "good-",
            color: "success"
        },
    },
    {
        name: "Mon Guide Musculation",
        description: "My first Flutter app",
        link: "https://github.com/Caceresenzo/MonGuideMusculation",
        languages: ["flutter", "git"],
        quality: {
            value: "average-",
            color: "warning"
        },
    },
    {
        name: "Negro SA",
        description: "Work done for Negro SA",
        link: "https://github.com/Caceresenzo/negrosa",
        languages: ["java", "spring", "vue.js", "flutter", "docker", "git"],
        quality: {
            value: "average-",
            color: "warning"
        },
    },
    {
        name: "JELDWEN",
        description: "Work done for JELDWEN",
        link: "https://github.com/Caceresenzo/jeldwen",
        languages: ["java", "spring", "vue.js", "docker", "git"],
        quality: {
            value: "average-",
            color: "warning"
        },
    },
];