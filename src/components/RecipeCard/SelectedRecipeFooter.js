import IconMinusCircle from "../../../../../Desktop/originaloreganoFrontEndCodeChallenge/src/components/icons/IconMinusCircle";
import IconPlusCircle from "../../../../../Desktop/originaloreganoFrontEndCodeChallenge/src/components/icons/IconPlusCircle";

import PropTypes from "prop-types";
import React from "react";

import Flex from "../../../../../Desktop/originaloreganoFrontEndCodeChallenge/src/components/Flex";
import Box from "../../../../../Desktop/originaloreganoFrontEndCodeChallenge/src/components/Box";
import Text from "../../../../../Desktop/originaloreganoFrontEndCodeChallenge/src/components/Text";
import IconButton from "../../../../../Desktop/originaloreganoFrontEndCodeChallenge/src/components/IconButton";

const SelectedRecipeFooter = ({
  handleAddRecipe,
  handleRemoveRecipe,
  maxRecipesSelected,
  recipeId,
  selected,
  selectionLimit,
  yields,
}) => (
  <Flex backgroundColor="primary_600" justifyContent="space-between" alignItems="center">
    <IconButton
      onClick={() => handleRemoveRecipe(recipeId)} title="Remove" data-testid="Remove Button">
      <IconMinusCircle />
    </IconButton>
    <Box color="white">
      <Text textAlign="center" fontWeight="bold" fontFamily="secondary" fontSize="md">
        { selected } in your box
      </Text>
      <Text textAlign="center" fontFamily="secondary" fontSize="sm">
        ({ selected * yields } servings)
      </Text>
    </Box>
    <IconButton
      onClick={() => handleAddRecipe(recipeId, selected, selectionLimit)}
      title="Add"
      data-testid="Add Button"
      disabled={ maxRecipesSelected || (selectionLimit === selected) }>
      <IconPlusCircle />
    </IconButton>
  </Flex>
);

SelectedRecipeFooter.propTypes = {
  handleAddRecipe: PropTypes.func.isRequired,
  handleRemoveRecipe: PropTypes.func.isRequired,
  maxRecipesSelected: PropTypes.bool.isRequired,
  recipeId: PropTypes.string.isRequired,
  selected: PropTypes.number.isRequired,
  selectionLimit: PropTypes.number.isRequired,
  yields: PropTypes.number.isRequired,
};

export default SelectedRecipeFooter;
