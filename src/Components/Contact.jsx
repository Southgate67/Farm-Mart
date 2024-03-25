import React from 'react'
import Form from './Form'

function Contact() {
  return (
    <>
    <div className="bg-dark">
        <div className="text-center pt-3 text-light">
            <h2 className="p-5">Sell With Us</h2>
        </div>
    </div>

    <div className="container">
        <p className='p-5'>At <span className="fw-bold">Farm Mart</span>, we are committed to promoting smallholder farmers to scale their business and earn high returns. We also ensure help the farmers to package their products according to industry standard and global best practice, ensuring that the end-users get the desired value for their money. <br /><br /> We have the expetise and technological know-how that will get your farm products to your target market faster. With our state-of-the-art digital facilities and experienced professionals, we offer optimum service that will launch you to a wider market coverage. <br /> <br />We are ready to work with you from your first step to achieving your desired goals. Be part of <span className="fw-bold">Farm Mart</span> and reach more clients beyond your imagination.</p>
    </div>

    <div className="bg-info mt-5" style={{minHeight:'200px', padding:'20px 0'}}>
        <div className="container pt-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-8">
            <h3>Get Your Products to Your Target Market Faster</h3>
            <p><span className="fw-bold">Farm Mart</span> is more than just an online store.</p>
          </div>
          <div className="col-md-4 text-md-end test-sm-start">
            <a href="../Services" className="btn btn-danger">View Our Products</a>
          </div>
        </div>
        </div>
      </div>

    <div className="container">
        <div className="row">
          <div className="col-md-4 mt-5" data-aos="fade-up">
            <p className="fw-bold">
              {" "}
              Call / Chat us or Send us an email.
            </p>
            <div className="">
              <div className="mb-3">
                <a href="tel:09137029216" className='text-decoration-none text-dark'>
                  <span className="me-3">
                    <i className="fa fa-phone"></i>
                  </span>
                  +234 9137029216
                </a>
              </div>
              <div className="mt-3">
                <a href="https://wa.me/+2348065435321" className='text-decoration-none text-dark'>
                  <span className="me-3">
                  <i className="fab fa-whatsapp"></i>
                  </span>
                  +2348065435321
                </a>
              </div>
              <div className="mt-3">
                <a href="mailto:info@crystalshipment.com" className='text-decoration-none text-dark'>
                  <span className="me-3">
                    <i className="fa fa-envelope"></i>
                  </span>
                  info@crystalshipment.com
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-8 mt-5" data-aos="fade-up">
          <Form/>
          </div>
        </div>
      </div>

      

    </>
  )
}

export default Contact