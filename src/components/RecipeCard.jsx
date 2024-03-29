import React from "react";
const RecipeCard = ({ recipe }) => {
  const { idMeal, strMeal, strCategory, strMealThumb } = recipe;

  return (
    <div className="card">
      <img src={strMealThumb} alt={strMeal} className="card-image" />
      <div className="card-body">
        <span className="category">{strCategory}</span>
        <h3>{strMeal}</h3>
        <a
          href={
            "https://www.themealdb.com/api/json/v1/1/search.php?s=" + idMeal
          }
          target="_blank"
        >
          Instructions
        </a>
      </div>
    </div>
  );
};

export default RecipeCard;
