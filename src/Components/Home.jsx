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
        <div className="container text-center pt-5">
          <h1 className="text-warning" style={{marginTop: "60px"}}>
            Farm Mart is more than just an online store.
          </h1>
          <p className="text-info pt-3" style={{fontSize: "24px"}}>We connect smahllholder farmers to a wider market to meet their target audience, increase their sales revenue, and earn higher returns.</p>
          {/* <a href="" className="btn btn-danger text-light">
            Track Goods Here
          </a> */}
        </div>
      </div>

      <div className="container pt-5">
        <div className="text-center" data-aos="fade-up">
          <h2>Welcome to Farm Mart</h2>
          <div className="bg-red mx-auto"></div>
          <p className="pt-3">
          Farm Mart is home to over 400 different fresh farm products from our over 60,000 smallholder partner farmers. We remain the best digital marketplace for fresh primary farm products for your domestic and industrial needs, offering higher returns to our partner smallholder farmers and added value to buyers.
          </p>
        </div>
      </div>

      <div className="container pt-5">
        <div className=" text-center" data-aos="fade-up">
          <h3 className="text-danger pb-1">FARM MART</h3>
          <h5 className="pb-3">Explore our Fresh Farm Products for Your Domestic and Industrial Needs.</h5>
        </div>

        <Card/>

        <div className="text-center" data-aos="fade-up">
          <a href="" className="btn btn-danger">Load More</a>
        </div>
      </div>

      <div className="bg-dark mt-5" style={{minHeight:'200px', padding:'20px 0'}}>
        <div className="container pt-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-8 text-light">
            <h3><span className="fw-bold">Farm Mart</span> your one-stop store for fresh farm products.</h3>
            <p>We pride ourself as the best digital food store connecting farmers to end-users.</p>
          </div>
          <div className="col-md-4 text-md-end test-sm-start">
            <a href="../Services" className="btn btn-danger">Place your order</a>
          </div>
        </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6" data-aos="fade-up">
            <h5>WHY CHOOSE US?</h5>
            <div className="d-flex mt-3">
              <div className="flex-grow-1 ms-2">
                <img src={Icon1} className="" alt=""/>
              </div>
              <div className="flex-grow-1 ms-2">
                <h5 className="ms-3">Reliable Safe and Healthy Fresh Farm Products</h5>
                <p className="ms-3">With our network of farmers, buyers are assured of steady supply of farm products all-year-round.</p>
              </div>
            </div>

            <div className="d-flex mt-3">
              <div className="flex-grow-1 ms-2">
                <img src={Icon2} className="" alt=""/>
              </div>
              <div className="flex-grow-1 ms-2">
                <h5 className="ms-3">Mobile Shipment Tracking</h5>
                <p className="ms-3">We offer intelligent concepts and solutions to road, rail, and complex global transport.</p>
              </div>
            </div>

            <div className="d-flex mt-3">
              <div className="flex-grow-1 ms-2">
                <img src={Icon3} className="" alt=""/>
              </div>
              <div className="flex-grow-1 ms-2">
                <h5 className="ms-3">Safe and Careful Handling of Goods</h5>
                <p className="ms-3">Cargoes are efficiently transported along each stage in the global supply network.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6" data-aos="fade-up">
            <Form/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
