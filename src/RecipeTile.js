import React, { Component } from "react";
import "./RecipeTile.css";

const RecipeTile = ({ recipe }) => {
  return (
    recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif)$/) !== null && (
      <div className="recipeTile">
        <img className="recipeTile__img" src={recipe["recipe"]["image"]} />
        <p className="recipeTile__name">{recipe["recipe"]["label"]}</p>
      </div>
    )
  );
};

export default RecipeTile;
