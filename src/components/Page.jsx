import React from 'react'
import './Page.css'

export default function Page({ name, children }) {

  return (
    <div className={`page ${name}`}>
      {children}
    </div>
  )
  
}