import React from "react";

function FairyTaleItem({ image, studentName, fairyTaleTitle, genre }) {
  return (
    <li className="fairy-item">
      <img src={image} alt={studentName} className="fairy-image" />
      <h3 className="fairy-title">{fairyTaleTitle}</h3>
      <p className="fairy-student">{studentName}</p>
      <p className="fairy-genre">{genre}</p>
      
    </li>
  );
}

export default FairyTaleItem;
