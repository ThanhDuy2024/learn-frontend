import logo from "../../assets/Frame 7.png";
import { DogItem } from "./dogItem";
export const DogList = () => {
  return (
    <>
      <div className='container'>
        <div className='inner__wrap'>
          <div className='list__item'>
            <DogItem
              images={logo}
              title="MO231 - Pomeranian Trắng"
              sex="Đực"
              age="02 tháng"
              price="6.900.000 VND"
            />
          </div>
        </div>
      </div>
    </>
  )
}