import './Aboutme.css';

const Aboutme = () => {
  return (
    <div className="aboutme-container">
      <h2 className="h2-title">About me</h2>
      <div className="story-telling">
        <p>
          <span role="img" aria-label="waving hand">
            👋
          </span>
          Hey!
        </p>
        <br />
        <p>
          Greetings, Earthlings! I’m René Meier, an airline captain with a
          cosmic passion for technology and space exploration. After navigating
          the skies as a pilot, I’ve set my sights on a new frontier—full-stack
          development. My journey from the cockpit to coding has been fueled by
          curiosity, a love for problem-solving, and an unquenchable thirst for
          innovation. With a Bachelor’s degree in Mechanical Engineering from
          FACENS, I’ve always been fascinated by how things work, whether it’s
          an aircraft or a complex web application. Over the past few years,
          I’ve ventured into the vast universe of JavaScript technologies,
          mastering React, Node.js, and CSS frameworks. My portfolio, themed
          around my love for outer space, showcases a variety of projects that
          reflect both my technical skills and my passion for exploration—like a
          quasi-replica of the Super Mario game and a full-stack social
          platform. Fluent in Portuguese, German, and English, and with a star
          map of basic knowledge in Italian, Swedish, and Finnish, I’m on a
          mission to contribute to innovative projects in the Nordic region,
          Europe, or North America. I’m ready to launch into the next phase of
          my career, bringing the same precision and dedication from my aviation
          background to the tech industry. When I’m not coding or flying, you
          can find me gazing at the stars, exploring the latest in space
          technology, or learning new languages. Let’s connect and explore the
          possibilities of working together. Because in this universe, the sky
          is not the limit.
        </p>
        <br />
        <p>
          <span role="img" aria-label="globe">
            🌍
          </span>
          Where to find me?
        </p>
        <div className="icons-container">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/meierrene"
          >
            <ion-icon class="icons" name="logo-github"></ion-icon>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/renemeierdev/"
          >
            <ion-icon class="icons" name="logo-linkedin"></ion-icon>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/renemeier.de/"
          >
            <ion-icon class="icons" name="logo-instagram"></ion-icon>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://steamcommunity.com/profiles/76561198223067764/"
          >
            <ion-icon class="icons" name="logo-steam"></ion-icon>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
