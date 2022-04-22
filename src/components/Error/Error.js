import React from 'react'
import Footer from '../Footer/Footer'
import image from '../HomeSlider/image/image4.png'
import { useNavigate } from 'react-router-dom'

function Error() {

  let navigate = useNavigate();

  return (
    <>
      <div style={{ display: 'flex', flexFlow: "column" }}>
        <img src={image} width="40%" height="90%" alt='error_image' style={{ margin: '0 auto' }} />
        <button type="button" class="btn btn-outline-info" style={{ margin: '0 auto' }} onClick={() => navigate('/')}>Go To Home Page</button>
      </div>
      <Footer />
    </>
  )
}

export default Error