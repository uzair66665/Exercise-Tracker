import React from 'react'

function Footer() {
  return (
    <div>
        <footer>
        {/*? Footer Start*/}
        <div className="footer-area black-bg">
          <div className="container">
            {/* Footer Bottom */}
            <div className="footer-bottom">
              <div className="row d-flex align-items-center">
                <div className="col-lg-12">
                  <div className="footer-copy-right text-center">
                    <p>{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                      Copyright © All rights reserved | Tracking Studio <i className="fa fa-heart" aria-hidden="true" />
                      {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer End*/}
      </footer>

    </div>
  )
}

export default Footer