import React from "react";
import ImageContainer from "../ImageContainer/ImageContainer";
import WP from "../Points/WP";
import RP from "../Points/RP";
import Indicator from "../Points/Indicator";
function AcadsPgPage() {
  return (
    <div className="container--main">
      <h1 className="page-title">Acads PG</h1>
      <ImageContainer
        name={"Vishaka"}
        manlink={"https://drive.google.com/file/d/1k8lNyKtkizbJnZwXB33KPepvw_pbP-N7/view?usp=sharing"}
        imgsrc={"/vishaka.png"}
        por = {"General Secretary Academic Affairs PG"}
      />
      <Indicator/>
      <p className="main-title">Initiatives</p>
      <p className="sub-heading">Food Fiesta</p>
      <ul className="manifesto-points">
        <WP reply={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero neque soluta facilis mollitia dolorum. Veniam officia delectus ipsam eos, consequuntur odio totam dolorem, dolor amet repellendus a doloribus fuga adipisci quia facere."}>
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
  )
}

export default AcadsPgPage