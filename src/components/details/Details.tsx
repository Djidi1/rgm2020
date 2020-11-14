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
  font-weight: normal;
  margin: 1em 0 0 0;
`;

const ImageWrapper = styled.div`
  display: flex;
  position: relative;
  flex: 1 0 100%;
  border: 1px solid grey;
  height: 20em;
  margin-bottom: 1em;
  overflow: hidden;
`;

const Rating = styled.span`
  color: #66BB6A;
  font-weight: 200;
  font-size: 0.8em;
  border: 1px solid white;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: inline-flex;
  justify-content: center;
  margin-left: 1em;
  line-height: 2em;
`;

const TagLine = styled.h4`
  color: #fff;
  font-weight: normal;
`;

const ReleaseDate = styled.h2`
  color: #f65261;
  font-weight: normal;
`;

const Overview = styled.p`
  color: #fff;
  font-weight: normal;
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
    vote_average: number;
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

  return (
    <DetailsWrapper>
      <Container>
        <Row>
          <Col width="75%">
            <Image url={Logo} width="125px" />
          </Col>
          <Col width="25%" align="right">
            Search
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
              <DetailsTitle>
                {movie.title}
                <Rating>{movie.vote_average}</Rating>
              </DetailsTitle>
              <TagLine>{movie.tagline}</TagLine>
              <ReleaseDate>{`${movie.release_date.substr(0, 4)} ${movie.runtime ? `${movie.runtime} min` : ''}`}</ReleaseDate>
              <Overview>{movie.overview}</Overview>
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
