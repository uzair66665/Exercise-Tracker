import React from 'react'

function Contact() {
  return (
    <div>
        <section className="services-area black-bg">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8">
              <div className="single-services mb-40 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
                <div className="features-icon">
                  <img src="assets/img/icon/icon1.svg" alt="" />
                </div>
                <div className="features-caption">
                  <h3>Location</h3>
                  <p>Al-Hafeez Executive, Lahore </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
              <div className="single-services mb-40 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
                <div className="features-icon">
                  <img src="assets/img/icon/icon2.svg" alt="" />
                </div>
                <div className="features-caption">
                  <h3>Phone</h3>
                  <p>(+92) 300-1133777</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
              <div className="single-services mb-40 wow fadeInUp" data-wow-duration="2s" data-wow-delay=".4s">
                <div className="features-icon">
                  <img src="assets/img/icon/icon3.svg" alt="" />
                </div>
                <div className="features-caption">
                  <h3>Email</h3>
                  <p>trackingstudion1@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact