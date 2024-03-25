import React from 'react'
import pic1 from "../assets/Images/Livestock.jpg"
import pic2 from "../assets/Images/pigs.jpg";
import pic3 from "../assets/Images/Goats.jpg";
import pic4 from "../assets/Images/Grasscutter.jpeg";
import pic5 from "../assets/Images/yams.jpg";
import pic6 from "../assets/Images/Potatoe.PNG";
import pic7 from "../assets/Images/Cocoyam.jpg";
import pic8 from "../assets/Images/Carrot.jpg";
import pic9 from "../assets/Images/Fruits.jpg";
import pic10 from "../assets/Images/Palm.jpg";
import pic11 from "../assets/Images/Vegetables.jpg";
import pic12 from "../assets/Images/Fresh Milk.jpg";
import pic13 from "../assets/Images/Cassava.jpeg";
import pic14 from "../assets/Images/Rice.jpg";
import pic15 from "../assets/Images/Beans.jpg";
import pic16 from "../assets/Images/Green Peas.jpg";
import pic17 from "../assets/Images/Fishes.jpeg";
import pic18 from "../assets/Images/Lobster.jpeg";
import pic19 from "../assets/Images/Shrimps.jpg";
import pic20 from "../assets/Images/Oyster.jpg";

function Card() {
    const cardData = [
        {image: pic1,title:'Cow', content:'Click here for more details....'},
        {image: pic2,title:'Pig', content:'Click here for more details....'},
        {image: pic3,title:'Goat', content:'Click here for more details....'},
        {image: pic4,title:'Grasscutter', content:'Click here for more details....'},
        {image: pic5,title:'Yam', content:'Click here for more details....'},
        {image: pic6,title:'Potatoe', content:'Click here for more details....'},
        {image: pic7,title:'Cocoyam', content:'Click here for more details....'},
        {image: pic8,title:'Carrot', content:'Click here for more details....'},
        {image: pic9,title:'Fruits', content:'Click here for more details....'},
        {image: pic10,title:'Palm Oil', content:'Click here for more details....'},
        {image: pic11,title:'Vegetables', content:'Click here for more details....'},
        {image: pic12,title:'Fresh Milk', content:'Click here for more details....'},
        {image: pic13,title:'Cassava', content:'Click here for more details....'},
        {image: pic14,title:'Rice', content:'Click here for more details....'},
        {image: pic15,title:'Beans', content:'Click here for more details....'},
        {image: pic16,title:'Green Peas', content:'Click here for more details....'},
        {image: pic17,title:'Fish', content:'Click here for more details....'},
        {image: pic18,title:'Lobster', content:'Click here for more details....'},
        {image: pic19,title:'Shrimps', content:'Click here for more details....'},
        {image: pic20,title:'Oyster', content:'Click here for more details....'},
        
    ]
  return (
    <>
    <div className="row">
    {cardData.map((card, index) => (
         <div className="col-md-3 mb-4" data-aos="fade-up">
         <div className="card">
           <img src={card.image} className="card-img-top" alt="..." style={{height: "180px"}}/>
           <div className="card-body">
             <h4 className="card-title text-info">{card.title}</h4>
             <p className="card-text">{card.content}<a href="../Services" className="text-danger text-decoration-none">Read More</a>
             </p>
           </div>  
         </div>
       </div>
    ))}
         
            
        </div>
    </>
  )
}

export default Card