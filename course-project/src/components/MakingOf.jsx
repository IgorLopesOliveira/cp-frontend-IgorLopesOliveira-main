import { useState } from 'react';
import { Link } from 'react-router-dom';

function MakingOf() {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="making-of-page">
      <h1 className="page-title">MAKING OF</h1>

      <div className="banner-container">
        <img src="/images/bean-banner.png" alt="Banner" className="banner-image" />
      </div>

      <div className="content-container">
        <div className="text-section">
          <h2 className="text-title">Story</h2>
          <p className="text-paragraph">
            Jack and the Beanstalk tells the story of a poor boy named Jack who lives with his mother. One day, Jack trades their only cow for a handful of "magic beans." His mother, angry, throws them away. Overnight, a giant beanstalk grows into the sky. Jack climbs it and discovers a giant's castle in the clouds. Inside, he finds treasures like a golden harp and a goose that lays golden eggs. Jack bravely steals these riches, escapes the angry giant, and cuts down the beanstalk. In the end, Jack and his mother live happily ever after, no longer poor.
          </p>
        </div>

        <div className="image-section">
          <img src="/images/box1.png" alt="Making Of" className="side-image" />
        </div>
      </div>

      {showMore && (
        <div className="extra-content">
          <h2 className="text-title">Making of</h2>
          <p className="text-paragraph">
            This website is designed as a one-scroll adventure that follows the story of Jack and the Beanstalk. It's divided into six parts, each representing a major scene from the story. As you scroll down, you'll move through each chapter just like Jack's journey.
          </p>
          <p className="text-paragraph">
            Each section features basic parallax effects, where the background moves faster than the foreground to create a sense of depth. Some elements will have mouse-controlled parallax, adding more interaction and making the world feel alive.
          </p>
          <p className="text-paragraph">
            You'll also find interactive buttons — for example, clicking on Jack's cow will trigger the trade for magic beans. Animations will bring the story to life, like a bird flying by as Jack climbs the beanstalk. There's even an easter egg hidden somewhere on the page for you to discover! To complete the experience, background music will play softly as you scroll through the magical world of Jack's adventure.
          </p>
          <h2 className="text-title">Author & Genre</h2>
          <p className="text-paragraph">
            <strong>Jack and the Beanstalk</strong> is a traditional English fairy tale, first published by <strong>Benjamin Tabart</strong> in <strong>1807</strong> and later popularized by <strong>Joseph Jacobs</strong> in <strong>1890</strong>. It belongs to the genres of <strong>fairy tales</strong>, <strong>folk tales</strong>, and <strong>fantasy</strong>.
          </p>
        </div>
      )}

      <div className="read-more-container">
        <button className="read-more-button" onClick={handleToggle}>
          {showMore ? 'Read Less' : 'Read More'}
        </button>
      </div>

      <div className="extra-info-section">
        <h2 className="text-title">Extra Information</h2>
        <div className="extra-images">
          <img src="/images/box2.png" alt="Source 1" className="extra-image" />
          <img src="/images/box3.png" alt="Source 2" className="extra-image" />
          <img src="/images/box5.png" alt="Source 3" className="extra-image" />
        </div>
        <p className="text-paragraph">
          All images used in this project were either created by me, taken from free resource websites like Unsplash and Pixabay, or edited versions of free assets. Every effort was made to respect copyright and properly attribute sources when necessary. If needed, original authors and licenses are available upon request.
        </p>
      </div>

    </div>
  );
}

export default MakingOf;
