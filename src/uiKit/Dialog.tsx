import React, { FC } from 'react';
import styled from 'styled-components';

type MainProps = {
  show: boolean | (() => void),
  title: string,
  children: JSX.Element[] | JSX.Element | string,
  actions: JSX.Element[] | JSX.Element,
  toggleShowDialog: () => void,
};

interface DialogModalProps {
  hide: boolean
}
const DialogModal = styled.div<DialogModalProps>`
  display: ${({ hide }) => (hide ? 'none' : 'block')};
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
  padding-top: 100px;
  background-color: black;
  background-color: rgba(0, 0, 0, 0.4);
  overflow: auto;
  transition: all 0.3s linear;
`;

const DialogWrapper = styled.div`
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    background: #232323;
    padding: 2em;
    min-width: 500px;
    z-index: 1000;
    border-radius: 4px;
`;

const DialogTitle = styled.h1`
  color: #fff;
  text-transform: uppercase;
`;

const DialogCloseButton = styled.button`
  background: transparent;
  border: 0;
  color: #fff;
  position: absolute;
  top: 1em;
  right: 1em;
  font-size: 1rem;
`;

const DialogBody = styled.div`
  display: flex;
  flex-direction: column;
`;

const DialogActions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const Dialog: FC<MainProps> = ({
  show, title, children, actions, toggleShowDialog,
}) => (
  <DialogModal hide={!show}>
    <DialogWrapper>
      <DialogCloseButton onClick={toggleShowDialog}>X</DialogCloseButton>
      <DialogTitle>{title}</DialogTitle>
      <DialogBody>{children}</DialogBody>
      {actions && <DialogActions>{actions}</DialogActions>}
    </DialogWrapper>
  </DialogModal>
);

export default Dialog;
