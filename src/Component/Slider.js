import React, { useEffect } from 'react'
import ba1 from '../img/bef_aft1.webp';
import ba2 from '../img/bef_aft2.webp';
import ba3 from '../img/bef_aft3.webp';
import ba4 from '../img/bef_aft4.webp';


function Slider() {

  useEffect(()=>{
    
    let items = document.querySelectorAll('.carousel .carousel-item')
    items.forEach((el) => {
      const minPerSlide = 3
      let next = el.nextElementSibling;
      for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
            next = items[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
  })
  
  },[])

  return (    
    <>
    
    <section className='slider'>
      <div className=''>
        <div className='col-12 col-lg-12 col-md-12 col-sm-12 my-5 text-center'>
        <h3 className='step'>
        OUR SKIN TREATMENT RESULTS
        </h3>

        </div>
      </div>
    </section>
    <div class="container text-center my-5">
		<div class="row mx-auto my-auto justify-content-center">
			<div id="recipeCarousel" class="carousel slide" data-bs-ride="carousel">
				<div class="carousel-inner" role="listbox">
					<div class="carousel-item active">
						<div class="col-md-4">
							<div class="card">
								<div class="card-img">
									<img src={ba1} class="img-fluid" />
								</div>
							</div>
						</div>
					</div>
					<div class="carousel-item">
						<div class="col-md-4">
							<div class="card">
								<div class="card-img">
									<img src={ba2} class="img-fluid" />
								</div>
								{/* <div class="card-img-overlay">Slide 2</div> */}
							</div>
						</div>
					</div>
					<div class="carousel-item">
						<div class="col-md-4">
							<div class="card">
								<div class="card-img">
									<img src={ba3} class="img-fluid" />
								</div>
							</div>
						</div>
					</div>
					<div class="carousel-item">
						<div class="col-md-4">
							<div class="card">
								<div class="card-img">
									<img src={ba4} class="img-fluid" />
								</div>
							</div>
						</div>
					</div>
					<div class="carousel-item">
						<div class="col-md-4">
							<div class="card">
								<div class="card-img">
									<img src={ba1} class="img-fluid" />
								</div>
							</div>
						</div>
					</div>
					<div class="carousel-item">
						<div class="col-md-4">
							<div class="card">
								<div class="card-img">
									<img src={ba1} class="img-fluid" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<a class="carousel-control-prev bg-transparent w-aut" href="#recipeCarousel" role="button" data-bs-slide="prev">
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
				</a>
				<a class="carousel-control-next bg-transparent w-aut" href="#recipeCarousel" role="button" data-bs-slide="next">
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
				</a>
			</div>
		</div>		
	</div>


    </>
  )
}

export default Slider