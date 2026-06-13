import "./About.css";

function About() {
  return (
    <section className="about">
      <div className="about__image">
        <p className="about__image-text">
          Placeholder image. <br /> Put an image of yourself here{" "}
        </p>
      </div>

      <div className="about__content">
        <h2 className="about__title">About the author</h2>
        <p className="about__text">
          Throughout my training, I have worked with HTML, CSS, JavaScript,
          React, REST APIs, Git, and Node.js. This News Explorer application
          demonstrates my ability to build responsive interfaces, integrate
          third-party APIs, and create user-focused web experiences.
        </p>
      </div>
    </section>
  );
}

export default About;
