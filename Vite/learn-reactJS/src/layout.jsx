import { Outlet } from "react-router"
import { Footer } from "./components/layouts/footer/Footer"
import { Header } from "./components/layouts/header/Header"

export const Layout = () => {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}