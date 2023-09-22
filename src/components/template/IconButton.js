import styled, {css} from 'styled-components';

const IconButton = styled.button`
  ${css({cursor: 'pointer',
  padding: 'md',
  backgroundColor: 'transparent',
  color: 'inherit',
  border: 'none',
  display: 'block',
  '&:hover': {
  backgroundColor: 'transparent',
  color: 'inherit',
  },
  '& > svg': {
    display: 'flex',
  },
  })}
  &:disabled {
    cursor: default;
    opacity: 0.5;
  }
`;

export default IconButton;
