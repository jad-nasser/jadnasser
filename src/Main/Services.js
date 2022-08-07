const Services = () => {
  return (
    <section className="my-services" id="services">
      <h2 className="section__title section__title--services">What I Do</h2>
      <div className="services">
        <div className="service">
          <h3>Front End Web Developer</h3>
          <p className="service-paragraph">
            Able to develop the front end of a website using JavaScript,
            TypeScript, React js, HTML, CSS, and Bootstrap. Able to write Unit /
            Integration / e2e tests.
          </p>
        </div>{" "}
        {/* </service> */}
        <div className="service">
          <h3>Back End Web Developer</h3>
          <p className="service-paragraph">
            Able to develop the back end of a website using Node.js, Express js,
            JavaScript, and TypeScript, with databases like MongoDB and SQL
            Server. Able to write Unit / Integration / e2e tests.
          </p>
        </div>{" "}
        {/* </service> */}
        <div className="service">
          <h3>Other Skills</h3>
          <p className="service-paragraph">
            Familiar with programming concepts like OOP and MVC. Able to write
            code using languages like Java, C, C++, C#, SWI-Prolog, GNU Octave,
            MATLAB.
          </p>
        </div>{" "}
        {/* </service> */}
      </div>{" "}
      {/* </services> */}
      <a href="#work" className="btn">
        My Work
      </a>
    </section>
  );
};
export default Services;
