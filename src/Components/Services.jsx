import React from "react";
import Livestock from "../assets/Images/Livestock.jpg"
import Poultry from "../assets/Images/Poultry.jpg"
import Fruits from "../assets/Images/Fruits.jpg"
import Grains from "../assets/Images/Grains.jpg"
import Tubers from "../assets/Images/Tubers.jpg"
import Palm from "../assets/Images/Palm.jpg"
import Seafoods1 from "../assets/Images/Seafoods1.jpg"
// import Card1 from "./Card1";
// import Service from "../assets/Images/Service.png"

function Services() {
  return (
    <>
      <div className="bg-dark">
        <div className="text-center text-light">
          <h2 className="pt-5 pb-3">Products</h2>
          <div className="container">
          <p className="pb-3">Farm Mart is home to over 60,000 smallholder farmers. We remain the best digital marketplace for fresh primary farm products for your domestic and industrial needs, offering higher returns to our partner smallholder farmers and added value to buyers.</p>
          </div>
        </div>
      </div>

      <div className="container pt-5">
        <div className="text-center" data-aos="fade-up">
          <h3>Explore Our Farm Products</h3>
          <div className="bg-red mx-auto"></div>
          <p className="pt-3">
            Farm Mart offers different farm products ranging from livesock, tubers, vegetables. fruits, palm oil, grains, etc.
          </p>
        </div>

        <div className="row pt-4">
          <div className="col-md-4" data-aos="fade-up">
            <img
              src={Livestock}
              className="img-fluid rounded" style={{width: "350px"}}
              alt=""
            />
          </div>

          <div className="col-md-8 pt-3" data-aos="fade-up">
            <h4 className="text-danger">LIVESTOCK</h4>
            <p>
              We have live cows, goats, sheep, pigs, antelopes, deer, rehindeer, porcupine, impala, grascutters, etc. Animal meats are also available to meet your demand.
            </p>
            <a href="" className="btn btn-danger">
              Learn More
            </a>
          </div>
        </div>

        <div className="row pt-4">
          <div className="col-md-4" data-aos="fade-up">
            <img
              src={Poultry}
              className="img-fluid rounded" style={{width: "350px"}}
              alt=""
            />
          </div>

          <div className="col-md-8 pt-3" data-aos="fade-up">
            <h4 className="text-danger">POULTRY</h4>
            <p>
              Get your live birds, including chicken, geese, quail, turkey, peacock, ostrich, duck, etc.  Poultry meats are also available for your delight.
            </p>
            <a href="" className="btn btn-danger">
              Learn More
            </a>
          </div>
        </div>

        <div className="row pt-4">
          <div className="col-md-4" data-aos="fade-up">
            <img
              src={Fruits}
              className="img-fluid rounded" style={{width: "350px"}}
              alt=""
            />
          </div>

          <div className="col-md-8 pt-3" data-aos="fade-up">
            <h4 className="text-danger">FRUITS AND VEGETABLES</h4>
            <p>
              We have abudance of vegetables regardless of season. Seasonal fruits and vegetables are available always, because our partner farmers have relibale ways to grow crops all-year-round. You can get diffrent types of indigenous and non-indigenous fruits and vegetables.    
            </p>
            <a href="" className="btn btn-danger">
              Learn More
            </a>
          </div>
        </div>

        <div className="row pt-4">
          <div className="col-md-4" data-aos="fade-up">
            <img
              src={Grains}
              className="img-fluid rounded" style={{width: "350px"}}
              alt=""
            />
          </div>

          <div className="col-md-8 pt-3" data-aos="fade-up">
            <h4 className="text-danger">GRAINS</h4>
            <p>
              We have multi-grain farmers that ensure all-year-round availability of different grains to meet your home and industrial needs.
            </p>
            <a href="" className="btn btn-danger">
              Learn More
            </a>
          </div>
        </div>

        <div className="row pt-4">
          <div className="col-md-4" data-aos="fade-up">
            <img
              src={Tubers}
              className="img-fluid rounded" style={{width: "350px"}}
              alt=""
            />
          </div>

          <div className="col-md-8 pt-3" data-aos="fade-up">
            <h4 className="text-danger">TUBERS</h4>
            <p>
              Our crop offerings includes diffent types of tubers, including yam, cocoyam, carrot, potatoes etc.
            </p>
            <a href="" className="btn btn-danger">
              Learn More
            </a>
          </div>
        </div>

        <div className="row pt-4">
          <div className="col-md-4" data-aos="fade-up">
            <img
              src={Palm}
              className="img-fluid rounded" style={{width: "350px"}}
              alt=""
            />
          </div>

          <div className="col-md-8 pt-3" data-aos="fade-up">
            <h4 className="text-danger">OIL PALM</h4>
            <p>
              Get fresh and affordable palm oil for you domestic and industrial needs. We also have fresh palm wine everyday of the week, and other palm products.
            </p>
            <a href="" className="btn btn-danger">
              Learn More
            </a>
          </div>
        </div>

        <div className="row pt-4">
          <div className="col-md-4" data-aos="fade-up">
            <img
              src={Seafoods1}
              className="img-fluid rounded" style={{width: "350px"}}
              alt=""
            />
          </div>

          <div className="col-md-8 pt-3" data-aos="fade-up">
            <h4 className="text-danger">SEA FOODS</h4>
            <p>
              We also have abundancce of snails, mushrooms, shrimps, periwinkles, fishes, crayfish, crabs, and more.
            </p>
            <a href="" className="btn btn-danger">
              Learn More
            </a>
          </div>
        </div>

      </div>

      {/* <div className="container mt-3">
        <Card1/>
        <div className="row">
          <div className="col-md-6" data-aos="fade-up">
            <img src={Service} alt="" className="img-fluid"/>
          </div>
          <div className="col-md-6" data-aos="fade-up">
            <h2>THE COMPLETE SOLUTION</h2>
            <div className="bg-red"></div>
            <p className="mt-3">Crystal Shipment is renowned for our top-notch Warehousing services which are safe, affordable, and reliable. We take pride in delivering the best services that outcompete our rivals. We assure you of getting adequate value for your money. We always ensure that our customers are delighted.</p>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Services;
