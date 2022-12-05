import React from 'react'
import image1 from '../img/Psoriasis.webp';
import image2 from '../img/ECZEMA.webp';
import image3 from '../img/Vitiligo.webp';

function Skin() {
  return (
    <>
    <section>
    <div className='container'>
        <div className='row'>
          <div className='col-12 text-center my-5'>
            <h4 className='skin'>SKIN CONDITIONS WE TREAT</h4>
          </div>
        </div>


        <div className='des mb-3'>
          <div class="d-flex align-items-start">
            <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
              <button class="nav-link" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">PSORIASIS</button>
              <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">ECZEMA</button>
              <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">VITILIGO (LEUCODERMA)</button>
              <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">WARTS</button>
              <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">LICHEN PLANUS</button>
              <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">FUNGAL INFECTION</button>
              <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">ACNE</button>
            </div>
            <div class="tab-content" id="v-pills-tabContent">
              <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">

                <div class="containerr">
                  <img src={image1} alt="Snow" className='img-fluid w-100' />
                  <div class="centered"><h4>PSORIASIS </h4> Psoriasis is chronic skin condition characterized by inflamed red raised
                    area that develops silvery scales. Psoriasis can get worst in winter. Trauma and stress aggravate the
                    condition. Psoriasis has social implications and can lead to withdrawal from society, depression, anxiety .Homeopathic medicines
                    being holistic aims not only of relieving symptoms but also reintegration life with normalcy.</div>
                </div>

              </div>
              <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                <div class="containerr">
                  <img src={image2} alt="Snow" className='img-fluid w-100' />
                  <div class="centered"><h4>12PSORIASIS </h4> Psoriasis is chronic skin condition characterized by inflamed red raised
                    area that develops silvery scales. Psoriasis can get worst in winter. Trauma and stress aggravate the
                    condition. Psoriasis has social implications and can lead to withdrawal from society, depression, anxiety .Homeopathic medicines
                    being holistic aims not only of relieving symptoms but also reintegration life with normalcy.</div>
                </div>
              </div>
              <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                <div class="containerr">
                  <img src={image3} alt="Snow" className='img-fluid w-100' />
                  <div class="centered"><h4>12PSORIASIS </h4> Psoriasis is chronic skin condition characterized by inflamed red raised
                    area that develops silvery scales. Psoriasis can get worst in winter. Trauma and stress aggravate the
                    condition. Psoriasis has social implications and can lead to withdrawal from society, depression, anxiety .Homeopathic medicines
                    being holistic aims not only of relieving symptoms but also reintegration life with normalcy.</div>
                </div>
              </div>
              <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div>
            </div>
          </div>
        </div>

        <div className='mob'>
          <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">PSORIASIS</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">ECZEMA</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="pills-messages-tab" data-bs-toggle="pill" data-bs-target="#pills-messages" type="button" role="tab" aria-controls="pills-messages" aria-selected="false">VITILIG</button>
            </li>
          </ul>
          <div class="tab-content" id="pills-tabContent">
            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
            <div class="containerr">
                  <img src={image1} alt="Snow" className='img-fluid w-100' />
                  <div class="centered"><h4>PSORIASIS </h4> Psoriasis is chronic skin condition characterized by inflamed red raised
                    area that develops silvery scales. Psoriasis can get worst in winter. Trauma and stress aggravate the
                    condition. Psoriasis has social implications and can lead to withdrawal from society, depression, anxiety .Homeopathic medicines
                    being holistic aims not only of relieving symptoms but also reintegration life with normalcy.</div>
                </div>
            </div>
            <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
            <div class="containerr">
                  <img src={image3} alt="Snow" className='img-fluid w-100' />
                  <div class="centered"><h4>PSORIASIS </h4> Psoriasis is chronic skin condition characterized by inflamed red raised
                    area that develops silvery scales. Psoriasis can get worst in winter. Trauma and stress aggravate the
                    condition. Psoriasis has social implications and can lead to withdrawal from society, depression, anxiety .Homeopathic medicines
                    being holistic aims not only of relieving symptoms but also reintegration life with normalcy.</div>
                </div>
            </div>
            <div class="tab-pane fade" id="pills-messages" role="tabpanel" aria-labelledby="pills-messages-tab">
            <div class="containerr">
                  <img src={image2} alt="Snow" className='img-fluid w-100' />
                  <div class="centered"><h4>PSORIASIS </h4> Psoriasis is chronic skin condition characterized by inflamed red raised
                    area that develops silvery scales. Psoriasis can get worst in winter. Trauma and stress aggravate the
                    condition. Psoriasis has social implications and can lead to withdrawal from society, depression, anxiety .Homeopathic medicines
                    being holistic aims not only of relieving symptoms but also reintegration life with normalcy.</div>
                </div>

            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-12 text-center mb-5'>
            <button type="button" class="btn btn-outline-secondary text-center"> CONSULT NOW </button>

          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Skin