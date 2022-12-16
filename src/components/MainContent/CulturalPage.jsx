import React from "react";
import ImageContainer from "../ImageContainer/ImageContainer";
import WP from "../Points/WP";
import RP from "../Points/RP";
import OP from "../Points/OP";
import Indicator from "../Points/Indicator";
function CulturalPage() {
  return (
    <div className="container--main">
      <h1 className="page-title">Culture</h1>
      <ImageContainer
        name={"Divya Mrinal"}
        manlink={
          "https://drive.google.com/drive/folders/1WId3MhG6sZo0XGrM3NG0b79_cglhM340"
        }
        imgsrc={"/divya.png"}
        por={"General Secretary Cultural Affairs "}
      />
      <Indicator />
      <p className="main-title">Initiatives</p>
      <p className="sub-heading">Food Fiesta</p>
      <ul className="manifesto-points">
        <OP reply={"This is ongoing and will finish by 2 days"}>
          Set up a culinary club for food enthusiasts and food connoisseurs to{" "}
          <strong>explore the genre</strong> of Culinary Arts
        </OP>
        <RP>
          Set up a kitchen facility for culinary experimentation and recommend
          new dishes to the mess councils
        </RP>
        <RP>
          Introduce student run cafes to provide open and competitive culinary
          opportunities to enthusiasts and allow food connoisseurs and general
          public to enjoy this food at the nominal rates
        </RP>
      </ul>
      <p className="sub-heading">Tech Integration to Ease Workflows</p>
      <p className="sub-heading">Library Project</p>
    </div>
  );
}

export default CulturalPage;
