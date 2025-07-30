import image from "../../../assets/Frame 59.png";
import icon from "../../../assets/icon 1.png";
import { FaPhone } from "react-icons/fa6";
export const Section01 = () => {
  return (
    <div className="h-[640px] flex">
      <div className="w-[55%] mr-[114px] mt-[98px] mb-[113px]">
        <div className="flex">
          <div className="mr-[11px]">
            <img src={icon} alt="" />
          </div>
          <div className="text-[14px] font-[700] text-[#4318FF] mb-[10px]">
            TRENDIEST TAILWIND TEMPLATES
          </div>
        </div>
        <div className="text-[60px] font-[800] text-[#1B2559] mb-[24px]">
          Take your website to the next level with Horizon UI
        </div>
        <div className="text-[16px] font-[500] text-[#68769F] w-[429px] mb-[20px]">
          Save hundreds of hours trying to create and develop a dashboard from scratch. The fastest, most responsive & trendiest dashboard is here. Seriously.
        </div>
        <div className="flex items-center">
          <button className="py-[16px] px-[28px] bg-[#4318FF] text-[14px] font-[700] text-[#FFFFFF] rounded-[10px] cursor-pointer">Get started now</button>
          <button className="flex items-center px-[8px] py-[24px] text-[14px] text-[#1B2559]">
            <FaPhone/>
            <div className="ml-[6px]">Book a free call</div>
          </button>
        </div>
      </div>
      <div className="h-[100%]">
        <img src={image} alt="image" className="h-[100%] object-contain"/>
      </div>
    </div>
  )
}