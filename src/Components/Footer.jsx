import React from "react";

function Footer() {
  return (
    <>
      <div className="bg-dark text-light mt-5 py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h4 className="text-info">FARM MART</h4>
              <p>Farm Mart is more than just an online store.</p>
            </div>

            <div className="col-md-3">
              <h4 className="text-info">CATEGORIES</h4>
              <ul className="list-unstyled">
                <li><a href="../Services" className="text-decoration-none text-light">Livestock</a></li>
                <li><a href="../Services" className="text-decoration-none text-light">Poultry</a></li>
                <li><a href="../Services" className="text-decoration-none text-light">Fruits and Vegetables</a></li>
                <li><a href="../Services" className="text-decoration-none text-light">Grains</a></li>
                <li><a href="../Services" className="text-decoration-none text-light">Tubers</a></li>
                <li><a href="../Services" className="text-decoration-none text-light">Oil Palm</a></li>
                <li><a href="../Services" className="text-decoration-none text-light">Seafoods</a></li>
              </ul>
            </div>

            <div className="col-md-3">
              <h4 className="text-info">ENQUIRY</h4>
              <ul className="list-unstyled">
                <li>
                  <div className="mb-3">
                    <a href="tel:09137029216" className='text-decoration-none text-light'>
                    <span className="me-3">
                    <i className="fa fa-phone"></i>
                    </span>
                    +2348065435321
                    </a>
                  </div>
                </li>

                <li>
                  <div className="mt-3">
                    <a href="https://wa.me/+2348065435321" className='text-decoration-none text-light'>
                    <span className="me-3">
                    <i className="fab fa-whatsapp"></i>
                    </span>
                    +2348065435321
                    </a>
                  </div>
                </li>

                <li>
                  <div className="mt-3">
                    <a href="mailto:info@crystalshipment.com" className='text-decoration-none text-light'>
                    <span className="me-3">
                    <i className="fa fa-envelope"></i>
                    </span>
                    info@farmmart.com
                    </a>
                  </div>
                </li>
              </ul>
              

              
            </div>

            <div className="col-md-3">
              <h4 className="text-info">OUR NEWSLETTER</h4>
              <p>Sign up to our newsletter for tips, latest news, and special offers.</p>
              <input type="text" className="form-control" placeholder="Enter your email here"/>
              <button className="btn btn-danger mt-3">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
