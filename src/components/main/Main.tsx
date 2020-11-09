import React, { FC, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getMovies } from '../../store/actions';
import {
  Col,
  Card,
  Row,
} from '../../uiKit';
import { moviesTypes } from '../../helpers/constants';

const MainWrapper = styled.div`
  position: relative;
  width: 100%;
  background: #232323;
  margin-top: 0.25em;
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const MoviesTypesStyled = styled.ul`
  text-transform: uppercase;
  display: flex;
  padding: 0;
  margin-left: 2em;
  & li {
    list-style: none;
    margin-right: 1em;
    & a {
      color: #fff;
    }
  }
`;

const SortByStyled = styled.span`
  text-transform: uppercase;
  margin: 1em 2em;
  display: flex;
  justify-content: flex-end;
  color: #555;
  & select {
    margin-left: 1em;
    background: transparent;
    font-size: 1rem;
    text-transform: uppercase;
    border: 0;
    color: #fff;
  }
`;

const FilterResult = styled.span`
  margin: 2em;
  color: #fff;
`;

type MainProps = {
  getMoviesData: (payload: { genre: string }) => void;
  loading: boolean;
  movies: [{
    id: number;
    title: string;
    genres: [];
    poster_path: string;
    release_date: string;
  }];
};

export const Main: FC<MainProps> = (props) => {
  const {
    getMoviesData,
    movies,
    loading,
  } = props;

  const [genre, setGenre] = useState('');

  useEffect(() => {
    const payload = {
      genre: genre === 'All' ? '' : genre,
      sortBy: 'release_date',
    };
    getMoviesData(payload);
  }, [genre]);

  return (
    <MainWrapper>
      <Row>
        <Col>
          <MoviesTypesStyled>
            {moviesTypes.map((type) => <li key={type} role="presentation" onClick={() => setGenre(type)}>{type}</li>)}
          </MoviesTypesStyled>
        </Col>
        <Col align="right">
          <SortByStyled>
            Sort By
            <select>
              <option>Release date</option>
            </select>
          </SortByStyled>
        </Col>
      </Row>
      <Row>
        <FilterResult>
          <b>39</b>
          {' '}
          movies found
        </FilterResult>
      </Row>
      <Row margin="0 1em">
        {loading ? 'Please wait...' : movies.map((movie, index) => (
          <Card
            key={movie.id}
            title={movie.title}
            description={movie.genres.join(', ')}
            year={movie.release_date.substr(0, 4)}
            urlImage={movie.poster_path}
          />
        ))}
      </Row>
    </MainWrapper>
  );
};

const mapDispatchToProps = {
  getMoviesData: getMovies,
};

const mapStateToProps = ({ movies }) => ({
  movies: movies.movies.data,
  loading: movies.loading,
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
