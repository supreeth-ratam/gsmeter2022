import React from "react";
import ImageContainer from "../ImageContainer/ImageContainer";
import WP from "../Points/WP";
import RP from "../Points/RP";
import Indicator from "../Points/Indicator";
function AcadsUgPage() {
  return (
    <div className="container--main">
      <h1 className="page-title">Acads UG</h1>
      <ImageContainer
        name={"Ayush Ambadas Dahale"}
        manlink={
          "https://drive.google.com/file/d/1tr7XhEAyIDQvOYcxb-bxrhfzscsNzsl8/view?usp=sharing"
        }
        imgsrc={"/aayush.png"}
        por={"General Secretary Academic Affairs UG"}
      />
      <Indicator/>
      <p className="main-title">Initiatives</p>
      <p className="sub-heading">Food Fiesta</p>
      <ul className="manifesto-points">
        <WP>
          Set up a culinary club for food enthusiasts and food connoisseurs to{" "}
          <strong>explore the genre</strong> of Culinary Arts
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
      </ul>
      <p className="sub-heading">Tech Integration to Ease Workflows</p>
      <p className="sub-heading">Library Project</p>
    </div>
  );
}

export default AcadsUgPage;
