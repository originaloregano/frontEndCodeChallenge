import React from 'react';
import { render, screen } from '@testing-library/react';
import Recipes from "../modules/Recipes";
import {describe, expect, it} from "@jest/globals";

describe('Recipes', () => {
  it('should render a title and description', () => {
    render(<Recipes />);
    const titleElement = screen.getByText('Select Your Recipes');
    const descriptionElement = screen.getByText(
      'Choose from an ever-changing mix of meat, fish, and health-conscious offerings.'
    );

    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });
});
