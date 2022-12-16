import React from "react";
import ImageContainer from "../ImageContainer/ImageContainer";
import WP from "../Points/WP";
import RP from "../Points/RP";
import OP from "../Points/OP";
import Indicator from "../Points/Indicator";

function HostelPage() {
  return (
    <div className="container--main">
      <h1 className="page-title">Hostels</h1>
      <ImageContainer
      name={"Kartik Bachhav"}
      manlink={"https://drive.google.com/file/d/1EuISjPSQszv9DGbidvAZOtIeD7X2gFIP/view?usp=sharing"}
      imgsrc={"/karthik.png"}
        por={"General Secretary Hostel Affairs"} />
      <Indicator/>
      <p className="main-title">Initiatives</p>
      <p className="sub-heading">Food Fiesta</p>
      <ul className="manifesto-points">
        <WP>
          Set up a culinary club for food enthusiasts and food connoisseurs to{" "}
          <strong>explore the genre</strong> of Culinary Arts
        </WP>
        <OP>
          Set up a kitchen facility for culinary experimentation and recommend
          new dishes to the mess councils
        </OP>
        <RP>
          Introduce student run cafes to provide open and competitive culinary
          opportunities to enthusiasts and allow food connoisseurs and general
          public to enjoy this food at the nominal rates
        </RP>
      </ul>
      <p className="sub-heading">Tech Integration to Ease Workflows</p>
      <p className="sub-heading">Library Project</p>
      
    </div>
  )
}

export default HostelPage