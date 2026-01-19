"use client"
import React from "react"

export default function ImageCard({
  title,
  subtitle,
  meta,
  price,
  image,
  badge,
  onClick
}: {
  title: string
  subtitle?: string
  meta?: string
  price?: string
  image?: string
  badge?: string
  onClick?: () => void
}) {
  return (
    <div className="image-card" onClick={onClick} style={{ cursor: onClick ? 'pointer' : 'default' }}>
      {image && (
        <div className="image-card-image">
          <img src={image} alt={title} />
          {badge && <span className="badge">{badge}</span>}
        </div>
      )}
      <div className="image-card-content">
        <h3>{title}</h3>
        {subtitle && <div className="muted">{subtitle}</div>}
        {meta && <div className="meta" style={{ marginTop: 8 }}>{meta}</div>}
        {price && <div style={{ marginTop: 12 }}><span className="pill">{price}</span></div>}
      </div>
    </div>
  )
}
