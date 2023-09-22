import PriceSummaryItem from "./PriceSummaryItem";

import React from "react";
import PropTypes from "prop-types";

const RecipesInCartSummary = ({ summary, baseRecipePrice }) => {
  const inCartSummary = summary && summary.map((recipe) => {
    const { extraCharge, id, name, selected, slug } = recipe;
    const totalRecipePrice = Number(extraCharge) === 0 ?
      (baseRecipePrice * selected) + extraCharge : baseRecipePrice * selected;
    const recipeTitle = selected > 1 ? name + ` x ${selected}` : name;

    return(
      <PriceSummaryItem key={id} title={recipeTitle} slug={slug} price={totalRecipePrice} />
    );
  });

  return inCartSummary;
};

RecipesInCartSummary.propTypes = {
  summary: PropTypes.array,
  baseRecipePrice: PropTypes.number,
};
export default RecipesInCartSummary;
