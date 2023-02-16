import React from 'react'

function Home() {
  return (
    <div>
        <div className="slider-area position-relative">
        <div className="slider-active">
          {/* Single Slider */}
          <div className="single-slider slider-height d-flex align-items-center">
            <div className="container">
              <div className="row">
                <div className="col-xl-9 col-lg-9 col-md-10">
                  <div className="hero__caption">
                    {/* <span data-animation="fadeInLeft" data-delay="0.1s">Hi This is  Zacson</span> */}
                    <h1 data-animation="fadeInLeft" data-delay="0.4s">Tracking Studio</h1>
                    {/* <a href="courses.html" className="border-btn hero-btn" data-animation="fadeInLeft" data-delay="0.8s">My Courses</a> */}
                  </div>
                </div>
              </div>
            </div>          
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home