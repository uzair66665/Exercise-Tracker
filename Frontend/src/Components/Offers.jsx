import React from 'react'
import { Navigate } from "react-router-dom";
import { Link } from 'react-router-dom';
const handleclick=(opt)=>{
    
}
function Offers() {
  return (
    <div>
        <section className="traning-categories black-bg">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="single-topic text-center mb-30">
                <div className="topic-img">
                  <img src="assets/img/gallery/cat1.png" alt="" />
                  <div className="topic-content-box">
                    <div className="topic-content">
                      <h3>Add Your Activities</h3>
                      <p>You’ll look at graphs and charts in Task One, how to approach the task and <br /> the language needed for a successful answer.</p>
                      <Link to="/add" className="border-btn" >Go</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="single-topic text-center mb-30">
                <div className="topic-img">
                  <img src="assets/img/gallery/cat2.png" alt="" />
                  <div className="topic-content-box">
                    <div className="topic-content">
                      <h3>Check Your Activities</h3>
                      <p>You’ll look at graphs and charts in Task One, how to approach the task and <br /> the language needed for a successful answer.</p>
                      <Link to="/show" className="border-btn" >Go</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /////////////////////////////////////////////////////
      ///////////////////////////////////////////////////// */}
        <section className="team-area fix black-bg">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section-tittle text-center mb-55 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
                <h2>What We Offer</h2>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-cat text-center mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
                <div className="cat-icon">
                  <img className='imgs' src="assets/img/gallery/r1.jpg"  alt="" />
                </div>
                <div className="cat-cap">
                  <h5><a href="services.html">Running</a></h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-cat text-center mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
                <div className="cat-icon">
                  <img className='imgs' src="assets/img/gallery/s1.jpg" alt="" />
                </div>
                <div className="cat-cap">
                  <h5><a href="services.html">Swimming</a></h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-cat text-center mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".6s">
                <div className="cat-icon">
                  <img className='imgs' src="assets/img/gallery/w1.jpg" alt="" />
                </div>
                <div className="cat-cap">
                  <h5><a href="services.html">Walking</a></h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-cat text-center mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".6s">
                <div className="cat-icon">
                  <img className='imgs' src="assets/img/gallery/c1.jpg" alt="" />
                </div>
                <div className="cat-cap">
                  <h5><a href="services.html">Cycling</a></h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-cat text-center mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".6s">
                <div className="cat-icon">
                  <img className='imgs' src="assets/img/gallery/h1.jpg" alt="" />
                </div>
                <div className="cat-cap">
                  <h5><a href="services.html">Hiking</a></h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-cat text-center mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".6s">
                <div className="cat-icon">
                  <img className='imgs' src="assets/img/gallery/y1.jpg" alt="" />
                </div>
                <div className="cat-cap">
                  <h5><a href="services.html">Yoga</a></h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Offers