// box component displays a single fairy tale card with image and text
const Box = ({ image, studentName, fairyTaleTitle, genre }) => (
    <div className="box">
        {/* image for the fairy tale */}
        <img src={image} alt={studentName} className="image" />

        {/* student's name */}
        <p className="student-name">{studentName}</p>

        {/* title of the fairy tale */}
        <p className="fairy-tale-title">{fairyTaleTitle}</p>

        {/* genre of the fairy tale */}
        <p className="genre">{genre}</p>
    </div>
);

export default Box;
