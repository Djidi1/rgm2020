import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button, Image } from '../../uiKit';
import Error404 from '../../img/error_404.png';

const MainWrapper = styled.div`
  position: relative;
  width: 100%;
  background: #121212;
  margin-top: 0.25em;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  flex-direction: column;
  min-height: calc(100vh - 15em - 4em);
`;

const PageTitle = styled.h1`
  color: #fff;
  font-weight: 200;
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

export const Page404: FC<MainProps> = () => (
  <MainWrapper>
    <PageTitle>Page Not Found</PageTitle>
    <Image url={Error404} width="100%" />
    <Link to="/">
      <Button withBorder>Go back to home</Button>
    </Link>
  </MainWrapper>
);

export default Page404;
