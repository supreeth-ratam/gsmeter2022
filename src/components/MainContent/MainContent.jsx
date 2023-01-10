import React from "react";
import ImageContainer from "../ImageContainer/ImageContainer";
import WP from "../Points/WP";
import RP from "../Points/RP";
import OP from "../Points/OP";
import styled from "styled-components";

export const Title = styled.h1`
  font-family: "Oswald", sans-serif;
  text-transform: uppercase;
  font-size: 3.6rem;
  margin-bottom: 1rem;
`;

export const SectionHeader = styled.p`
  font-family: "Oswald", sans-serif;
  font-size: 2.8rem;
  font-weight: 600;
  margin:0;
`;

export const SubHeader = styled.p`
  font-family: "Oswald", sans-serif;
  text-transform: uppercase;
  font-size: 2rem;
  margin-bottom: 1rem;
  display:inline-block;
`;

export const Points = styled.ul`
  font-family: "Quattrocento Sans", sans-serif;
  list-style: none;
  font-size: 2rem;
  font-weight: 600;
`;


function MainContent() {
  return (
    <div className="container--main">
      <Title>Introduction</Title>
      <SectionHeader>Initiatives</SectionHeader>
      <SubHeader>Food Fiesta</SubHeader>
      <Points>

        <WP>
          Set up a culinary club for food enthusiasts and food connoisseurs to
          <strong> explore the genre</strong> of Culinary Arts
        </WP>
        <RP>
          Set up a kitchen facility for culinary experimentation and recommend
          new dishes to the mess councils
        </RP>
        <RP>
          Introduce student run cafes to provide open and competitive culinary
          opportunities to enthusiasts and allow food connoisseurs and general
          public to enjoy this food at the nominal rates
        </RP>
      </Points>
      
    </div>
  );
}

export default MainContent;


