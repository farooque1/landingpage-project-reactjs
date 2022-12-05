import React from 'react'
import skin from '../img/skin-model-r.webp';
import '../App.css';

function Header() {
  return (
    <>
    <section className='banner'>
    <div className='container-fluid '>
        <div className='row'>  
          <div className='col-lg-4 col-md-6 col-sm-6'>
            <img src={skin} className='img-responsive banner-image' alt="skin"/>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-2 text-center banner-text'>
            <h3>Treat your <br /> Skin Problems with</h3>
            <h4>Scientific and <br/> Personalised <br/>Homeopathy</h4>
              <hr />
              <p>PSORIASIS | WHITE PATCHES | ECZEMA | LICHEN PLANUS | SKIN ALLERGY | HIVES | URTICARIA | ACNE | BRIGHTENING | LIGHTENING | TIGHTENING</p>
          </div>
        </div>
      </div>
    </section>

    </>
  )
}

export default Header