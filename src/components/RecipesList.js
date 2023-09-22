import React, { useEffect, useState } from 'react';

import { Row, Col } from '../../../../Desktop/originaloreganoFrontEndCodeChallenge/src/components/Grid';
import Flex from '../../../../Desktop/originaloreganoFrontEndCodeChallenge/src/components/Flex';
import Box from '../../../../Desktop/originaloreganoFrontEndCodeChallenge/src/components/Box';

import RecipeCard from '../../../../Desktop/originaloreganoFrontEndCodeChallenge/src/modules/RecipeCard/RecipeCard';
import PriceInfo from '../../../../Desktop/originaloreganoFrontEndCodeChallenge/src/modules/PriceSummary/PriceInfo';
import useFetchRecipes from '../../../../Desktop/originaloreganoFrontEndCodeChallenge/src/hooks/useFetchRecipes';
import { parseRawPrice } from "../../../../Desktop/originaloreganoFrontEndCodeChallenge/src/helpers/price";

const RecipesList = () => {
  const [recipes, setRecipes] = useState([]);
  const [maxRecipesSelected, setMaxSelectedRecipes] = useState(false);
  const [minRecipesSelected, setMinSelectedRecipes] = useState(false);
  const [selectedRecipeCounter, setSelectedRecipeCounter] = useState(0);

  const { data, loading} = useFetchRecipes();
  const MINIMUM_ALLOWED_RECIPES = data.min;
  const MAXIMUM_ALLOWED_RECIPES = data.max;
  const BASE_RECIPE_PRICE =  data.baseRecipePrice;
  const SHIPPING_PRICE = data.shippingPrice;

  useEffect(() => {
    const { recipes: fetchRecipes } = data;
    if (fetchRecipes) {
      const recipeKeys = Object.keys(fetchRecipes);
      const selectedRecipesAmount =
        recipeKeys.reduce((recipe, index) => recipe + fetchRecipes[index].selected,
        0
      );

      setRecipes(fetchRecipes);
      setSelectedRecipeCounter(selectedRecipesAmount);
    }
  }, [setRecipes, data]);

  useEffect(() => {
    if (selectedRecipeCounter >= MINIMUM_ALLOWED_RECIPES) {
      setMinSelectedRecipes(true);
    }

    if (selectedRecipeCounter === MAXIMUM_ALLOWED_RECIPES) {
      setMaxSelectedRecipes(true);
    }

    return () => {
      setMinSelectedRecipes(false);
      setMaxSelectedRecipes(false);
    };
  }, [selectedRecipeCounter, MINIMUM_ALLOWED_RECIPES, MAXIMUM_ALLOWED_RECIPES]);

  const handleAddRecipe = (recipeId, selectionLimit=null, selected=0, maxRecipesSelected) => {
    const maxRecipesAllowed = maxRecipesSelected || (selectionLimit === selected);
    if (maxRecipesAllowed) {
      return;
    };

    const plusOneRecipe = recipes.map((recipe, index, array) => {
      if (recipe.id === recipeId) {
        return {
          ...array[index],
          selected: array[index].selected + 1,
        };
      }
      return recipe;
    });
    setRecipes(plusOneRecipe);
    setSelectedRecipeCounter(selectedRecipeCounter + 1);
  };

  const handleRemoveRecipe = (recipeId) => {
    const minusOneRecipe = recipes.map((recipe, index, array) => {
      if (recipe.id === recipeId) {
        return {
          ...array[index],
          selected: array[index].selected - 1,
        };
      }
      return recipe;
    });
    setRecipes(minusOneRecipe);
    setSelectedRecipeCounter(selectedRecipeCounter - 1);
  };

  const calculateCartTotal = () => {
    const basePlusShipping = BASE_RECIPE_PRICE + SHIPPING_PRICE;
    const subtotalRecipes = BASE_RECIPE_PRICE * selectedRecipeCounter;

    const hasExtraCharge = recipes.filter((recipe) => {
      return recipe.extraCharge > 0;
    });

    if (hasExtraCharge.length === 0) {
      return 0;
    }

    const totalExtraCharge =
    hasExtraCharge.map((recipe) => {
        return {
          ...recipe,
          extraCharge: Number(recipe.extraCharge) * Number(recipe.selected),
        };
      })
      .reduce((r, i) => {
        return r + i.extraCharge;
      }, 0);


    return subtotalRecipes + basePlusShipping + totalExtraCharge;
  };

  const getSelectedRecipes = () => {
    return recipes.filter((recipe) => recipe.selected > 0);
  };
  const summary = getSelectedRecipes();
  const cartTotal = calculateCartTotal();
  const recipeProps = {
    baseRecipePrice: BASE_RECIPE_PRICE,
    shippingPrice: SHIPPING_PRICE,
    summary: summary,
    totalPrice: cartTotal,
  };

  const formattedTotalCart = parseRawPrice(recipeProps.totalPrice);

  if (loading) {
    return null;
  }

  return (
    <>
      <Row>
        <Col sm={6}>
          <h3>{ data.headline }</h3>
        </Col>
        <Col sm={6}>
          <Flex alignItems="center" justifyContent="flex-end">
            <Box textAlign="right" mr="xs">
              <h3>{ formattedTotalCart }</h3>
            </Box>
            <PriceInfo recipeProps={recipeProps} />
          </Flex>
        </Col>
      </Row>

      <Row>
        { recipes.map((recipe) => (
          <Col sm={12} md={6} xl={4} key={recipe.id}>
            <Box mb="md">
              <RecipeCard
                {...recipe}
                handleAddRecipe={handleAddRecipe}
                handleRemoveRecipe={handleRemoveRecipe}
                maxRecipesSelected={maxRecipesSelected}
                minRecipesSelected={minRecipesSelected}
              />
            </Box>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default RecipesList;
