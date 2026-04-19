"use client"

import { useEffect, useState } from "react"

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if device supports hover (desktop)
    const hasHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches

    if (!hasHover) {
      return // Don't show custom cursor on mobile
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)

      const target = e.target as HTMLElement
      const isClickable =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.onclick !== null ||
        target.closest("a") !== null ||
        target.closest("button") !== null ||
        window.getComputedStyle(target).cursor === "pointer"

      setIsPointer(isClickable)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseleave", handleMouseLeave)

    // Hide custom cursor on body to show default cursor
    document.body.style.cursor = "auto"

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      {/* Outer circle */}
      <div
        className="pointer-events-none fixed z-[9999] hidden md:block"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          className={`rounded-full border-2 transition-all duration-150 ${
            isPointer
              ? "h-12 w-12 border-secondary bg-secondary/15"
              : "h-10 w-10 border-primary/60 bg-primary/5"
          }`}
        />
      </div>

      {/* Inner dot */}
      <div
        className="pointer-events-none fixed z-[9999] hidden md:block"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          className={`rounded-full transition-all duration-100 ${
            isPointer ? "h-1.5 w-1.5 bg-secondary" : "h-1 w-1 bg-primary"
          }`}
        />
      </div>
    </>
  )
}
