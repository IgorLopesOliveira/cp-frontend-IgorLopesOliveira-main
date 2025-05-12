import React from "react";
import { Link } from "react-router-dom";

function FairyTaleItem({ image, studentName, fairyTaleTitle, genre, link, internal }) {
  const content = (
    <>
      <img src={image} alt={studentName} className="fairy-image" />
      <h3 className="fairy-title">{fairyTaleTitle}</h3>
      <p className="fairy-student">{studentName}</p>
      <p className="fairy-genre">{genre}</p>
    </>
  );

  return (
    <li className="fairy-item">
      {internal ? (
        <Link to={link}>{content}</Link>
      ) : (
        <a href={link} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      )}
    </li>
  );
}

export default FairyTaleItem;
