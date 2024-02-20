import { useState } from "react"

export function useWindowContext() {
  const [isResizable, setIsResizable] = useState(false)
  const [initialSize, setInitialSize] = useState({ width: 100, height: 200 })

  return {
    isResizable,
    setIsResizable,
    initialSize,
    setInitialSize,
  }
}
