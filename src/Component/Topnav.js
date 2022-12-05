import React from 'react'
import Form from './Form'

function Topnav() {
  return (
    <>
      <section>
        <div className='row col-lg-12 col-md-12 col-sm-12'>
          <nav class="navbar navbar-light topnav">
            <div class="container">
              <a href="tel:9167318321" class="navbar-brand my-1 h1 text-white"><h3>CALL NOW 091673 18321</h3> </a>
            </div>
          </nav>
          <Form />
        </div>
      </section>
    </>
  )
}

export default Topnav