import React from "react"

export default function Footer(){
  return (
    <footer className="footer">
      <div className="container">
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <div>
            <strong>thebayislands.au</strong>
            <div className="muted">Local hub for SMBI — directory, jobs, classifieds, events</div>
          </div>
          <div className="muted">© {new Date().getFullYear()} thebayislands.au</div>
        </div>
      </div>
    </footer>
  )
}
