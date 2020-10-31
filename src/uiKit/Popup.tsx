import React, { FC } from 'react';
import styled from 'styled-components';

type MainProps = {
  show: boolean,
  children: JSX.Element[] | JSX.Element | string,
  setShowPopup: (arg: boolean) => void,
};

interface PopupProps {
  hide: boolean
}

const PopupCloseButton = styled.span`
  color: #fff;
  position: absolute;
  top: 0.4em;
  right: 0.5em;
  font-size: 0.7rem;
  cursor: pointer;
`;

const PopUpMenu = styled.div<PopupProps>`
  position: absolute;
  right: 1em;
  top: 1em;
  padding: 1em 0;
  z-index: 100;
  background: #232323;
  display: ${({ hide }) => (hide ? 'none' : 'flex')};
  flex-direction: column;
  border-radius: 4px;
  & button {
    background: transparent;
    border: none;
    color: #fff;
    cursor: pointer;
    width: 100px;
    padding: 0.5em 1em;
    text-align: left;
    :hover {
      background: #f65261;
    }
  }
`;

const Dialog: FC<MainProps> = ({
  show, children, setShowPopup,
}) => (
  <PopUpMenu hide={!show}>
    <PopupCloseButton onClick={() => setShowPopup(false)}>X</PopupCloseButton>
    {children}
  </PopUpMenu>
);

export default Dialog;
