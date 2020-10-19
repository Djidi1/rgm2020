import React, { FC, useState } from 'react'; // we need this to make JSX compile
import styled from 'styled-components';
import {
  Dialog,
  FormControl,
  Field,
  Popup,
} from '.';
import { dialogFields } from '../helpers/constants';

type MainProps = {
  urlImage: string,
  title: string,
  description: string,
  year: string,
}

const PopUpMenuButton = styled.div`
  position: absolute;
  background: #232323;
  border-radius: 12px;
  width: 24px;
  height: 24px;
  right: 1em;
  top: 1em;
  display: none;
  transform: rotate(90deg);
  color: #fff;
  justify-content: center;
  line-height: 1em;
  cursor: pointer;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  flex: 1;
  margin: 1em;
  color: #555;
`;

const CardImageWrapper = styled.div`
  display: flex;
  position: relative;
  background: #607D8B;
  flex: 1 0 100%;
  border: 1px solid grey;
  height: 20em;
  margin-bottom: 1em;
  :hover ${PopUpMenuButton} {
    display: flex;
  }
`;

const CardTitle = styled.div`
  flex: 1 0 60%;
`;

const CardDescription = styled.div`
  font-size: 0.8rem;
`;

const CardYear = styled.div`
  flex: 1;
  border-radius: 4px;
  border: 1px solid #555;
  width: fit-content;
  padding: 0.2em 0.8em;
  align-self: start;
`;

const Card: FC<MainProps> = ({
  urlImage, title, description, year,
}) => {
  const [showEditMovie, setShowEditMovie] = useState(false);
  const [showDeleteMovie, setShowDeleteMovie] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  return (
    <CardWrapper>
      <Dialog
        title="Edit movie"
        show={showEditMovie}
        setShowDialog={setShowEditMovie}
        actions={<div>action</div>}
      >
        {dialogFields.map((field) => (
          <FormControl key={field.label}>
            <Field type={field.type} label={field.label} placeholder={field.placeholder} />
          </FormControl>
        ))}
      </Dialog>
      <Dialog
        title="Delete movie"
        show={showDeleteMovie}
        setShowDialog={setShowDeleteMovie}
        actions={<div>confirm</div>}
      >Are you sure you want to delete this movie?</Dialog>
      <CardImageWrapper>
        <Popup show={showPopup} setShowPopup={setShowPopup}>
          <button onClick={() => setShowEditMovie(true)}>Edit</button>
          <button onClick={() => setShowDeleteMovie(true)}>Delete</button>
        </Popup>
        <PopUpMenuButton onClick={() => setShowPopup(true)}>...</PopUpMenuButton>
        {urlImage}
      </CardImageWrapper>
      <CardTitle>
        {title}
        <CardDescription>{description}</CardDescription>
      </CardTitle>
      <CardYear>{year}</CardYear>
    </CardWrapper>
  );
};

export default Card;
