import React, { FC } from 'react'; // we need this to make JSX compile
import styled from 'styled-components';
import {
  Col,
  Card,
  Row,
} from '../../uiKit';
import { movies, moviesTypes } from '../../helpers/constants';

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

const LineBreak = styled.div`
  width: 100%;
`;

type MainProps = {
};

export const Main: FC<MainProps> = () => (
  <MainWrapper>
    <Row>
      <Col>
        <MoviesTypesStyled>
          {moviesTypes.map((type) => <li key={type}><a>{type}</a></li>)}
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
      {movies.map((movie, index) => (
        <>
          <Card
            key={movie.title}
            title={movie.title}
            description={movie.description}
            year={movie.year}
            urlImage={movie.urlImage}
          />
          {(index + 1) % 3 === 0 && <LineBreak />}
        </>
      ))}
    </Row>
  </MainWrapper>
);

export default Main;
