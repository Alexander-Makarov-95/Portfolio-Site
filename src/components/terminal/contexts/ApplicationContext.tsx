import {
  createContext,
  useState,
  ReactNode,
  useMemo,
  lazy,
  useEffect,
} from "react"
import { App } from "../types/ApplicationType"

const APPLICATIONS = {
  steam_sync: lazy(() => import("../Apps/SteamSync")),
  cat_tracker: lazy(() => import("../Apps/Calculator")),
  wedding_photos: lazy(() => import("../Apps/Navigator")),
  portfolio_website: lazy(() => import("../Apps/Terminal")),
}

export type ApplicationName = keyof typeof APPLICATIONS

interface AddAppProps {
  name: ApplicationName
  x?: number
  y?: number
}

export interface ApplicationType {
  apps: App[]
  addApp: (props: AddAppProps) => void
  removeApp: (id: string) => void
  clearApps: () => void
  appOnFocus: string
  setAppOnFocus: (id: string) => void
}

const ApplicationContext = createContext<ApplicationType>({} as ApplicationType)

function randomFixedInteger(length: number) {
  return Math.floor(
    Math.pow(10, length - 1) +
      Math.random() * (Math.pow(10, length) - Math.pow(10, length - 1) - 1),
  )
}

const ApplicationProvider = ({ children }: { children: ReactNode }) => {
  const [apps, setApps] = useState<App[]>([])
  const [appOnFocus, setAppOnFocus] = useState("")

  useEffect(() => {
    if (!appOnFocus) return
    if (apps.length <= 1) return

    const index = apps.findIndex(({ id }) => id === appOnFocus)
    if (index !== -1) {
      // Copy the apps array
      const copyApps = [...apps];
      // Remove the app from its current position
      const [app] = copyApps.splice(index, 1);
      // Push the app back to the end of the array
      copyApps.push(app);

      setApps(copyApps);
    }
  }, [appOnFocus])

  const addApp = ({ name, x, y }: AddAppProps) => {
    const Comp = APPLICATIONS[name]

    const app: App = {
      id: randomFixedInteger(8).toString(),
      Node: Comp,
      title: name,
      start: Date.now(),
      x: x,
      y: y,
    }

    setAppOnFocus(app.id)

    setApps([...apps, app])
  }

  const removeApp = (id: string) => {
    setApps((prev) => prev.filter((app) => app.id !== id))
  }

  const clearApps = () => {
    setApps([])
  }

  return (
    <ApplicationContext.Provider
      value={{
        apps,
        addApp,
        removeApp,
        clearApps,
        appOnFocus,
        setAppOnFocus,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  )
}

export { ApplicationContext }

export default ApplicationProvider
