import React from 'react';
import {describe, expect, it} from "@jest/globals";
import RecipesList, { calculateCartTotal, handleRemoveRecipe, handleAddRecipe } from "../modules/RecipesList";

jest.mock('../hooks/useFetchRecipes', () => ({
  __esModule: true,
  default: jest.fn(() => ({ data: {}, loading: false })),
}));

describe('functions in RecipeList component', () => {
    const calculateCartTotalMock= jest.fn();
    const handleRemoveRecipeMock= jest.fn();
    const handleAddRecipeMock = jest.fn();
  describe('calculateCartTotal', () => {
    const BASE_RECIPE_PRICE = 1798;
    const SHIPPING_PRICE = 1298;
    const selectedRecipeCounter = 3;
    it('calculates the cart total correctly with no extra charges', () => {
      const recipes = [
        { selected: 1, extraCharge: 0 },
        { selected: 2, extraCharge: 0 },
      ];

      const total = calculateCartTotalMock(BASE_RECIPE_PRICE, SHIPPING_PRICE, selectedRecipeCounter, recipes);

      expect(total).toEqual(1298 + 1798);
    });

    it('calculates the cart total correctly with extra charges', () => {
      const recipes = [
        { selected: 1, extraCharge: 2 },
        { selected: 2, extraCharge: 1 },
      ];

      const total = calculateCartTotalMock(BASE_RECIPE_PRICE, SHIPPING_PRICE, selectedRecipeCounter, recipes);

      expect(total).toEqual(1798 + 1298 + (1 * 2) + (2 * 1));
    });

    it('returns 0 when no recipes are selected', () => {
      const selectedRecipeCounter = 0;
      const recipes = [];

      const total = calculateCartTotalMock(BASE_RECIPE_PRICE, SHIPPING_PRICE, selectedRecipeCounter, recipes);

      expect(total).toEqual(0);
    });
  });

  describe('handleRemoveRecipe', () => {
    it('removes one selected recipe correctly', () => {
      const recipeIdToRemove = 'recipe123';
      const recipes = [
        { id: 'recipe123', selected: 3 },
        { id: 'recipe456', selected: 2 },
      ];

      const updatedRecipes = handleRemoveRecipeMock(recipeIdToRemove);

      // Check if the selected recipe count decreased by 1
      const removedRecipe = updatedRecipes.find((recipe) => recipe.id === recipeIdToRemove);
      expect(removedRecipe.selected).toEqual(2); // selected count reduced by 1
    });

    it('handles removing a recipe that is not in the list', () => {
      const recipeIdToRemove = 'recipe789'; // Recipe not in list
      const recipes = [
        { id: 'recipe123', selected: 3 },
        { id: 'recipe456', selected: 2 },
      ];

      const updatedRecipes = handleRemoveRecipeMock(recipeIdToRemove);

      // Check list remains unchanged
      expect(updatedRecipes).toEqual(recipes);
    });

    it('handles removing a recipe when the list is empty', () => {
      const recipeIdToRemove = 'recipe123';
      const recipes = [];

      const updatedRecipes = handleRemoveRecipeMock(recipeIdToRemove);

      // Check list remains empty
      expect(updatedRecipes).toEqual([]);
    });
  });

  describe('handleAddRecipe', () => {
    it('adds one selected recipe correctly', () => {
      const recipeIdToAdd = 'recipe123';
      const recipes = [
        { id: 'recipe123', selected: 3 },
        { id: 'recipe456', selected: 2 },
      ];

      const updatedRecipes = handleAddRecipeMock(recipeIdToAdd);

      // Check selected recipe count for recipeId increases by 1
      const addedRecipe = updatedRecipes.find((recipe) => recipe.id === recipeIdToAdd);
      expect(addedRecipe.selected).toEqual(4); // Expect the selected count to increase by 1
    });

    it('handles adding a recipe that is not in the list', () => {
      const recipeIdToAdd = 'recipe789'; // not in the list
      const recipes = [
        { id: 'recipe123', selected: 3 },
        { id: 'recipe456', selected: 2 },
      ];

      const updatedRecipes = handleAddRecipeMock(recipeIdToAdd);

      // Check list remains unchanged
      expect(updatedRecipes).toEqual(recipes);
    });

    it('handles adding a recipe when the list is empty', () => {
      const recipeIdToAdd = 'recipe123';
      const recipes = [];

      const updatedRecipes = handleAddRecipeMock(recipeIdToAdd);

      // Check list remains empty
      expect(updatedRecipes).toEqual([]);
    });
  });
});
