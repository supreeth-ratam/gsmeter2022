import React from "react";
import ImageContainer from "../ImageContainer/ImageContainer";
import WP from "../Points/WP";
import RP from "../Points/RP";
import OP from "../Points/OP";
import Indicator from "../Points/Indicator";
import {Title,SectionHeader,SubHeader,Points} from "./MainContent"
function SportsPage() {
  return (
    <div className="container--main">
      <ImageContainer
      name={"Ketan Agrawal"}
      manlink={"https://drive.google.com/file/d/1kAkeXitC-clhFw5AIYj8I7eQwsuW7HCo/view?usp=sharing"}
      imgsrc={"/ketan.jpeg"}
        por={"General Secretary, Sports Affairs "} />
      <Indicator/>
    
    </div>
  )
}

export default SportsPage