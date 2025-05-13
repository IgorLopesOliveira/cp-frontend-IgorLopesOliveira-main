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
            This website is an interactive scroll-based journey that tells the story of Jack and the Beanstalk through a dynamic and immersive web experience. The entire story unfolds as the user scrolls upward, simulating Jack’s ascent into the sky. The page is divided into six major scenes, each one visually representing a key moment in the narrative. Instead of navigating through separate pages, users continuously scroll to move from one scene to the next.          </p>
          <p className="text-paragraph">
            The background features a vertical gradient from light blue to dark blue, representing the progression from ground to sky. Jack is fixed in the center of the screen throughout the scroll. His image changes depending on the scene — for example, his arms go up when climbing, or he turns sideways to interact with the environment. Around Jack, various scene elements such as clouds, trees, mountains, and props are composed using PNG images layered with parallax effects to create depth and movement. These elements move at different speeds depending on their distance in the scene, making the visuals more engaging and realistic.          </p>
          <p className="text-paragraph">
            To bring the story to life, text clouds appear above Jack at certain points in the scroll, simulating thoughts or dialogue. These messages are timed with the narrative to enhance storytelling. Interactivity plays a key role as well. In one scene, clicking on the magic bean triggers a trade animation where the cow moves to the market and the bean floats toward Jack before fading away. Throughout the page, golden eggs are hidden. Each time the user clicks on one, a counter in the bottom corner increases. Once all five eggs are found, an easter egg scene — a golden heaven — is revealed at the top of the page as a secret reward.          </p>
          <p className="text-paragraph">
            The entire experience is accompanied by background music that loops softly in the background. A mute/unmute toggle allows the user to control audio playback. The project was developed using React and Vite, and relies heavily on React hooks such as useState, useEffect, useRef, and useContext to manage scroll behavior, scene transitions, interactivity, and UI updates. Each scene and major feature was modularized into separate components to keep the code clean and manageable.</p>
          <p className="text-paragraph">
            This project was a creative and technical exploration in blending web development, animation, and storytelling — turning a classic fairy tale into a fully interactive, scroll-driven web adventure.</p>
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
          All visual assets used in this project were either created by me from scratch in Adobe Illustrator or adapted from free resources found on websites like Unsplash and Pixabay. In several cases, downloaded images were vectorized and customized to match the visual style of the story. The majority of scene elements, including the characters, props, and backgrounds, were fully designed, layered, and optimized manually to create a cohesive and animated fairy tale world.        </p>
        <p className="text-paragraph">
          This project draws heavy visual and structural inspiration from NASA Prospect, particularly in its vertical scroll storytelling, fixed character positioning, and use of layered parallax. While this version tells a completely different story, it adopts similar creative techniques to engage users in a visually immersive and narrative-driven experience.        </p>
        <p className="text-paragraph">
          Every effort was made to respect copyright usage and properly handle image licenses. If any further clarification or attribution is required, original sources and license details are available upon request.        </p>
      </div>

    </div>
  );
}

export default MakingOf;
