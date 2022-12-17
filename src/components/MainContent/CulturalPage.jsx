import React from "react";
import ImageContainer from "../ImageContainer/ImageContainer";
import WP from "../Points/WP";
import RP from "../Points/RP";
import OP from "../Points/OP";
import Indicator from "../Points/Indicator";
import { Title, SectionHeader, SubHeader, Points } from "./MainContent"

function CulturalPage() {
  return (
    <div className="container--main">
      <ImageContainer
        name={"Divya Mrinal"}
        manlink={
          "https://drive.google.com/drive/folders/1WId3MhG6sZo0XGrM3NG0b79_cglhM340"
        }
        imgsrc={"/divya.png"}
        por={"General Secretary Cultural Affairs "}
      />
      <Indicator />
      
    </div>
  );
}

export default CulturalPage;
