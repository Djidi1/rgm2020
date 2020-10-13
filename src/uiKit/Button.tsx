import styled from 'styled-components';

interface ButtonProps {
  primary?: boolean,
}

const Button = styled.button<ButtonProps>`
  background: ${(props) => (props.primary ? '#f65261' : '#0003')};
  color: ${(props) => (props.primary ? '#fff' : '#f65261')};
  cursor: pointer;
  border-radius: 3px;
  border: none;
  margin: 0.5em 1em;
  padding: .75em 1em;
  text-transform: uppercase;
  &:hover {
    opacity: 0.9;
  }
`;

export default Button;
