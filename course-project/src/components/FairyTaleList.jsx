import React from "react";
import FairyTaleItem from "./FairyTaleItem";
import studentData from "../api/slides.json";

const FairyTaleList = () => {
  return (
    <div className="fairy-tale-list">
      <h2 className="list-title">STORIES</h2>
      <ul className="list-grid">
        {studentData.map((item, index) => (
          <FairyTaleItem
            key={index}
            image={item.image}
            studentName={item.studentName}
            fairyTaleTitle={item.fairyTaleTitle}
            genre={item.genre}
            link={item.link}
            internal={item.internal}
          />
        ))}
      </ul>
    </div>
  );
};

export default FairyTaleList;
