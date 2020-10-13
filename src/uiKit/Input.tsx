import React, { FC } from 'react'; // we need this to make JSX compile
import styled from 'styled-components';

type MainProps = {
  type: string,
  placeholder?: string,
}

const input: FC<MainProps> = ({ type, ...props }) => (
  <input
    type={type}
    {...props}
  />
);

const Input = styled(input)`
  background: #777;
  border: none;
  border-radius: 3px;
  margin: 0.5em 0;
  width: 100%;
  height: 2em;
  padding: 0.25em 1em;
  opacity: 0.8;
  ::placeholder {
    color: #333;
  }
`;

export default Input;
