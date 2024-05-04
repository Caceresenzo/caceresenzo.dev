import crunchdaoLogo from "~/assets/logo/crunchdao.jpg"
import fortyTwoLogo from "~/assets/logo/42.png"
import boxplayLogo from "~/assets/logo/boxplay.png"
import negrosaLogo from "~/assets/logo/negrosa.jpg"
import monGuideMusculationLogo from "~/assets/logo/mon-guide-musculation.png"
import myIutSchedule from "~/assets/logo/my-iut-schedule.png"
import jeldwenLogo from "~/assets/logo/jeldwen.jpg"

export interface Project {
    name: string,
    description: string,
    logo?: string,
    skills: Array<string>
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

function collection(collection: Omit<Project, "skills">): Project {
    const skills = [
        ...new Set(collection.children?.flatMap((project) => project.skills) || []),
    ].sort()

    return {
        ...collection,
        skills,
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
                skills: [
                    "microservice",
                    "java",
                    "spring",
                    "vue.js",
                    "javascript",
                    "git",
                    "python",
                    "aws",
                    "terraform",
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
                skills: [
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
                skills: [
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
                skills: [
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
                skills: [
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
                skills: [
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
                skills: [
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
                skills: [
                    "java",
                    "spring",
                    "vue.js",
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
                skills: [
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
                skills: [
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
                skills: [
                    "java",
                    "spring",
                    "javascript",
                    "vue.js",
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
                skills: [
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
                skills: [
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
                skills: [
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
                skills: [
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
                skills: [
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
                skills: [
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
                skills: [
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
                skills: [
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
                skills: [
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
                skills: [
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
                skills: [
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
                skills: [
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
                skills: [
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
                skills: [
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
                skills: [
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
        logo: fortyTwoLogo,
        link: "https://github.com/Caceresenzo/42",
        skills: ["c", "bash", "git"],
        quality: {
            value: "school",
            color: "primary"
        },
    },
    {
        name: "Home Lab",
        description: "Hosting a HP DL380P Gen9 at home",
        skills: ["bash", "sys-admin", "esxi"],
        quality: {
            value: "hobby",
            color: "primary"
        },
    },
    {
        name: "caceresenzo.dev (this)",
        description: "Source code of this website",
        link: "https://github.com/Caceresenzo/caceresenzo.dev",
        skills: ["docker", "vue.js", "nginx", "git"],
        quality: {
            value: "average",
            color: "warning"
        },
    },
    {
        name: "My IUT Schedule",
        description:
            "A simple calendar-like app for checking next lessons from the IUT I left for 42",
        logo: myIutSchedule,
        link: "https://github.com/Caceresenzo/My-IUT-Schedule",
        skills: ["android", "git"],
        quality: {
            value: "good-ish",
            color: "success"
        },
    },
    {
        name: "BoxPlay",
        description: "A Netflix clone, but even better ;)",
        logo: boxplayLogo,
        link: "https://github.com/Caceresenzo/boxplay-android",
        skills: ["android", "git"],
        quality: {
            value: "good-",
            color: "success"
        },
    },
    {
        name: "Mon Guide Musculation",
        description: "My first Flutter app",
        logo: monGuideMusculationLogo,
        link: "https://github.com/Caceresenzo/MonGuideMusculation",
        skills: ["flutter", "git"],
        quality: {
            value: "average-",
            color: "warning"
        },
    },
    {
        name: "Negro SA",
        description: "Work done for Negro SA",
        logo: negrosaLogo,
        link: "https://github.com/Caceresenzo/negrosa",
        skills: ["java", "spring", "vue.js", "flutter", "docker", "git"],
        quality: {
            value: "average-",
            color: "warning"
        },
    },
    {
        name: "JELDWEN",
        description: "Work done for JELDWEN",
        logo: jeldwenLogo,
        link: "https://github.com/Caceresenzo/jeldwen",
        skills: ["java", "spring", "vue.js", "docker", "git"],
        quality: {
            value: "average-",
            color: "warning"
        },
    },
];