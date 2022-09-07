import React from 'react'

function Contact() {
  return (
    <div className="container text-center my-5" id="contact">
        <h1>Contact Us</h1>
        <div className="row gy-5 text-secondary">
            <div className="col-sm-12 col-md-6">
                <h3>Contact Info</h3>
                <h6>
                    <i class="bi bi-envelope mx-1"></i>
                    <span>
                        Email: mestonbngosa@gmail.com
                    </span>
                </h6>
                <h6>
                    <i class="bi bi-telephone mx-1"></i>
                    <span>
                        Cell: 097357145
                    </span>
                </h6>
                <h6>
                    <i class="bi bi-telephone mx-1"></i>
                    <span>
                        Cell: 0977411146
                    </span>
                </h6>
                                
            </div>
            <div className="col-sm-12 col-md-6">
                <h3>
                    <i class="bi bi-geo-alt-fill mx-1"></i>
                    <span>Location</span>
                </h3>
                <h6>
                    We are located in Lusaka, Zambia.
                </h6>
            </div>
        </div>
    </div>
  )
}

export default Contact