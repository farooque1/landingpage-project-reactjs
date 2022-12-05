import React from 'react'
import image1 from '../img/evaluation-1.webp';
import image2 from '../img/evaluation-2.webp';
import s1 from '../img/step-1.webp';
import s2 from '../img/step-2.webp';

function Scientiec() {
  return (
    <>
    <section>
    <div className='container'>
        <div className='row'>
          <div className='col-12 my-5 text-center'>
            <h4 className='step'>SCIENTIFIC EVALUATION OF YOUR SKIN</h4>
          </div>
        </div>
        <div className=' mb-5'>
          <div className='col-12 col-lg-5 col-md-12'>
            <h4><img src={s1} /> SKIN SPECIALIST CONSULTATION</h4>
          <img src={image1} className="img" />
          </div>
          <div className='col-12 col-lg-5 col-md-12'>
            <h4><img src={s2}  /> DIGITAL DIAGNOSIS</h4>
          <img src={image2} className="img"/>
          </div>
        </div>
      </div>
    </section>
      
    </>
  )
}

export default Scientiec