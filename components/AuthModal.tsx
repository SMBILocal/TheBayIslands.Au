"use client"
import React, { useState } from "react"

export default function AuthModal({
  isOpen,
  onClose,
  onSubmit,
  mode = "login"
}: {
  isOpen: boolean
  onClose: () => void
  onSubmit: (data: { email: string; password: string; name?: string }) => void
  mode?: "login" | "signup"
}) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      onSubmit({ email, password, name: mode === "signup" ? name : undefined })
    } finally {
      setLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <h2>{mode === "login" ? "Sign In" : "Create Account"}</h2>
        <form onSubmit={handleSubmit}>
          {mode === "signup" && (
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          )}
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="cta" disabled={loading}>
            {loading ? "Loading..." : mode === "login" ? "Sign In" : "Create Account"}
          </button>
        </form>
      </div>
    </div>
  )
}
