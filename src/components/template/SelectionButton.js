import styled, {css} from "styled-components";

const SelectionButton = styled.button`
  ${css({
  outline: 'none',
  color: 'white',
  padding: 'sm',
  cursor: 'pointer',
  backgroundColor: 'primary_600',
  border: 'none',
  ':hover:enabled': {
    backgroundColor: 'primary_700',
  },
  ':active:enabled': {
    backgroundColor: 'primary_800',
  },
})}
  &:disabled {
    cursor: default;
    opacity: 0.5;
  }
`;
export default SelectionButton;
