import React from "react";
import ImageContainer from "../ImageContainer/ImageContainer";
import WP from "../Points/WP";
import RP from "../Points/RP";
import OP from "../Points/OP";
import Indicator from "../Points/Indicator";
import { Title, SectionHeader, SubHeader, Points } from "./MainContent"

function TechnicalPage() {
  return (
    <div className="container--main">
      <ImageContainer
      name={"Aniket Agrawal"}
      manlink={"https://drive.google.com/drive/folders/1WId3MhG6sZo0XGrM3NG0b79_cglhM340"}
      imgsrc={"/aniket.png"}
        por={"General Secretary Technical Affairs"} />
      <Indicator/>
     
      
    </div>
  )
}

export default TechnicalPage