const About = () => {
  return (
    <section id="about" className="section gray-bg">
      <div className="container">
        <div className="row sm-m-25px-b m-35px-b">
          <div className="col-md-12">
            <div className="section-title">
              <h3 className="dark-color text-uppercase">ABOUT ME</h3>
              <p className="text-uppercase small">
                Discover the Journey of a Salesforce Developer
              </p>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-5 m-15px-tb">
            <div className="about-me-img box-shadow">
              <img src="static/img/about-us.jpg" alt="image" />
              <div className="nav social-icon">
                {/* <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#">
                  <i className="fab fa-instagram" />
                </a> */}
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/dariusz-grzegorczyk-958731190/"
                >
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-7 m-15px-tb">
            <div className="about-me">
              <h4>I'M DARIUSZ GRZEGORCZYK</h4>
              <h6>
                A Salesforce{" "}
                <span className="theme-color">
                  Developer &amp; Administrator{" "}
                </span>
                based in <span className="theme-color">Krakow, Poland</span>
              </h6>
              <p>
                I'm a results-driven Salesforce professional with a strong
                background in both administration and development. I possess
                excellent problem-solving skills, and my experience in sales and
                customer service enhances my ability to understand business
                needs and deliver exceptional results. Currently, I am actively
                seeking new opportunities.
              </p>
              <div className="row about-list">
                <div className="col-md-6">
                  <div className="media">
                    <label>Residence</label>
                    <p>Poland</p>
                  </div>
                  <div className="media">
                    <label>Address</label>
                    <p>Krakow, Poland</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="media">
                    <label>E-mail</label>
                    <p>d.grzegorczyk@outlook.com</p>
                  </div>
                  <div className="media">
                    <label>Phone</label>
                    <p>+ 48 737 798 819</p>
                  </div>
                </div>
              </div>
              <div className="btn-bar">
                <a
                  target="_blank"
                  className="m-btn m-btn-theme"
                  href="/public/static/doc/dariusz_grzegorczyk_resume.pdf"
                  download
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
