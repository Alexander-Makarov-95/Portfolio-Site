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
    title: "Personal",
    id: "portfolio_website",
    icon: "/icons/applications/planet.svg",
  },
  {
    title: "Wedding Photos",
    id: "wedding_photos",
    icon: "/icons/applications/wedding_viewer.svg",
  },
  {
    title: "Cat Tracker",
    id: "cat_tracker",
    icon: "/icons/applications/cat_tracker.svg",
  }
]

export { AppsOnDesktop }
