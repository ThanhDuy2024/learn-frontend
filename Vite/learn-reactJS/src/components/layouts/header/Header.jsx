import logo from "../../../assets/HorizonUILogo.svg"
export const Header = () => {
  return (
    <>
      <header className="py-[31px] flex justify-between items-center">
        <div className="sm:hidden block">Nav bar</div>
        <div className="">
          <img src={logo} alt="logo page" className="md:w-[100%] sm:w-[100px] min-[400px]:w-[100%] w-[100px] h-[34px] md:object-cover object-contain"/>
        </div>

        <ul className="sm:flex hidden items-center">
          <li className="sm:mr-[48px] mr-[35px] text-[14px] font-[400]">
            <a href="">Product</a>
          </li>

          <li className="sm:mr-[48px] mr-[35px] text-[14px] font-[400]">
            <a href="">Features</a>
          </li>

          <li className="sm:mr-[48px] mr-[35px] text-[14px] font-[400]">
            <a href="">Pricing</a>
          </li>

          <li className="sm:mr-[48px] mr-[35px] text-[14px] font-[400]">
            <a href="">Company</a>
          </li>
        </ul>

        <div className="">
          <a className="py-[8px] mr-[20px] text-[14px] cursor-pointer md:inline hidden">Log In</a>
          <a className="py-[8px] px-[16px] bg-[#E9E3FF] rounded-[10px] text-[#4318FF] text-[14px] font-[700] cursor-pointer">Sign Up</a>
        </div>
      </header>
    </>
  )
}