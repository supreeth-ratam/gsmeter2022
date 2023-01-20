import React from "react";
import Title from "../Title/Title";
import styled from "styled-components";


export const SectionHeader = styled.p`
  font-family: "Oswald", sans-serif;
  font-size: 2.8rem;
  font-weight: 600;
  margin: 0;
  display: inline-block;
`;

export const SubHeader = styled.p`
  font-family: "Oswald", sans-serif;
  text-transform: uppercase;
  font-size: 2rem;
  margin-bottom: 1rem;
  display: inline-block;
  margin-left: 1rem;
`;

export const Points = styled.ul`
  font-family: "Quattrocento Sans", sans-serif;
  list-style: none;
  font-size: 2rem;
  font-weight: 600;
`;
export const StyledPoints = styled.ul`
  font-family: "Quattrocento Sans", sans-serif;
  font-size: 2rem;
  font-weight: 600;
`;

function MainContent() {
  return (
    <div className="container--main">
      <Title >The GS Meter</Title>
      <p className="Main-text">
        The GS meter maintained by the Insight team is a platform through which
        every student of IIT Bombay can stay up-to-date with the progress made
        by the General Secretaries for the points on their manifestos. The aim
        is to increase accountability by maintaining a public platform that
        tracks the progress of the elected representatives throughout the year.
      </p>
      <p className="Main-text">
      If you find any discrepancies in the information presented on this website, please drop a mail to insight@iitb.ac.in specifying the General Secretary, along with the change in status of the manifesto point(s) and any relevant proof, if applicable.
      </p>
      <SectionHeader>Guide</SectionHeader>
      <StyledPoints>
        <li>The meaning of symbols is specified at the top of each page</li>
        <li>You can click on ongoing/incomplete/unclear manifesto points for further elaboration if one has been provided by the concerned General Secretary</li>
        <li>At the end of each page, there is also a section for points that were not present on the manifesto but have been completed, if provided by the concerned General Secretary</li>
        <li>
        The pie chart at the top of each page displays the overall progress each General Secretary has made with regard to their manifesto
        </li>
      </StyledPoints>
      <p className="Main-text"><strong>Note:</strong> The GS meter is continuously updated. A point marked as incomplete/ongoing could be marked complete later in the tenure. Feel free to reach out to us via our social media handles or webmail for any clarifications.</p>
    </div>
  );
}

export default MainContent;
