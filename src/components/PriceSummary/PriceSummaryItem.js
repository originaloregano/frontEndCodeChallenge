import Flex from "../../../../../Desktop/originaloreganoFrontEndCodeChallenge/src/components/Flex";
import Text from "../../../../../Desktop/originaloreganoFrontEndCodeChallenge/src/components/Text";

import { parseRawPrice } from "../../../../../Desktop/originaloreganoFrontEndCodeChallenge/src/helpers/price";

import React from "react";
import PropTypes from "prop-types";

const PriceSummaryItem = ({ slug, title, price }) => {
  const titleTotal = title === 'Total';
  const shippingTotal = title === 'Shipping';
  const boldTitle = titleTotal ? 'bold' : '';
  const dataTestId = () => {
    if(shippingTotal) {
      return 'Shipping';
    } else if(titleTotal) {
      return 'Total';
    } else {
      return `summary-${slug}`;
    }
  };
  return (
    <Flex
      backgroundColor="white"
      flexDirection="row"
      justifyContent="space-between"
      paddingBottom="8px"
      lineHeight="md">
      <Text data-testid={dataTestId} fontSize="md" fontWeight={boldTitle}>
        { title }
      </Text>
      <Text data-testid={dataTestId} fontSize="md" fontWeight={boldTitle}>
        { parseRawPrice(price) }
      </Text>
    </Flex>
  );
};

PriceSummaryItem.propTypes = {
  price: PropTypes.number,
  title: PropTypes.string,
  slug: PropTypes.string,
};

export default PriceSummaryItem;
