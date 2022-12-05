import React from 'react'
import image1 from '../img/Homeopathy.webp';
import image2 from '../img/Hydrafacial.webp';
import image3 from '../img/Dermaheal.webp';

import icons1 from '../img/benefit-icon-1.webp';
import icons2 from '../img/benefit-icon-2.webp';
import icons3 from '../img/benefit-icon-3.webp';
import icons4 from '../img/benefit-icon-4.webp';
import icons5 from '../img/benefit-icon-5.webp';
import icons6 from '../img/benefit-icon-6.webp';

function Steps() {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-12 text-center my-5'>
            <h4 className='step'>3 STEP SCIENTIFIC TREATMENT PROCESS</h4>
          </div>
        </div>

        {/* desktop view */}

        <div className='des'>
          <div className='col-9 col-lg-9 step-back'>

            <div className='row'>
              <div className='col-lg-6'>
                <img src={image1} style={{ width: '100%', height: '100%' }} />
              </div>
              <div className='col-lg-6 mt-2'>
                <h4 className='step-heading'>SCIENTIFIC HOMEOPATHY TREATMENT</h4>
                <ul class="pl-0 list-inline text-secondary mb-0">
                  <li class="d-flex align-items-center">
                    <img src={icons1} width="53" height="53" class="mr-2" />
                    <span> Reduces Itching, Redness, Scaling</span></li>
                  <li class="d-flex align-items-center">
                    <img src={icons2} width="53" height="53" class="mr-2" />
                    <span> Natural | Safe | Effective</span></li>
                  <li class="d-flex align-items-center">
                    <img src={icons3} width="53" height="53" class="mr-2" />
                    <span> Gives Long Lasting Results</span></li>
                  <li class="d-flex align-items-center">
                    <img src={icons4} width="53" height="53" class="mr-2" />
                    <span> 100% Safe</span></li>
                  <li class="d-flex align-items-center">
                    <img src={icons5} width="53" height="53" class="mr-2" />
                    <span> No side effects</span></li>
                  <li class="d-flex align-items-center">
                    <img src={icons6} width="53" height="53" class="mr-2" />
                    <span> Treats the root cause</span></li>
                </ul>
              </div>
            </div>

            <div className='row'>
              <div className='col-lg-6 mt-2'>
                <h4 className='step-heading'>SCIENTIFIC HOMEOPATHY TREATMENT</h4>
                <ul class="pl-0 list-inline text-secondary mb-0">
                  <li class="d-flex align-items-center">
                    <img src={icons1} width="53" height="53" class="mr-2" />
                    <span> Reduces Itching, Redness, Scaling</span></li>
                  <li class="d-flex align-items-center">
                    <img src={icons2} width="53" height="53" class="mr-2" />
                    <span> Natural | Safe | Effective</span></li>
                  <li class="d-flex align-items-center">
                    <img src={icons3} width="53" height="53" class="mr-2" />
                    <span> Gives Long Lasting Results</span></li>
                  <li class="d-flex align-items-center">
                    <img src={icons4} width="53" height="53" class="mr-2" />
                    <span> 100% Safe</span></li>
                  <li class="d-flex align-items-center">
                    <img src={icons5} width="53" height="53" class="mr-2" />
                    <span> No side effects</span></li>
                  <li class="d-flex align-items-center">
                    <img src={icons6} width="53" height="53" class="mr-2" />
                    <span> Treats the root cause</span></li>
                </ul>
              </div>
              <div className='row col-lg-6'>
                <img src={image2} style={{ width: '100%', height: '100%' }} />
              </div>
            </div>


            <div className='row'>
              <div className='col-lg-6'>
                <img src={image3} style={{ width: '100%', height: '100%' }} />
              </div>
              <div className='row col-lg-6 mt-2'>
                <h4 className='step-heading'>SCIENTIFIC HOMEOPATHY TREATMENT</h4>
                <ul class="pl-0 list-inline text-secondary mb-0">
                  <li class="d-flex align-items-center">
                    <img src={icons1} width="53" height="53" class="mr-2" />
                    <span> Reduces Itching, Redness, Scaling</span></li>
                  <li class="d-flex align-items-center">
                    <img src={icons2} width="53" height="53" class="mr-2" />
                    <span> Natural | Safe | Effective</span></li>
                  <li class="d-flex align-items-center">
                    <img src={icons3} width="53" height="53" class="mr-2" />
                    <span> Gives Long Lasting Results</span></li>
                  <li class="d-flex align-items-center">
                    <img src={icons4} width="53" height="53" class="mr-2" />
                    <span> 100% Safe</span></li>
                  <li class="d-flex align-items-center">
                    <img src={icons5} width="53" height="53" class="mr-2" />
                    <span> No side effects</span></li>
                  <li class="d-flex align-items-center">
                    <img src={icons6} width="53" height="53" class="mr-2" />
                    <span> Treats the root cause</span></li>
                </ul>
              </div>
            </div>

          </div>
        </div>

        {/* mobile view */}

      <div className='mob'>
      <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="10000">
              <img src={image1} class="d-block w-100" alt="..." />
            </div>
            
            <div class="carousel-item" data-bs-interval="2000">
              <img src={image2} class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src={image3} class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

      </div>


      </div>
    </>
  )
}

export default Steps