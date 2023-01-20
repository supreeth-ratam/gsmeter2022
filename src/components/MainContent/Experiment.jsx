import React from "react";
import ImageContainer from "../ImageContainer/ImageContainer";
import { PieChart } from "react-minimal-pie-chart";
import WP from "../Points/WP";
import RP from "../Points/RP";
import OP from "../Points/OP";
import Indicator from "../Points/Indicator";
import { SectionHeader, SubHeader, Points } from "./MainContent";
import Title from "../Title/Title";
export default function Experiment() {
  return (
    <div className="container--main">
      <ImageContainer
        name={"Divya Mrinal"}
        manlink={
          "https://drive.google.com/drive/folders/1WId3MhG6sZo0XGrM3NG0b79_cglhM340"
        }
        imgsrc={""}
        por={"General Secretary Cultural Affairs "}
      />
          <Indicator />
          <div className="piechart">
              
      <PieChart
        data={[
            { title: "Not Yet Started", value: 41.5, color: "#FF470C" },
            { title: "Ongoing", value: 26.8, color: "#FFCC66" },
            { title: "Completed", value: 31.7, color: "#2BC48A" },
            { title: "Incomplete", value: 0, color: "#0073c2" },
            ]}
        lineWidth={50}
        />
        </div>
      ;
    </div>
  );
}
