import React from 'react'
import { Outlet } from 'react-router-dom'

export default function SharedLayouts() {
  return (
    <div>
        <Outlet/>
    </div>
  )
}
