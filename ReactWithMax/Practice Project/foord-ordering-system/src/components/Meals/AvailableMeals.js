import React from "react";
import  "./AvailableMeals.css";
import Card from "../UI/Card";
import MealItem from "./MealItems";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Chat Papdi",
    description: "Finest Chat",
    price: 10.99,
  },
  {
    id: "m2",
    name: "Samosa Chat",
    description: "An Indian Classic Snack!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Sweets Any | per kg",
    description: "Sweetest Sweets Ever",
    price: 12.99,
  },
  {
    id: "m5",
    name: "Thali (Punjabi, Marathi, Gujrati, All Indian)",
    description: "Delecius Indian curries...",
    price: 18.99,
  },
  {
    id: "m6",
    name: "South Indian Special",
    description: "Taste of south... in your mouth",
    price: 22.50,
  },
  {
    id: "m7",
    name: "Indo-Chinese ",
    description: "Noodles, Momos",
    price: 10.99,
  },
  {
    id: "m8",
    name: "Biriyani, Khichdi, Kebaab(veg)",
    description: "Delecius Indian curries...",
    price: 18.99,
  },
];
const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
    id={meal.id} // this is new!
    key={meal.id}
    name={meal.name}
    description={meal.description}
    price={meal.price}
/>
  ));



  return (
    <section className="meals">
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;