import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";

const Work = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".portfolio-content", {
        itemSelector: ".grid-item",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".grid-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    //     return () => isotope.current.destroy();
  }, []);
  return (
    <section id="work" className="section">
      <div className="container">
        <div className="row sm-m-25px-b m-35px-b">
          <div className="col-md-12">
            <div className="section-title">
              <h3 className="dark-color text-uppercase">My Projects</h3>
              <p className="text-uppercase small">
                Showcasing Success Stories and Innovative Solutions
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="portfolio-content lightbox-gallery">
          <div className="grid-item product branding">
            <div className="portfolio-box-01">
              <div className="portfolio-img">
                <a href="https://github.com/DarGrz/The-app ">
                  <img src="static/img/portfolio-1.jpg" alt="image" />
                </a>
              </div>
              <div className="portfolio-info">
                <h5>GOFFER</h5>
                <span>
                  Goffer is an exciting new app designed to bring people
                  together and enhance social connections in the real world
                </span>
              </div>
              <a
                target="_blank"
                className="link-overlay"
                href="https://github.com/DarGrz/The-app "
              />
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item product branding">
            <div className="portfolio-box-01">
              <div className="portfolio-img">
                <a href="https://dargrz.github.io/Dom-z-pompa-website/">
                  <img src="static/img/portfolio-2.jpg" alt="image" />
                </a>
              </div>
              <div className="portfolio-info">
                <h5>Dom z pompą</h5>
                <span>
                  This is a website for an HVAC (heating, ventilation, and air
                  conditioning) company. The website is built using JavaScript,
                  HTML, and CSS, and includes a contact form implemented using
                  PHP.
                </span>
              </div>
              <a
                target="_blank"
                className="link-overlay"
                href="https://dargrz.github.io/Dom-z-pompa-website/"
              />
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item product branding">
            <div className="portfolio-box-01">
              <div className="portfolio-img">
                <a href="https://hpcnextjs-dargrz.vercel.app/">
                  <img src="static/img/portfolio-3.jpg" alt="image" />
                </a>
              </div>
              <div className="portfolio-info">
                <h5>HeatPump Compare </h5>
                <span>
                  HeatPump Compare is a web application developed with Next.js,
                  designed to assist users in comparing various heating pumps
                  available in the market.
                </span>
              </div>
              <a
                target="_blank"
                className="link-overlay"
                href="https://hpcnextjs-dargrz.vercel.app/"
              />
            </div>
          </div>{" "}
        </div>{" "}
        {/* portfolio-content */}
      </div>
    </section>
  );
};
export default Work;
