export const DogItem = (props) => {
  const {images, title, sex, age, price} = props;
  return (
    <>
      <div className='item'>
        <div className='images'>
          <img src={images} alt="logo" />
        </div>
        <div className='content'>
          <div className='title'>{title}</div>
          <div className='infor'>
            <div className='sub-infor'>
              Giống: <p>{sex}</p>
            </div>
            <div className='sub-infor'>
              Tuổi: <p>{age}</p>
            </div>
          </div>
          <div className='price'>
            {price}
          </div>
        </div>
      </div>
    </>
  )
}