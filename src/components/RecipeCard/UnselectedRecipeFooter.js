import Flex from "../../../../../Desktop/originaloreganoFrontEndCodeChallenge/src/components/Flex";
import Box from "../../../../../Desktop/originaloreganoFrontEndCodeChallenge/src/components/Box";
import Text from "../../../../../Desktop/originaloreganoFrontEndCodeChallenge/src/components/Text";
import Button from "../../../../../Desktop/originaloreganoFrontEndCodeChallenge/src/components/Button";

import PropTypes from "prop-types";
import React from "react";

import { parseRawPrice } from "../../../../../Desktop/originaloreganoFrontEndCodeChallenge/src/helpers/price";

const UnselectedRecipeFooter = ({
  handleAddRecipe,
  maxRecipesSelected,
  minRecipesSelected,
  price,
  recipeId,
 }) => (
  <Flex padding="xs">
    <Box flex="50%" alignSelf="center">
      { price ? <Text color="primary_600">+{ parseRawPrice(price) }</Text> : null}
    </Box>

    <Button
      disabled={ maxRecipesSelected }
      onClick={() => handleAddRecipe(recipeId)}
      padding="0"
      variant="secondary"
      width="100%">
        { minRecipesSelected ? 'Add extra meal' : 'Add' }
    </Button>
    <Box flex="50%">
    </Box>
  </Flex>
);

UnselectedRecipeFooter.propTypes = {
  handleAddRecipe: PropTypes.func.isRequired,
  maxRecipesSelected: PropTypes.bool.isRequired,
  minRecipesSelected: PropTypes.bool.isRequired,
  price: PropTypes.number.isRequired,
  recipeId: PropTypes.string.isRequired,
};

export default UnselectedRecipeFooter;
