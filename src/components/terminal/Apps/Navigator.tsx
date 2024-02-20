import { useState, useEffect } from "react"
import { useWindow } from "../contexts/WindowContext"
import styles from "@/components/terminal/styles/tailwind.module.css"

function Navigator() {
  const { setInitialSize, setIsResizable } = useWindow()
  const [url, setUrl] = useState("")

  const [history, setHistory] = useState<string[]>([])

  useEffect(() => {
    setInitialSize({
      width: 325,
      height: 225,
    })
    setIsResizable(true)
  }, [])

  const addHistory = (url: string) => {
    if (!url) {
      setHistory([])
      return
    }
    if (history.at(-1) === url) return

    const newHistory = [...history]

    if (url.startsWith("http://") || url.startsWith("https://")) {
      newHistory.push(url)
    } else {
      newHistory.push(`https://${url}`)
    }
    setHistory(newHistory)
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const url = e.currentTarget.value
      addHistory(url)
    }
  }

  const page = history[0]

  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex h-6">
      </div>
      {page ? (
        <iframe
          className="h-full"
          sandbox="allow-same-origin"
          src={history.at(-1)}
        />
      ) : (
        <div className="flex h-full flex-col items-center justify-center gap-4">
          
          <h2 className = {styles.customH2}>In Progress!</h2>
          
        </div>
      )}
    </div>
  )
}

export default Navigator
