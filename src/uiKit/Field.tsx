import React, { FC } from 'react'; // we need this to make JSX compile
import styled from 'styled-components';

type MainProps = {
  type: string,
  label?: string,
  placeholder?: string,
};

const Label = styled.label`
    color: #f65261;
    text-transform: uppercase;
    font-size: 0.9rem;
`;

const field: FC<MainProps> = ({ type, label, ...props }) => (
  <>
    {label && <Label>{label}</Label>}
    <input
      type={type}
      {...props}
    />
  </>
);

const Field = styled(field)`
  color: #fff;
  background: #424242;
  border: none;
  border-radius: 3px;
  margin: 0.5em 0;
  padding: 1em 1em;
  flex: 1;
  font-size: 1rem;
  ::placeholder {
    color: #555;
  }
`;

export default Field;
