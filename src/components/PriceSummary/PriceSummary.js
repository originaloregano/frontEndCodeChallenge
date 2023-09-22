import React from 'react';
import PriceSummaryItem from "./PriceSummaryItem";
import Text from "../../../../../Desktop/originaloreganoFrontEndCodeChallenge/src/components/Text";
import Box from "../../../../../Desktop/originaloreganoFrontEndCodeChallenge/src/components/Box";
import RecipesInCartSummary from "./RecipesInCartSummary.js";
import PropTypes from "prop-types";
const PriceSummary = ({ recipeProps, slug }) => {
  const { shippingPrice, totalPrice, summary, baseRecipePrice } = recipeProps;

  return (
    <Box Text width={['290px', '450px']} padding="md">
      <RecipesInCartSummary summary={summary} baseRecipePrice={baseRecipePrice} />
      <PriceSummaryItem
        slug={slug}
        fontWeight="regular"
        title="Shipping"
        price={shippingPrice}
      />
      <hr borderTopWidth="sm"
          borderTopColor="neutral_400"
          borderTopStyle="solid"
      />
      <Text paddingTop="8px">
        <PriceSummaryItem
          slug={slug}
          fontWeight="bold"
          title="Total"
          price={totalPrice}
        />
      </Text>
    </Box>
  );
};

PriceSummary.propTypes = {
  recipeProps: PropTypes.object.isRequired,
  slug: PropTypes.string,
};

export default PriceSummary;
