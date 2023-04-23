import React, { useState } from 'react';
import img1 from "./images/burger.png";
import img2 from "./images/biryani.png";

const fooditems = [
  {
    id: 1,
    name: "chicken biryani",
    image: "path/to/hamburger.jpg",
    description: "A classic hamburger with cheese, lettuce, and tomato.",
    price: 9.99,
    img:img1,
    subItems: [
      {
        id: 1,
        name: "Extra Cheese",
        image: "path/to/extra-cheese.jpg",
        description: "Add extra cheese to your hamburger.",
        price: 1.99,
        img:img2,
      },
      {
        id: 2,
        name: "Bacon",
        image: "path/to/bacon.jpg",
        description: "Add crispy bacon to your hamburger.",
        price: 2.99,
        img:img2,
      },
    ],
  },
  {
    id: 2,
    name: "Pizza",
    image: "path/to/pizza.jpg",
    description: "A delicious pizza with your choice of toppings.",
    price: 12.99,
    img:img1,
    subItems: [
      {
        id: 1,
        name: "Extra Cheese",
        image: "path/to/extra-cheese.jpg",
        description: "Add extra cheese to your pizza.",
        price: 1.99,
        img:img2,
      },
      {
        id: 2,
        name: "Pepperoni",
        image: "path/to/pepperoni.jpg",
        description: "Add spicy pepperoni to your pizza.",
        price: 2.99,
        img:img2,
      },
    ],
  },{
    id: 3,
    name: "chakodi",
    image: "path/to/hamburger.jpg",
    description: "A classic hamburger with cheese, lettuce, and tomato.",
    price: 9.99,
    img:img1,
    subItems: [
      {
        id: 1,
        name: "Extra Cheese",
        image: "path/to/extra-cheese.jpg",
        description: "Add extra cheese to your hamburger.",
        price: 1.99,
        img:img1,
      },
      {
        id: 2,
        name: "Bacon",
        image: "path/to/bacon.jpg",
        description: "Add crispy bacon to your hamburger.",
        price: 2.99,
        img:img1,
      },
    ],
  },
  
];

const FoodItems = ({ foodItems }) => {
  const [selectedFoodItem, setSelectedFoodItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedFoodItem(item);
  };

  return (
    <div className="food-items">
      {selectedFoodItem ? (
        <div className="sub-items">
          {selectedFoodItem.subItems.map(subItem => (
            <div key={subItem.id} className="food-item">
              <img src={subItem.img} alt={subItem.name} />
              <div className="food-item-details">
                <h3>{subItem.name}</h3>
                <p>{subItem.description}</p>
                <div className="food-item-price">${subItem.price.toFixed(2)}</div>
              </div>
            </div>
          ))}
          <button  type="button" class="btn btn-primary"   onClick={() => setSelectedFoodItem(null)}>Go Back </button>
        </div>
      ) : (
        fooditems.map(item => (
          <div key={item.id} className="food-item" onClick={() => handleItemClick(item)}>
            <img src={item.img} alt={item.name} />
            <div className="food-item-details">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <div className="food-item-price">${item.price.toFixed(2)}</div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};



 export default FoodItems;



