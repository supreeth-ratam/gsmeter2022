import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import "./ImageContainer.css";

function ImageContainer({
  name,
  imgsrc,
  por,
  manlink,
  chartsrc,
  completed,
  ongoing,
  unclear,
  notstarted,
}) {
  const data = [
    { title: "Not Yet Started", value: notstarted, color: "#FF470C" },
    { title: "Ongoing", value: ongoing, color: "#FFCC66" },
    { title: "Completed", value: completed, color: "#2BC48A" },
    { title: "Incomplete", value: unclear, color: "#0073c2" },
  ];
  return (
    <div className="parent-image-container">
      <div className="image-container">
        <img src={imgsrc} alt="" className="image-container__image-box" />
        <div className="image_container__text-box">
          <p className="main-text">
            <span className="main-text--name">{name}</span>
            <span className="main-text--post">{por}</span>
          </p>
          <a href={manlink} className="main-text--link">
            View Manifesto <i className="uil uil-arrow-right"></i>
          </a>
        </div>
      </div>
      {/* <img src={chartsrc?chartsrc:"/png-raw.png"} alt="" className='image-chart'/> */}
      <div className="piechart">
        <PieChart
          data={data}
          lineWidth={50}
          animate
          label={({ dataEntry }) => {
            if (dataEntry.value != 0) {
              return `${dataEntry.value}%`;
            } else {
              return null;
            }
                  }}
                  labelStyle={(index) => ({
                    fontSize: '.8rem',
                    fontFamily: 'Quattrocento Sans',
                    fontWeight: "bold",
                  })}
                  labelPosition={75}
        />
      </div>
    </div>
  );
}

export default ImageContainer;
