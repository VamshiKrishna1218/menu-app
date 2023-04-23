export const foodItems = [
  {
    id: 1,
    name: "Hamburger",
    image: "path/to/hamburger.jpg",
    description: "A classic hamburger with cheese, lettuce, and tomato.",
    price: 9.99,
    subItems: [
      {
        id: 1,
        name: "Extra Cheese",
        image: "path/to/extra-cheese.jpg",
        description: "Add extra cheese to your hamburger.",
        price: 1.99,
      },
      {
        id: 2,
        name: "Bacon",
        image: "path/to/bacon.jpg",
        description: "Add crispy bacon to your hamburger.",
        price: 2.99,
      },
    ],
  },
  {
    id: 2,
    name: "Pizza",
    image: "path/to/pizza.jpg",
    description: "A delicious pizza with your choice of toppings.",
    price: 12.99,
    subItems: [
      {
        id: 1,
        name: "Extra Cheese",
        image: "path/to/extra-cheese.jpg",
        description: "Add extra cheese to your pizza.",
        price: 1.99,
      },
      {
        id: 2,
        name: "Pepperoni",
        image: "path/to/pepperoni.jpg",
        description: "Add spicy pepperoni to your pizza.",
        price: 2.99,
      },
    ],
  },
];
