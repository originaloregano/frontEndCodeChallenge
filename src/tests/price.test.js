import React from 'react';
import { parseRawPrice } from '.././helpers/price';
import {expect, test, describe} from '@jest/globals';

describe('parseRawPrice', () => {
  test('should return the raw price with the currency symbol and converted to decimals', () => {
    const price = 1000;
    const parsedPrice = parseRawPrice(price);

    expect(parsedPrice).toBe('$10.00');
  });
});
