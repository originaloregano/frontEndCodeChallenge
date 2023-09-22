import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RecipeCard from "../modules/RecipeCard/RecipeCard";
import {describe, expect, it} from "@jest/globals";

const mockRecipe = {
  extraCharge: 2.99,
  handleAddRecipe: jest.fn(),
  handleRemoveRecipe: jest.fn(),
  headline: 'Delicious Recipe',
  id: 'recipe123',
  image: 'recipe-image-url.jpg',
  maxRecipesSelected: false,
  minRecipesSelected: false,
  name: 'Recipe Name',
  selected: 0,
  selectionLimit: 2,
  slug: 'recipe-slug',
  yields: 4,
};

describe('RecipeCard', () => {
  it('renders the recipe name and headline', () => {
    render(<RecipeCard {...mockRecipe} />);
    expect(screen.getByText('Recipe Name')).toBeInTheDocument();
    expect(screen.getByText('Delicious Recipe')).toBeInTheDocument();
  });

  it('renders the image', () => {
    render(<RecipeCard {...mockRecipe} />);
    const image = screen.getByAltText('recipe-slug');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'recipe-image-url.jpg');
  });

  it('renders the extra charge when selected', () => {
      render(<RecipeCard {...mockRecipe} selected={1}/>);
      expect(screen.queryByText('$2.99')).not.toBeInTheDocument();
  });

  it('calls handleAddRecipe when Add button is clicked', () => {
    render(<RecipeCard {...mockRecipe} />);
    const addButton = screen.getByText('Add');
    fireEvent.click(addButton);
    expect(mockRecipe.handleAddRecipe).toHaveBeenCalledWith('recipe123');
  });

  it('calls handleRemoveRecipe when Remove button is clicked', () => {
    render(<RecipeCard {...mockRecipe} selected={1} />);
    const removeButton = screen.getByTestId('Remove Button');
    fireEvent.click(removeButton);
    expect(mockRecipe.handleRemoveRecipe).toHaveBeenCalledWith('recipe123')
  });
});
