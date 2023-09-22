import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, test, expect } from "@jest/globals";
import PriceSummary from "../modules/PriceSummary/PriceSummary";

const mockRecipeProps = {
  shippingPrice: 1298,
  totalPrice: 3096,
  summary: [
    {
      id: '5f4d4a7e62fb0224951e7ec4',
      name: 'Chicken Sausage & Spinach Ravioli',
      slug: 'chicken-sausage-spinach-ravioli',
      headline: 'with Tomato & Lemon',
      selected: 1,
      selectionLimit: 1,
      extraCharge: 0,
      yields: 2,
    }
  ],
  baseRecipePrice: 1798,
};

describe('PriceSummary', () => {
  test('renders the Shipping price', () => {
    render(<PriceSummary recipeProps={mockRecipeProps} slug="chicken-sausage-spinach-ravioli" />);
    const shippingPrice = screen.getByText('Shipping');
    const shippingValue = screen.getByText('$12.98');

    expect(shippingPrice).toBeInTheDocument();
    expect(shippingValue).toBeInTheDocument();
  });

  test('renders the Total price', () => {
    render(<PriceSummary recipeProps={mockRecipeProps} slug="chicken-sausage-spinach-ravioli" />);
    const totalPrice = screen.getByText('Total');
    const totalValue = screen.getByText('$30.96');

    expect(totalPrice).toBeInTheDocument();
    expect(totalValue).toBeInTheDocument();
  });
});
