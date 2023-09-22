import React from 'react';
import PropTypes from 'prop-types';

import UnselectedRecipeFooter from '../../../../../Desktop/originaloreganoFrontEndCodeChallenge/src/modules/RecipeCard/UnselectedRecipeFooter';
import SelectedRecipeFooter from '../../../../../Desktop/originaloreganoFrontEndCodeChallenge/src/modules/RecipeCard/SelectedRecipeFooter';

import Box from '../../../../../Desktop/originaloreganoFrontEndCodeChallenge/src/components/Box';
import Text from '../../../../../Desktop/originaloreganoFrontEndCodeChallenge/src/components/Text';

const RecipeCard = ({
   extraCharge,
   handleAddRecipe,
   handleRemoveRecipe,
   headline,
   id,
   image,
   maxRecipesSelected,
   minRecipesSelected,
   name,
   selected,
   selectionLimit,
   slug,
   yields,
 }) => (
  <Box
    borderWidth={ selected ? 'md' : null }
    borderStyle={ selected ? 'solid' : null }
    borderColor={ selected ? 'primary_600' : null }
    m={ selected ? '-2px' : null }
    borderRadius="md"
    boxShadow="lg">
    <Box borderRadius="2px 2px 0px 0px" paddingBottom="56.25%" overflow="hidden" height="0">
      <img src={ image } alt={ slug } width="100%" />
    </Box>

    <Box padding="xs" height="120px">
      <Text fontWeight="bold" fontFamily="primary" fontSize="md">
        { name }
      </Text>
      <Text fontWeight="regular" fontFamily="secondary" fontSize="sm">
        { headline }
      </Text>
    </Box>
    { selected ? (
      <SelectedRecipeFooter
        handleAddRecipe={handleAddRecipe}
        handleRemoveRecipe={handleRemoveRecipe}
        maxRecipesSelected={maxRecipesSelected}
        recipeId={id}
        selected={selected}
        selectionLimit={Number(selectionLimit)}
        yields={yields}
      />
    ) : (
      <UnselectedRecipeFooter
        handleAddRecipe={handleAddRecipe}
        handleRemoveRecipe={handleRemoveRecipe}
        maxRecipesSelected={maxRecipesSelected}
        minRecipesSelected={minRecipesSelected}
        price={extraCharge && extraCharge}
        recipeId={id}
        selected={selected}
      />
    )}
  </Box>
);

RecipeCard.propTypes = {
  extraCharge: PropTypes.number.isRequired,
  handleAddRecipe: PropTypes.func.isRequired,
  handleRemoveRecipe: PropTypes.func.isRequired,
  headline: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  maxRecipesSelected: PropTypes.bool.isRequired,
  minRecipesSelected: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  selected: PropTypes.number.isRequired,
  selectionLimit: PropTypes.number,
  slug: PropTypes.string.isRequired,
  yields: PropTypes.number.isRequired,
};

export default RecipeCard;
