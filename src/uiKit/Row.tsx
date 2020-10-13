import styled from 'styled-components';

interface RowProps {
  margin?: string
}

const Row = styled.div<RowProps>`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  ${({ margin }) => (margin ? `margin: ${margin};` : '')}
`;

export default Row;
