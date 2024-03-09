import { ApplicationName } from "../../../terminal/contexts/ApplicationContext"

const AppsOnDesktop: {
  title: string
  id: ApplicationName
  icon: string
  defaultPosition: {
    x: number;
    y: number;
  }
  mobileDefaultPosition: {
    x: number;
    y: number;
  }
}[] = [
  {
    title: "Steam Sync",
    id: "steam_sync",
    icon: "icons//applications/steam_sync.svg",
    defaultPosition: {x: 75, y: 10},
    mobileDefaultPosition: {x: 30, y: 30}
  },
  {
    title: "Portfolio",
    id: "personal_website",
    icon: "/icons/applications/planet.svg",
    defaultPosition: {x: 100, y: 20},
    mobileDefaultPosition: {x: 100, y: -10}
  },
  {
    title: "Blissful Echoes",
    id: "blissful_echoes",
    icon: "/icons/applications/blissful_echoes.svg",
    defaultPosition: {x: 30, y: 0},
    mobileDefaultPosition: {x: 150, y: -150}
  },
]

export { AppsOnDesktop }


// {
//   title: "Steam Sync",
//   id: "steam_sync",
//   icon: "icons//applications/steam_sync.svg",
//   defaultPosition: {x: 30, y: 30}
// },
// {
//   title: "Portfolio",
//   id: "personal_website",
//   icon: "/icons/applications/planet.svg",
//   defaultPosition: {x: 50, y: 40}
// },
// {
//   title: "Blissful Echoes",
//   id: "blissful_echoes",
//   icon: "/icons/applications/blissful_echoes.svg",
//   defaultPosition: {x: 150, y: -10}
// },