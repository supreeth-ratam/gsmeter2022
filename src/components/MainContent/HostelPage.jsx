import React from "react";
import ImageContainer from "../ImageContainer/ImageContainer";
import WP from "../Points/WP";
import RP from "../Points/RP";
import OP from "../Points/OP";
import Indicator from "../Points/Indicator";
import { Title, SectionHeader, SubHeader, Points } from "./MainContent"

function HostelPage() {
  return (
    <div className="container--main">
      <ImageContainer
      name={"Kartik Bachhav"}
      manlink={"https://drive.google.com/file/d/1EuISjPSQszv9DGbidvAZOtIeD7X2gFIP/view?usp=sharing"}
      imgsrc={"/karthik.png"}
        por={"General Secretary Hostel Affairs"} />
      <Indicator/>
      
      
    </div>
  )
}

export default HostelPage