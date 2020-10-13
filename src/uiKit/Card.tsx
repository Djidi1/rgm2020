import React, { FC } from 'react'; // we need this to make JSX compile
import styled from 'styled-components';

type MainProps = {
  urlImage: string,
  title: string,
  description: string,
  year: string,
}

const CardWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  flex: 1;
  margin: 1em;
  color: #555;
`;

const CardImage = styled.div`
  display: flex;
  flex: 1 0 100%;
  border: 1px solid grey;
  height: 20em;
  margin-bottom: 1em;
`;

const CardTitle = styled.div`
  flex: 1 0 60%;
`;

const CardDecription = styled.div`
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
}) => <CardWrapper>
  <CardImage>{urlImage}</CardImage>
  <CardTitle>
    {title}
    <CardDecription>{description}</CardDecription>
  </CardTitle>
  <CardYear>{year}</CardYear>
</CardWrapper>;

export default Card;
