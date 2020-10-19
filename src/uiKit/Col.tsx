import styled from 'styled-components';

interface ColProps {
  align?: string;
  width?: string;
  margin?: string;
}

const Col = styled('div')<ColProps>`
  display: flex;
  flex: 1 0 ${({ width }) => width || '100%'};
  flex-flow: column nowrap;
  max-width: 100%;
  position: relative;
  min-height: 1px;
  margin: ${({ margin }) => margin || 'initial'};
  text-align: ${({ align }) => align || 'left'};
`;

export default Col;
