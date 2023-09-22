import React, { useRef, useState } from 'react';

import IconButton from '../../../../../Desktop/originaloreganoFrontEndCodeChallenge/src/components/IconButton';
import Tooltip, { TooltipContainer } from '../../../../../Desktop/originaloreganoFrontEndCodeChallenge/src/components/Tooltip';

import IconInfoCircle from '../../../../../Desktop/originaloreganoFrontEndCodeChallenge/src/components/icons/IconInfoCircle';
import PriceSummary from './PriceSummary';
import useOnClickOutside from '../../../../../Desktop/originaloreganoFrontEndCodeChallenge/src/hooks/useOnClickOutside';

const PriceInfo = ({ recipeProps }) => {
  const ref = useRef();
  const [isTooltipOpen, setTooltipOpen] = useState(false);
  useOnClickOutside(ref, () => setTooltipOpen(false));

  return (
    <TooltipContainer ref={ref}>
      <IconButton onClick={() => setTooltipOpen(!isTooltipOpen)}>
        <IconInfoCircle size="20" />
      </IconButton>
      {isTooltipOpen ? (
        <Tooltip>
          <PriceSummary recipeProps={recipeProps} />
        </Tooltip>
      ) : null }
    </TooltipContainer>
  );
};

export default PriceInfo;
