import './App.css';
import images from "./assets/Frame 7.png";
function App() {

  return (
    <>
      <h1>Hell0</h1>
      <div className='container'>
        <div className='inner__wrap'>
          <div className='list__item'>
            <div className='item'>
              <div className='images'>
                <img src={images} alt="logo" />
              </div>
              <div className='content'>
                <div className='title'>MO231 - Pomeranian Trắng</div>
                <div className='infor'>
                  <div className='sub-infor'>
                    Giống: 
                    <p>Đực</p>
                  </div>
                  <div>-</div>
                  <div className='sub-infor'>
                    Tuổi:
                    <p>02 tháng</p>
                  </div>
                </div>
                <div className='price'>
                  6.900.000 VND
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
