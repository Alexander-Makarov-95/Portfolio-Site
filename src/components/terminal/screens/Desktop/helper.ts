import { ApplicationName } from "../../../terminal/contexts/ApplicationContext"

const AppsOnDesktop: {
  title: string
  id: ApplicationName
  icon: string
}[] = [
  {
    title: "Steam Sync",
    id: "steam_sync",
    icon: "icons//applications/steam_sync.svg",
  },
  {
    title: "Portfolio",
    id: "personal_website",
    icon: "/icons/applications/planet.svg",
  },
  {
    title: "Blissful Echoes",
    id: "blissful_echoes",
    icon: "/icons/applications/blissful_echoes.svg",
  },
]

export { AppsOnDesktop }
