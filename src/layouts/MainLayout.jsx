import React from 'react'
import { Outlet } from 'react-router'
import Heade from './Heade'
import Footer from './Footer'

export default function MainLayout() {
  return (
    <>
    <Heade/>
    <Outlet/>
    <Footer/>
    </>
  )
}
