import React from "react";
import ImageContainer from "../ImageContainer/ImageContainer";
import WP from "../Points/WP";
import RP from "../Points/RP";
import OP from "../Points/OP";
import Indicator from "../Points/Indicator";
import {Title,SectionHeader,SubHeader,Points} from "./MainContent"
function AcadsUgPage() {
  return (
    <div className="container--main">
      <ImageContainer
        name={"Ayush Ambadas Dahale"}
        manlink={
          "https://drive.google.com/file/d/1tr7XhEAyIDQvOYcxb-bxrhfzscsNzsl8/view?usp=sharing"
        }
        imgsrc={"/aayush.png"}
        por={"General Secretary Academic Affairs UG"}
      />
      <Indicator/>
     
    </div>
  );
}

export default AcadsUgPage;
