import styled from 'styled-components';
import Box from './Box';

const Flex = styled(Box)``;

Flex.propTypes = Box.propTypes;

Flex.defaultProps = {
  display: 'flex',
};

export default Flex;
