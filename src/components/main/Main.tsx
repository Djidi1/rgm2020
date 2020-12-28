import React, { FC, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
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
  z-index: 1;
  & li {
    list-style: none;
    margin-right: 1em;
    cursor: pointer;
    padding-bottom: 0.5em;
    border-bottom: 2px solid transparent;
    &:hover {
      border-color: #F65261;
    }
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

const Separator = styled.div`
  width: calc(100% - 4em);
  height: 2px;
  background-color: #555555;
  margin: 0 2em;
  position: relative;
  top: calc(-1em - 2px);
  border-bottom: 2px solid #000;
`;

const FilterResult = styled.span`
  margin: 2em;
  color: #fff;
`;

const NoMovieFound = styled.h1`
  color: #fff;
  font-weight: 200;
`;

interface MoviesProps {
  id: number;
  title: string;
  genres: [];
  poster_path: string;
  release_date: string;
}

interface MainProps {
  getMoviesData: (payload: { genre: string }) => void;
  loading: boolean;
  movies?: MoviesProps[];
}

// PATTERN: Container component
const MoviesList = (movies: MoviesProps[]) => (
  <>
    {movies?.length ? movies.map((movie) => (
      <Link key={movie.id} to={`/film/${movie.id}`}>
        <Card movie={movie} />
      </Link>
    )) : <NoMovieFound>No Movie Found</NoMovieFound>}
  </>
);

export const Main: FC<MainProps> = (props) => {
  const {
    getMoviesData,
    movies,
    loading,
  } = props;
  const { searchQuery } = useParams();

  const [genre, setGenre] = useState('');

  useEffect(() => {
    const payload = {
      genre: genre === 'All' ? '' : genre,
      sortBy: 'release_date',
      search: searchQuery,
      searchBy: 'title',
    };
    getMoviesData(payload);
  }, [genre, searchQuery]);

  return (
    <MainWrapper>
      <Row>
        <Col width="50%">
          <MoviesTypesStyled>
            {moviesTypes.map((type) => <li key={type} role="presentation" onClick={() => setGenre(type)}>{type}</li>)}
          </MoviesTypesStyled>
        </Col>
        <Col width="20%" align="right">
          <SortByStyled>
            Sort By
            <select title="Sort By">
              <option>Release date</option>
            </select>
          </SortByStyled>
        </Col>
      </Row>
      <Separator />
      <Row>
        <FilterResult>
          <b>{movies ? movies?.length : 0}</b>
          {' '}
          movies found
        </FilterResult>
      </Row>
      <Row margin="0 1em">
        {loading ? 'Please wait...' : <MoviesList movies={movies} />}
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
