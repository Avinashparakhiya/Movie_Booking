import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import HomeSlider from '../HomeSlider/HomeSlider'
import {useNavigate} from "react-router-dom";
import image5 from '../HomeSlider/image/image5.png'
import image6 from '../HomeSlider/image/image6.jpg'


function Home() {
    let navigate = useNavigate();

    return (
        <>
            <Header title="Welcome To The Movie Land" />
            <HomeSlider />
            <div style={{display:'flex',gap:"10px",justifyContent:'center'}}>
                <div className='user'>
                    <button type="button" className="btn btn-secondary px-5 mr-5" onClick={()=> navigate('/userlogin')}>User</button>
                </div>
                <div className='admin'>
                    <button type="button" className="btn btn-success px-5" onClick={()=> navigate('/adminlogin')}>Admin</button>
                </div>
            </div>
            <div className='image-file' style={{marginTop:"-85px"}}>
                <img src={image6} width="45%" alt='image6' style={{float:'left',paddingTop:'15px'}}/>
            </div>
            <div className='image-file' style={{marginTop:"-105px"}}>
                <img src={image5} width="30%" height="20%" alt='image5' style={{float:'right',paddingTop:'15px'}}/>
            </div>
            <Footer />
        </>
    )
}

export default Home