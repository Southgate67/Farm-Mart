import React from "react";
import Footer1 from '../assets/Images/footer1.png'
import Footer2 from '../assets/Images/footer2.png'
import Footer3 from '../assets/Images/footer3.png'
import Footer4 from '../assets/Images/footer4.png'
function Footer() {
  return (
    <>
      <div className="bg-dark text-light mt-5 py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h4 className="text-warning">CRYSTAL SHIPMENT</h4>
              <p>Crystal Shipment is the world's leading shipment and transport
                service provider. We are present in over 20 countries were we
                have offices, partners, and agents.</p>
            </div>

            <div className="col-md-3">
              <h4 className="text-warning">Quick Links</h4>
              <ul className="list-unstyled">
                <li><a href="" className="text-decoration-none text-light">All Services</a></li>
                <li><a href="" className="text-decoration-none text-light">Land Freight</a></li>
                <li><a href="" className="text-decoration-none text-light">Sea Freight</a></li>
                <li><a href="" className="text-decoration-none text-light">Air Freight</a></li>
              </ul>
            </div>

            <div className="col-md-3">
              <h4 className="text-warning">PHOTO GALLERY</h4>
              <div className="d-flex mt-3">
                <div className="flex-grow-1 me-2">
                  <img src={Footer1} className="img-fluid rounded" alt="" />
                </div>

                <div className="flex-grow-1 ms-2">
                  <img src={Footer2} className="img-fluid rounded" alt="" />
                </div>
              </div>

              <div className="d-flex mt-3">
                <div className="flex-grow-1 me-2">
                  <img src={Footer3} className="img-fluid rounded" alt="" />
                </div>

                <div className="flex-grow-1 ms-2">
                  <img src={Footer4} className="img-fluid rounded" alt="" />
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <h4 className="text-warning">OUR NEWSLETTER</h4>
              <p>Sign up to our newsletter for tips, latest news, and specialoffers.</p>
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
