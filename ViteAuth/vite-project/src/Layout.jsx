import { Outlet } from "react-router"

export const Layout = () => {
  return (
    <div className="container mx-auto p-4">
      <Outlet/>
    </div>
  )
}