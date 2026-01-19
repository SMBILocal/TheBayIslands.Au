"use client"
import React, { useState } from "react"

export default function ListingForm({
  type = "job",
  onSubmit,
  initialData
}: {
  type?: "job" | "business" | "classified"
  onSubmit: (data: any) => void
  initialData?: any
}) {
  const [formData, setFormData] = useState(initialData || {})

  const handleChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="listing-form">
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          value={formData.title || ""}
          onChange={(e) => handleChange("title", e.target.value)}
          required
        />
      </div>

      {type === "job" && (
        <>
          <div className="form-group">
            <label>Company</label>
            <input
              type="text"
              value={formData.company || ""}
              onChange={(e) => handleChange("company", e.target.value)}
            />
          </div>
        </>
      )}

      {type === "business" && (
        <>
          <div className="form-group">
            <label>Category</label>
            <input
              type="text"
              value={formData.category || ""}
              onChange={(e) => handleChange("category", e.target.value)}
            />
          </div>
        </>
      )}

      {type === "classified" && (
        <>
          <div className="form-group">
            <label>Price</label>
            <input
              type="text"
              value={formData.price || ""}
              onChange={(e) => handleChange("price", e.target.value)}
            />
          </div>
        </>
      )}

      <div className="form-group">
        <label>Location</label>
        <select value={formData.location || ""} onChange={(e) => handleChange("location", e.target.value)}>
          <option value="">Select Location</option>
          <option value="Russell Island">Russell Island</option>
          <option value="Macleay Island">Macleay Island</option>
          <option value="North Stradbroke Island">North Stradbroke Island</option>
          <option value="Lamb Island">Lamb Island</option>
          <option value="Cleveland">Cleveland</option>
          <option value="Redland Bay">Redland Bay</option>
          <option value="Wellington Point">Wellington Point</option>
          <option value="Victoria Point">Victoria Point</option>
        </select>
      </div>

      <div className="form-group">
        <label>Description</label>
        <textarea
          value={formData.description || ""}
          onChange={(e) => handleChange("description", e.target.value)}
          required
        />
      </div>

      <button type="submit" className="cta">
        {initialData ? "Update Listing" : "Create Listing"}
      </button>
    </form>
  )
}
