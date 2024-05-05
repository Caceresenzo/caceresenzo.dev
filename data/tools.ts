import adguardIcon from "~/assets/tools/adguard.png";
import discordIcon from "~/assets/tools/discord.svg";
import fluxIcon from "~/assets/tools/flux.svg";
import filezillaIcon from "~/assets/tools/filezilla.svg";
import javaIcon from "~/assets/tools/java.svg";
import memreductIcon from "~/assets/tools/memreduct.png";
import monitorianIcon from "~/assets/tools/monitorian.png";
import powertoysIcon from "~/assets/tools/powertoys.png";
import teamviewerIcon from "~/assets/tools/teamviewer.svg";
import openvpnIcon from "~/assets/tools/openvpn.png";
import visualstudiocodeIcon from "~/assets/tools/visualstudiocode.svg";
import _7zipIcon from "~/assets/tools/7zip.svg";
import firefoxIcon from "~/assets/tools/firefox.svg";
import notepadppIcon from "~/assets/tools/notepad++.svg";
import qbittorrentIcon from "~/assets/tools/qbittorrent.svg";
import steamIcon from "~/assets/tools/steam.svg";
import vlcIcon from "~/assets/tools/vlc.svg";
import libreofficeIcon from "~/assets/tools/libreoffice.svg";
import speccyIcon from "~/assets/tools/speccy.webp";
import nodejsIcon from "~/assets/tools/nodejs.svg";
import gitIcon from "~/assets/tools/git.svg";
import altsnapIcon from "~/assets/tools/altsnap.png";
import dockerIcon from "~/assets/tools/docker.svg";
import logitechgamingIcon from "~/assets/tools/logitechgaming.svg";
import pythonIcon from "~/assets/tools/python.svg";
import blenderIcon from "~/assets/tools/blender.svg";
import devtoysIcon from "~/assets/tools/devtoys.png";
import mongodbcompassIcon from "~/assets/tools/mongodbcompass.svg";
import paintdotnetIcon from "~/assets/tools/paintdotnet.png";
import teamsIcon from "~/assets/tools/teams.svg";
import terraformIcon from "~/assets/tools/terraform.svg";
import awsIcon from "~/assets/tools/aws.svg";
import virtualboxIcon from "~/assets/tools/virtualbox.png";
import sysinternalsIcon from "~/assets/tools/sysinternals.png";
import battlenetIcon from "~/assets/tools/battlenet.svg";

export interface Tool {
    name: string
    description: string
    icon: string
    wingetPackage?: string
    downloadLink: string
}

export const tools: Array<Tool> = [
    {
        name: "AdGuard",
        description: "Block ads",
        icon: adguardIcon,
        wingetPackage: "AdGuard.AdGuard",
        downloadLink: "https://adguard.com/en/adguard-windows/overview.html"
    },
    {
        name: "Discord",
        description: "Chat with friends",
        icon: discordIcon,
        wingetPackage: "Discord.Discord",
        downloadLink: "https://discord.com/download"
    },
    {
        name: "f.lux",
        description: "Control screen blue light",
        icon: fluxIcon,
        wingetPackage: "flux.flux",
        downloadLink: "https://justgetflux.com/"
    },
    {
        name: "FileZilla",
        description: "Remote files",
        icon: filezillaIcon,
        downloadLink: "https://filezilla-project.org/download.php?type=client"
    },
    {
        name: "Java JDK 21",
        description: "Best language",
        icon: javaIcon,
        wingetPackage: "Oracle.JDK.21",
        downloadLink: "https://www.oracle.com/java/technologies/downloads/#java21"
    },
    {
        name: "Mem Reduct",
        description: "Clear the RAM",
        icon: memreductIcon,
        wingetPackage: "Henry++.MemReduct",
        downloadLink: "https://github.com/henrypp/memreduct"
    },
    {
        name: "Monitorian",
        description: "Control screen brightness",
        icon: monitorianIcon,
        wingetPackage: "emoacht.Monitorian",
        downloadLink: "https://github.com/emoacht/Monitorian"
    },
    {
        name: "PowerToys",
        description: "For power users",
        icon: powertoysIcon,
        wingetPackage: "Microsoft.PowerToys",
        downloadLink: "https://apps.microsoft.com/detail/xp89dcgq3k6vld"
    },
    {
        name: "TeamViewer",
        description: "Remote control",
        icon: teamviewerIcon,
        wingetPackage: "TeamViewer.TeamViewer",
        downloadLink: "https://www.teamviewer.com/en/download/windows/"
    },
    {
        name: "OpenVPN",
        description: "Remote network",
        icon: openvpnIcon,
        wingetPackage: "OpenVPNTechnologies.OpenVPN",
        downloadLink: "https://openvpn.net/community-downloads/"
    },
    {
        name: "Visual Studio Code",
        description: "For stuff other than Java",
        icon: visualstudiocodeIcon,
        wingetPackage: "Microsoft.VisualStudioCode",
        downloadLink: "https://code.visualstudio.com/download"
    },
    {
        name: "7zip",
        description: "Better than WinRAR",
        icon: _7zipIcon,
        wingetPackage: "7zip.7zip",
        downloadLink: "https://www.7-zip.org/download.html"
    },
    {
        name: "Firefox",
        description: "When Chrome is not working",
        icon: firefoxIcon,
        wingetPackage: "Mozilla.Firefox",
        downloadLink: "https://www.7-zip.org/download.html"
    },
    {
        name: "Notepad++",
        description: "Notepad on steroid",
        icon: notepadppIcon,
        wingetPackage: "Notepad++.Notepad++",
        downloadLink: "https://notepad-plus-plus.org/downloads/"
    },
    {
        name: "qBittorrent",
        description: "To only download free stuff",
        icon: qbittorrentIcon,
        wingetPackage: "qBittorrent.qBittorrent",
        downloadLink: "https://www.qbittorrent.org/download"
    },
    {
        name: "Steam",
        description: "Play with friends",
        icon: steamIcon,
        wingetPackage: "Valve.Steam",
        downloadLink: "https://store.steampowered.com/about/"
    },
    {
        name: "VLC",
        description: "The best player",
        icon: vlcIcon,
        wingetPackage: "Valve.Steam",
        downloadLink: "https://www.videolan.org/vlc/download-windows.html"
    },
    {
        name: "Libre Office",
        description: "I don't want to pay for the Office suite",
        icon: libreofficeIcon,
        wingetPackage: "TheDocumentFoundation.LibreOffice",
        downloadLink: "https://fr.libreoffice.org/download/telecharger-libreoffice/"
    },
    {
        name: "Speccy",
        description: "List hardware",
        icon: speccyIcon,
        wingetPackage: "Piriform.Speccy",
        downloadLink: "https://www.ccleaner.com/speccy/download"
    },
    {
        name: "Node JS",
        description: "npm run dev",
        icon: nodejsIcon,
        wingetPackage: "OpenJS.NodeJS.LTS",
        downloadLink: "https://nodejs.org/en/download"
    },
    {
        name: "Git",
        description: "Access to GitHub",
        icon: gitIcon,
        wingetPackage: "Git.Git",
        downloadLink: "https://git-scm.com/downloads"
    },
    {
        name: "AltSnap",
        description: "A really good window mover",
        icon: altsnapIcon,
        wingetPackage: "AltSnap.AltSnap",
        downloadLink: "https://github.com/RamonUnch/AltSnap"
    },
    {
        name: "Docker Desktop",
        description: "I can't live without it",
        icon: dockerIcon,
        wingetPackage: "Docker.DockerDesktop",
        downloadLink: "https://www.docker.com/products/docker-desktop/"
    },
    {
        name: "Logitech Gaming Software",
        description: "Configure my mouse",
        icon: logitechgamingIcon,
        wingetPackage: "Logitech.LGS",
        downloadLink: "https://support.logi.com/hc/en-gb/articles/360025298053-Logitech-Gaming-Software"
    },
    {
        name: "Python 3.10",
        description: "Scripting language",
        icon: pythonIcon,
        wingetPackage: "Python.Python.3.10",
        downloadLink: "https://www.python.org/downloads/"
    },
    {
        name: "Blender",
        description: "Modeling software",
        icon: blenderIcon,
        wingetPackage: "BlenderFoundation.Blender",
        downloadLink: "https://www.blender.org/download/"
    },
    {
        name: "DevToys",
        description: "Utility software",
        icon: devtoysIcon,
        downloadLink: "https://apps.microsoft.com/detail/9pgcv4v3bk4w"
    },
    {
        name: "MongoDB Compass",
        description: "PhpMyAdmin for MongoDB",
        icon: mongodbcompassIcon,
        wingetPackage: "MongoDB.Compass.Full",
        downloadLink: "https://www.mongodb.com/try/download/compass"
    },
    {
        name: "Paint.NET",
        description: "Paint on steroid",
        icon: paintdotnetIcon,
        wingetPackage: "dotPDNLLC.paintdotnet",
        downloadLink: "https://getpaint.net/download.html"
    },
    {
        name: "Microsoft Teams",
        description: "A very bad software",
        icon: teamsIcon,
        wingetPackage: "Microsoft.Teams",
        downloadLink: "https://www.microsoft.com/en-us/microsoft-teams/download-app"
    },
    {
        name: "Terraform",
        description: "A deployment tool",
        icon: terraformIcon,
        wingetPackage: "Hashicorp.Terraform",
        downloadLink: "https://developer.hashicorp.com/terraform/install#windows"
    },
    {
        name: "Amazon AWS CLI",
        description: "Only to sync s3 and login to a container registry",
        icon: awsIcon,
        wingetPackage: "Amazon.AWSCLI",
        downloadLink: "https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html"
    },
    {
        name: "VirtualBox",
        description: "Virtual machine",
        icon: virtualboxIcon,
        wingetPackage: "Oracle.VirtualBox",
        downloadLink: "https://www.virtualbox.org/wiki/Downloads"
    },
    {
        name: "Sysinternals Suite",
        description: "A cool tool suite",
        icon: sysinternalsIcon,
        downloadLink: "https://apps.microsoft.com/detail/9p7knl5rwt25"
    },
    {
        name: "Battle.Net",
        description: "Overwatch",
        icon: battlenetIcon,
        downloadLink: "https://download.battle.net/en-us/desktop"
    }
].sort(({ name: a }, { name: b }) => a.localeCompare(b))
