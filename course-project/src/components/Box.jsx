const Box = ({ image, studentName, fairyTaleTitle, genre }) => (
    <div className="box">
        <img src={image} alt={studentName} className="image" />
        <p className="student-name">{studentName}</p>
        <p className="fairy-tale-title">{fairyTaleTitle}</p>
        <p className="genre">{genre}</p>
        
    </div>
);

export default Box;
