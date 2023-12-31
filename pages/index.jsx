import About from "@/src/components/About";
import Blog from "@/src/components/Blog";
import Contact from "@/src/components/Contact";
import Skills from "@/src/components/Skills";
import Testiminails from "@/src/components/Testiminails";
import Layout from "@/src/layouts/Layout";
import Certification from "@/src/components/Certification";
import TypingAnimation from "@/src/components/TypingAnimation";
import dynamic from "next/dynamic";

const Work = dynamic(() => import("@/src/components/Work"), {
  ssr: false,
});

const Index3 = () => {
  return (
    <Layout headerColor={"dark"}>
      {/* Home Banner */}
      <section id="home" className="home-banner-01">
        <div className="container">
          <div className="row full-screen align-items-center p-100px-tb">
            <div className="col-md-6">
              <div className="ht-text">
                <h1>Dariusz Grzegorczyk</h1>
                <h2>
                  I Am Passionate Salesforce <TypingAnimation />
                </h2>
                <p>
                  Solving Challenges, Delivering Excellence: Salesforce
                  Professional Focused on Results
                </p>
                <div className="btn-bar go-to">
                  <a className="m-btn m-btn-theme" href="#work">
                    my work
                  </a>
                  <a className="m-btn m-btn-t-theme" href="#contactus">
                    Hire Me
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <img src="static/img/people.jpg" alt="image" />
            </div>
          </div>
        </div>
        <div className="go-to go-to-next">
          <a href="#about">
            <span />
          </a>
        </div>
      </section>

      {/* End Home Banner */}
      {/* about us */}
      <About />
      {/* end about us */}
      {/* fun */}
      <Skills />
      {/* End fun */}
      {/* resume */}
      <Certification />
      {/* End resume */}
      {/* Work */}
      <Work />
      {/* End work */}
      {/* Testiminails */}
      {/* <Testiminails /> */}
      {/* End Testiminails */}
      {/* Blog */}
      {/* <Blog /> */}
      {/* End Blog */}
      <Contact />
    </Layout>
  );
};
export default Index3;
