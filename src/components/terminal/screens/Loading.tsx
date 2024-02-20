import { useEffect, useState } from "react"
import { useApps } from "../../terminal/hooks/useApp"
;

const loadingChar = ["|", "/", "—", "\\"]

export default function Loading() {
  const [loadingCount, setLoadingCount] = useState(0)

  const { clearApps } = useApps()

  useEffect(() => {
    clearApps()

    const interval = setInterval(() => {
      setLoadingCount((prev) => {
        if (prev === 3) return 0
        return prev + 1
      })
    }, 300)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div
      style={{
        display: 'flex',
        height: '292px',
        width: '502px',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: 'rgba(9, 9, 11, 0.6)', // Adding opacity with rgba
        color: 'white',
        textAlign: 'center',
        margin: "auto", // Center the box
        top: 0,
        bottom: 8,
        left: 0,
        right: 6,
        overflow: 'hidden'
      }}
    >
      <p className="text-2xl">
        SingularityOS <br />
        Beta Release
      </p>
      <span className="text-1xl">{loadingChar[loadingCount]}</span>
      <div>
        <p className="text-1xl">
          Copyright (c) Makarov Corporation, 1995.
          <br />
          All Rights Reserved. SingularityOS is a registered trademark of Makarov Corp.
        </p>
      </div>
    </div>
  )
  
}
