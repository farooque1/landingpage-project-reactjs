import React from 'react'
import logo from '../img/desktop_logo.webp';

function Form() {
  return (
    <>
      <section>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 col-md-4 col-sm-12'>
            </div>
            <div className='col-lg-4 col-md-4 col-sm-12'>
            </div>

            <div className='col-lg-4 col-md-4 col-sm-12'>
              <div className='position-absolute'>
                <form className='cardss text-center'>
                  <div className='logo'>
                    <img src={logo} width="150" />
                  </div>
                  <h4 className='form-text my-3'>CONSULT A <br />
                    SKIN DOCTOR NOW</h4>
                  <div class="mb-3">
                    <input type="email" class="form-control" placeholder='Enter your Name' />
                  </div>
                  <div class="mb-3">
                    <input type="password" class="form-control" placeholder='Enter your Phone Number' />
                  </div>
                  <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">I understand and accept the <a href='/'>terms and conditions*.</a> </label>
                  </div>
                  <button type="submit" class="book-btn btn btn-rounded ">Book Now</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Form