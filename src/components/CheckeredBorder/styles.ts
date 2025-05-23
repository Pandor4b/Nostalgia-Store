import styled from 'styled-components';

export const StyledCheckeredBorder = styled.div<{ $position?: 'top' | 'bottom' }>`
  height: 20px;
  width: 100%;
  background-image: linear-gradient(45deg, #000 25%, transparent 25%),
    linear-gradient(-45deg, #000 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #000 75%),
    linear-gradient(-45deg, transparent 75%, #000 75%);
  background-size: 20px 20px;
  background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
  position: absolute;
  left: 0;
  ${(props) => props.$position === 'bottom' ? 'top: auto; bottom: 0;' : 'top: 0;'}
  z-index: 10;
`;
