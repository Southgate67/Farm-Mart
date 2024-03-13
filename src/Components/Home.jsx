import React from "react";
import About from "../assets/Images/about.jpg"
import Card from "./Card"
import Form from "./Form";
import Icon1 from "../assets/Images/icon1.png"
import Icon2 from "../assets/Images/icon2.png"
import Icon3 from "../assets/Images/icon3.png"

function Home() {
  return (
    <>
      <div className="hero">
        <div className="container text-light text-center pt-5">
          <h1 className="pt-5" style={{marginTop: "60px"}}>
            Easy and Quick Cargo Shipping Service
          </h1>
          <p style={{fontSize: "24px"}}>Book low cost sea freight shipping serices. Get an instant quote.</p>
          <a href="" className="btn btn-danger text-light">
            Track Goods Here
          </a>
        </div>
      </div>

      <div className="container pt-5">
        <div className="text-center" data-aos="fade-up">
          <h2>Welcome to Crystal Shipment</h2>
          <div className="bg-red mx-auto"></div>
          <p className="pt-3">
            Crystal Shipment is more than logistics. We can also optimize your
            packaging, manage your materials sourcing, and so much more.
          </p>
        </div>

        <div className="row">
          <div className="col-md-6" data-aos="fade-up">
            <img
              src={About}
              className="img-fluid rounded"
              alt=""
            />
          </div>

          <div className="col-md-6" data-aos="fade-up">
            <p className="text-danger"> TRANSPORTATION COMPANY</p>
            <h2>We Provide Full Range Logistics Solution</h2>
            <p>
              We strongly believe that pursuing all of these goals is in our
              interest and in the interest of all of our stakeholders,
              customers, employees, investors, and the planet as a whole, We add
              value to cargoes with our excellent services.
            </p>
            <a href="" className="btn btn-danger">
              Learn More
            </a>
          </div>
        </div>
      </div>

      <div className="container pt-5">
        <div className=" text-center" data-aos="fade-up">
          <p className="text-danger">TYPES OF LOGISTICS</p>
          <h2>Covering All Logistics Field</h2>
        </div>

        <Card/>

        <div className="text-center" data-aos="fade-up">
          <a href="" className="btn btn-danger">Load More</a>
        </div>
      </div>

      <div className="bg-warning mt-5" style={{minHeight:'200px', padding:'20px 0'}}>
        <div className="container pt-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-8">
            <h2>Delivering your world one package at a time</h2>
            <p>Crystal Shipment is more than just logistics.</p>
          </div>
          <div className="col-md-4 text-md-end test-sm-start">
            <a href="" className="btn btn-danger">Request a quote</a>
          </div>
        </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6" data-aos="fade-up">
            <p>WHY CHOOSE US?</p>
            <div className="d-flex mt-3">
              <div className="flex-grow-1 ms-2">
                <img src={Icon1} className="" alt=""/>
              </div>
              <div className="flex-grow-1 ms-2">
                <h5 className="ms-3">Global Supply Chain Solutions</h5>
                <p className="ms-3">Efficiently unleash cross-media information without cross-media value</p>
              </div>
            </div>

            <div className="d-flex mt-3">
              <div className="flex-grow-1 ms-2">
                <img src={Icon2} className="" alt=""/>
              </div>
              <div className="flex-grow-1 ms-2">
                <h5 className="ms-3">Mobile Shipment Tracking</h5>
                <p className="ms-3">We ofer intelligent concepts and solutions to road, rail, and complext global transport needs.</p>
              </div>
            </div>

            <div className="d-flex mt-3">
              <div className="flex-grow-1 ms-2">
                <img src={Icon3} className="" alt=""/>
              </div>
              <div className="flex-grow-1 ms-2">
                <h5 className="ms-3">Safe and careful handling of goods and packages</h5>
                <p className="ms-3">Cargoes are efficiently transported along each stage in the global supply network.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6" data-aos="fade-up">
            <p>REQUEST A QUOTE</p>
            <Form/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
