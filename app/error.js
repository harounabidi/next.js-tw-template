"use client" // Error components must be Client Components

import { useEffect } from "react"

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div>
      error
      <button onClick={() => reset()}>reset</button>
    </div>
  )
}
