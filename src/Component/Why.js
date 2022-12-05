import React from 'react'
import img1 from '../img/115years.webp';
import img2 from '../img/225-clinic.webp';
import img3 from '../img/advanced-tech.webp';
import img4 from '../img/happy-patients.webp';
import img5 from '../img/expert.webp';



function Why() {
  return (
    <>
    <section>
    <div className='container-fluid'>
      <div className='row text-center'>
        <div className='col-12 col-lg-10'>
          <h3 className='why'>WHY DR BATRA'S®</h3>
          <div className='whyline'></div>
        </div>
      </div>
      <div className='container row text-center'>

        <div className='col-6 col-sm-3 col-lg-3'>
          <img src={img2} width="60" height="60" />
          <p className='why-num'>1,40,000</p>
          <p className='why-text'>Happy Skin Patients</p>
          < hr className='hr'/>
        </div>

        <div className='col-6 col-sm-3 col-lg-3'>
          <img src={img3} width="60" height="60" />
          <p p className='why-num'>1,400</p>
          <p p className='why-text'>Happy Skin Patients</p>
          < hr className='hr'/>
        </div>

        <div className='col-6 col-sm-3 col-lg-3 '>
          <img src={img4} width="60" height="60" />
          <p p className='why-num'>1,40,000</p>
          <p p className='why-text'>Happy Skin Patients</p>
          < hr className='hr'/>
        </div>

        <div className='col-6 col-sm-3 col-lg-3'>
          <img src={img5} width="60" height="60"/>
          <p p className='why-num'>1,40,000</p>
          <p p className='why-text'>Happy Skin Patients</p>
          < hr className='hr'/>
        </div>
    
        <div className='col-6 col-sm-3 col-lg-3'>
          <img src={img4} width="60" height="60"/>
          <p p className='why-num'>1,40,000</p>
          <p p className='why-text'>Happy Skin Patients</p>
          < hr className='hr'/>
        </div>

        <div className='col-6 col-sm-3 col-lg-3'>
          <img src={img5} width="60" height="60"/>
          <p p className='why-num'>1,40,000</p>
          <p p className='why-text'>Happy Skin Patients</p>
          < hr className='hr'/>
        </div>

        <div className='col-6 col-sm-3 col-lg-3'>
          <img src={img2} width="60" height="60"/>
          <p p className='why-num'>1,40,000</p>
          <p p className='why-text'>Happy Skin Patients</p>
          < hr className='hr'/>
        </div>
      </div>
    </div>
    </section>
    
    </>
  )
}

export default Why