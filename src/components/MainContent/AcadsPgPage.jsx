import React from "react";
import ImageContainer from "../ImageContainer/ImageContainer";
import WP from "../Points/WP";
import RP from "../Points/RP";
import OP from "../Points/OP";
import Indicator from "../Points/Indicator";
import {Title,SectionHeader,SubHeader,Points} from "./MainContent"
function AcadsPgPage() {
  return (
    <div className="container--main">
      <Title>Gsaa Meter</Title>
      <ImageContainer
        name={"Vishaka"}
        manlink={"https://drive.google.com/file/d/1k8lNyKtkizbJnZwXB33KPepvw_pbP-N7/view?usp=sharing"}
        imgsrc={"/vishaka.png"}
        por={"General Secretary Academic Affairs PG"}
        chartsrc={""}
      />
      <Indicator/>
     
    </div>
  )
}

export default AcadsPgPage