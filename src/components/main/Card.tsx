import React, { FC } from 'react'; // we need this to make JSX compile
import styled from 'styled-components';
import {
  Dialog,
  Popup,
  Image,
} from '../../uiKit';
import useToggle from '../../helpers/hooks';
import EditMovie from './EditMovie';

type MainProps = {
  movie: {
    id: number;
    title: string;
    genres: string[];
    poster_path: string;
    release_date: string;
  };
};

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
  justify-content: center;
  width: 300px;
  margin: 1em;
  color: #555;
`;

const CardImageWrapper = styled.div`
  display: flex;
  position: relative;
  border: 1px solid grey;
  margin-bottom: 1em;
  width: 100%;
  height: 450px;
  overflow: hidden;
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
  text-align: center;
`;

const Card: FC<MainProps> = ({ movie }) => {
  const {
    poster_path: posterPath, title, genres, release_date: releaseDate,
  } = movie;

  const [showEditMovie, toggleShowEditMovie] = useToggle(false);
  const [showDeleteMovie, toggleShowDeleteMovie] = useToggle(false);
  const [showPopup, toggleShowPopup] = useToggle(false);
  return (
    <CardWrapper>
      <EditMovie
        movie={movie}
        showAddMovie={showEditMovie}
        toggleShowAddMovie={toggleShowEditMovie}
      />
      <Dialog
        title="Delete movie"
        show={showDeleteMovie}
        toggleShowDialog={toggleShowDeleteMovie}
        actions={<div>confirm</div>}
      >
        Are you sure you want to delete this movie?
      </Dialog>
      <CardImageWrapper>
        <Popup show={showPopup} toggleShowPopup={() => toggleShowPopup}>
          <button type="button" onClick={toggleShowEditMovie}>Edit</button>
          <button type="button" onClick={toggleShowDeleteMovie}>Delete</button>
        </Popup>
        <PopUpMenuButton onClick={toggleShowPopup}>...</PopUpMenuButton>
        <Image url={posterPath} width="300px" />
      </CardImageWrapper>
      <CardTitle>
        {title}
        <CardDescription>{genres.join(', ')}</CardDescription>
      </CardTitle>
      <CardYear>{releaseDate.substr(0, 4)}</CardYear>
    </CardWrapper>
  );
};

export default Card;
