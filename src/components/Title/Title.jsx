import React from 'react'
import styled from 'styled-components'
import { StyledPoints } from '../MainContent/MainContent';
import "./Title.css"


export const TitleName = styled.h1`
  font-family: "Oswald", sans-serif;
  text-transform: uppercase;
  font-size: 3.6rem;
  margin-bottom: 1rem;
`;

function Title({lastUpdated,children}) {

  return (
      <div className='TitleBox'>
          <TitleName>{children}</TitleName>
          {lastUpdated && <StyledPoints>Last Updated: {lastUpdated}</StyledPoints>}
      </div>
  )
}

export default Title