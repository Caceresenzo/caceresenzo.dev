import crunchdaoLogo from "~/assets/logo/crunchdao.jpg"
import fortyTwoLogo from "~/assets/logo/42.png"

export interface Project {
    name: string,
    description: string,
    logo?: string,
    languages: Array<string>
    quality: Quality,
    link?: string,
    internal?: boolean,
    deprecated?: boolean,
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
    collection({
        name: "CrunchDAO",
        description: "The startup I currently part of",
        logo: crunchdaoLogo,
        link: "https://github.com/crunchdao",
        quality: {
            value: "startup",
            color: "primary"
        },
        children: [
            {
                name: "Competition Platform",
                description: "Main CrunchDAO user-facing platform",
                link: "https://hub.crunchdao.com/",
                languages: [
                    "microservice",
                    "java",
                    "spring",
                    "vue",
                    "javascript",
                    "git",
                    "python",
                ],
                quality: {
                    value: "good-ish",
                    color: "success"
                }
            },
            {
                name: "Crunch-CLI",
                description: "Competition Platform's CLI, similar to the Git-CLI",
                link: "https://pypi.org/project/crunch-cli/",
                languages: [
                    "python",
                ],
                quality: {
                    value: "good-",
                    color: "success"
                }
            },
            {
                name: "Broker Toolings",
                description: "Broker tracker and tooling for easier team access",
                languages: [
                    "python",
                    "grafana",
                ],
                internal: true,
                quality: {
                    value: "good-",
                    color: "success"
                }
            },
            {
                name: "Airflow Pipeline",
                description: "Main production pipeline that handle all of the data",
                languages: [
                    "python",
                    "airflow",
                    "ci/cd",
                ],
                internal: true,
                quality: {
                    value: "good-",
                    color: "success"
                }
            },
            {
                name: "Data Provider Client CLIs",
                description: "Dedicated CLIs for each of our data providers",
                languages: [
                    "python",
                ],
                internal: true,
                quality: {
                    value: "good",
                    color: "success"
                }
            },
            {
                name: "readwrite",
                description: "Fast debugging utility to read/write file of any time",
                languages: [
                    "python",
                ],
                link: "https://pypi.org/project/readwrite/",
                quality: {
                    value: "good",
                    color: "success"
                }
            },
            {
                name: "Strategy Runner",
                description: "Internal strategy code runner with checkpoint support for fast iteration",
                languages: [
                    "python",
                ],
                internal: true,
                quality: {
                    value: "good-",
                    color: "success"
                }
            },
            {
                name: "DeSci Platform",
                description: "Decentralized Science platform allowing anyone to contribute to research papers of which the community vote to accept the changes",
                languages: [
                    "java",
                    "spring",
                    "vue",
                    "javascript",
                    "mongodb",
                ],
                link: "https://desci.crunchdao.com/",
                quality: {
                    value: "average+",
                    color: "warning"
                }
            },
            {
                name: "Scrappers",
                description: "Data scrapper for multiple website that can run 24/7 by rotating IP addresses",
                languages: [
                    "java",
                    "spring",
                    "proxy",
                    "mysql",
                    "mongodb",
                ],
                internal: true,
                quality: {
                    value: "good-ish",
                    color: "warning"
                }
            },
            {
                name: "Backtester",
                description: "Modular strategy backtester",
                languages: [
                    "python",
                ],
                link: "https://pypi.org/project/bktest/",
                quality: {
                    value: "good-",
                    color: "success"
                }
            },
            {
                name: "Sales Funnel",
                description: "Funnel to make user sign a contract, verify their identity and then pay for buying $CRUNCHes",
                languages: [
                    "java",
                    "spring",
                    "javascript",
                    "vue",
                ],
                link: "https://app.crunchdao.com/",
                deprecated: true,
                quality: {
                    value: "average+",
                    color: "warning"
                }
            },
            {
                name: "Custom Database with Index support",
                description: "Custom database to index 1.2To of JSON data",
                languages: [
                    "python",
                    "c++",
                ],
                internal: true,
                quality: {
                    value: "good-ish",
                    color: "success"
                }
            },
            {
                name: "Pitch Dech ranking Platform",
                description: "Send your pitch-deck and get scored by ChatGPT",
                languages: [
                    "java",
                    "spring",
                    "python",
                    "chat-gpt",
                ],
                deprecated: true,
                quality: {
                    value: "average-",
                    color: "warning"
                }
            },
            {
                name: "Trading Platform",
                description: "Unitified platform that can connect to multiple broker",
                languages: [
                    "java",
                    "spring",
                    "docker",
                ],
                internal: true,
                deprecated: true,
                quality: {
                    value: "good-",
                    color: "success"
                }
            },
            {
                name: "Web3 Contracts",
                description: "Ethereum Contracts that handle the Crunch Token, vesting, staking, ...",
                languages: [
                    "web3",
                    "solidity",
                    "javascript",
                    "truffle",
                ],
                link: "https://github.com/crunchdao/contracts",
                quality: {
                    value: "good-",
                    color: "success"
                }
            },
        ]
    }),
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