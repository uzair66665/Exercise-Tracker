import React from 'react'
import { Link } from 'react-router-dom'
function NavBar() {
  return (
    
    <div>
        <header>
        {/* Header Start */}
        <div className="header-area header-transparent">
          <div className="main-header header-sticky">
            <div className="container-fluid">
              <div className="menu-wrapper d-flex align-items-center justify-content-center">
                {/* Logo */}
                {/* Main-menu */}
                <div className="main-menu f-right d-none d-lg-block justify-content-center">
                  <nav>
                    <ul id="navigation">
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/add">Add Activity</Link></li>
                      <li><Link to="/show">Show Activity</Link></li>
                    </ul>
                  </nav>
                </div>          
                {/* Header-btn */}
                {/* Mobile Menu */}
                <div className="col-12">
                  <div className="mobile_menu d-block d-lg-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Header End */}
      </header>
    </div>
  )
}

export default NavBar