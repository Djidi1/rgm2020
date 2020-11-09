import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getMovie } from '../../store/actions';
import {
  Container,
  Col,
  Row,
  Image,
} from '../../uiKit';
import Logo from '../../img/logo.png';

const DetailsWrapper = styled.div`
  background: grey;
  padding: 0.25em 1em;
  display: flex;
  justify-content: space-between;
  height: 30em;
`;

const DetailsTitle = styled.h1`
  color: #fff;
  text-transform: uppercase;
  font-weight: normal;
`;

const ImageWrapper = styled.div`
  display: flex;
  position: relative;
  background: #607D8B;
  flex: 1 0 100%;
  border: 1px solid grey;
  height: 20em;
  margin-bottom: 1em;
`;

type DetailsProps = {
  getMovieData: (payload: { id: number }) => void;
  loading: boolean;
  movie: {
    id: number;
    title: string;
    tagline: string;
    overview: string;
    genres: [];
    poster_path: string;
    release_date: string;
    runtime: number;
  };
};

export const Details: FC<DetailsProps> = (props) => {
  const {
    getMovieData,
    movie,
    loading,
  } = props;

  useEffect(() => {
    const payload = {
      id: 351286,
    };
    getMovieData(payload);
  }, []);

  console.log(movie);

  return (
    <DetailsWrapper>
      <Container>
        <Row>
          <Col width="75%">
            <Image url={Logo} width="125px" />
          </Col>
          <Col width="25%" align="right">
            1
          </Col>
        </Row>
        {loading ? 'Please wait...' : (
          <Row margin="0 2em">
            <Col width="25%">
              <ImageWrapper>
                <Image url={movie.poster_path} width="300px" />
              </ImageWrapper>
            </Col>
            <Col width="60%">
              <DetailsTitle>{movie.title}</DetailsTitle>
              <div>{movie.tagline}</div>
              <div>{`${movie.release_date.substr(0, 4)} ${movie.runtime ? `${movie.runtime} min` : ''}`}</div>
              <div>{movie.overview}</div>
            </Col>
          </Row>
        )}
      </Container>
    </DetailsWrapper>
  );
};

const mapDispatchToProps = {
  getMovieData: getMovie,
};

const mapStateToProps = ({ movie }) => ({
  movie: movie.movie,
  loading: movie.loading,
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);
