"use client"
import React, { useState } from "react"

export default function RadioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      gap: "8px",
      marginLeft: "auto",
      fontSize: "14px",
      fontWeight: "500",
      color: "#0f172a"
    }}>
      <span style={{ whiteSpace: "nowrap" }}>📻 Bay Islands Radio</span>
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        style={{
          padding: "6px 12px",
          background: isPlaying ? "#0ea5e9" : "#e2e8f0",
          color: isPlaying ? "white" : "#0f172a",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontWeight: "600",
          fontSize: "13px",
          transition: "all 0.2s ease",
          display: "flex",
          alignItems: "center",
          gap: "4px"
        }}
        onMouseEnter={(e) => {
          if (!isPlaying) e.currentTarget.style.background = "#cbd5e1"
        }}
        onMouseLeave={(e) => {
          if (!isPlaying) e.currentTarget.style.background = "#e2e8f0"
        }}
      >
        {isPlaying ? "⏸ Pause" : "▶ Play"}
      </button>
    </div>
  )
}
