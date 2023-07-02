const Services = () => {
  return (
    <section id="services" className="section gray-bg">
      <div className="container">
        <div className="row sm-m-25px-b m-35px-b">
          <div className="col-md-12">
            <div className="section-title">
              <h3 className="dark-color text-uppercase">Certification</h3>
              <p className="text-uppercase small">
                Demonstrating Proficiency as a Salesforce Developer
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {/* feaure box */}
          <div className="col-sm-6 col-lg-4 m-15px-tb">
            <div className="feature-box-1 box-shadow-lg">
              <div className="feature-content">
                <h5>Salesforce Certified Administrator </h5>
                <br />
                <a
                  target="_blank"
                  href="https://trailhead.salesforce.com/en/credentials/certification-detail-print/?searchString=po0fMJYvUfW5xcgb3LJIyhSDgvcpekAVh+ROcdY3/7w12iavU32mwVCilGBCKREr"
                >
                  <img
                    className="serviceImage m-15px-tb"
                    src="static/img/admin.png"
                    alt="image"
                  />
                </a>
              </div>
            </div>
          </div>
          {/* / */}
          {/* feaure box */}
          <div className="col-sm-6 col-lg-4 m-15px-tb">
            <div className="feature-box-1 box-shadow-lg">
              <div className="feature-content">
                <h5>Salesforce Certified Associate </h5>
                <br />
                <a
                  target="_blank"
                  href="https://trailhead.salesforce.com/en/credentials/certification-detail-print/?searchString=po0fMJYvUfW5xcgb3LJIyhSDgvcpekAVh+ROcdY3/7w12iavU32mwVCilGBCKREr"
                >
                  <img
                    className="serviceImage m-15px-tb"
                    src="static/img/associate.png"
                    alt="image"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* / */}
          {/* feaure box */}
          <div className="col-sm-6 col-lg-4 m-15px-tb">
            <div className="feature-box-1 box-shadow-lg">
              <div className="feature-content">
                <h5>Trailhead Double Star Ranger</h5>
                <br />
                <a
                  href="https://trailblazer.me/id/dgrzegorczyk"
                  target="_blank"
                >
                  <img
                    className="serviceImage m-15px-tb"
                    src="static/img/double ranger.png"
                    alt="image"
                  />
                </a>
              </div>
            </div>
          </div>
          {/* / */}
        </div>
      </div>
    </section>
  );
};
export default Services;
