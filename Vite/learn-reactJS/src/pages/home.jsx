import { Header } from "../components/layouts/header/Header"

export const Home = () => {
  return (
    <>
      <div className="xl:w-[1180px] lg:w-[1024px] md:w-[768px] sm:w-[640px] min-[400px]:w-[400px] w-[300px] mr-auto ml-auto box-border">
        <Header/>
      </div>
    </>
  )
}