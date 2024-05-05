export interface Tool {
    name: string
    description: string
    wingetPackage?: string
    downloadLink: string
}

export const tools: Array<Tool> = [
    {
        name: "AdGuard",
        description: "Block ads",
        wingetPackage: "AdGuard.AdGuard",
        downloadLink: "https://adguard.com/en/adguard-windows/overview.html"
    },
    {
        name: "Discord",
        description: "Chat with friends",
        wingetPackage: "Discord.Discord",
        downloadLink: "https://discord.com/download"
    },
    {
        name: "f.lux",
        description: "Control screen blue light",
        wingetPackage: "flux.flux",
        downloadLink: "https://justgetflux.com/"
    },
    {
        name: "Mem Reduct",
        description: "Clear the RAM",
        wingetPackage: "Henry++.MemReduct",
        downloadLink: "https://github.com/henrypp/memreduct"
    },
    {
        name: "Monitorian",
        description: "Control screen brightness",
        wingetPackage: "emoacht.Monitorian",
        downloadLink: "https://github.com/emoacht/Monitorian"
    },
    {
        name: "PowerToys",
        description: "For power users",
        wingetPackage: "Microsoft.PowerToys",
        downloadLink: "https://apps.microsoft.com/detail/xp89dcgq3k6vld"
    },
    {
        name: "TeamViewer",
        description: "Remote control",
        wingetPackage: "TeamViewer.TeamViewer",
        downloadLink: "https://www.teamviewer.com/en/download/windows/"
    }
]
