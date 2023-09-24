const Block5 = () => {
  return (
    <>
      <div className="block-background visible" id="Work%20Experience">
        <div className="block3">
          <div className="block3-WorkEx">
            <div
              className="block3-WorkEx-background hvr1"
              style={{ boxShadow: "0 0 20px 1px black" }}
            >
              <div style={{ marginBottom: "10px" }}>
                <div className="LTI">LTI MINDTREE</div>
                <div className="LTI-role">Software Development</div>
              </div>
              <div className="LTI-points">
                <div>
                  – Worked on Spectra, a DataOps platform designed for managing
                  and building complex data pipelines.
                </div>
                <div>
                  – Managed and debugged more than 20 micro-services with
                  Kubernetes and ensured their functionality.
                </div>
                <div>
                  –Developed a shell script to automate a MySQL data cleanup
                  activity, which saves 3 hours of effort weekly.
                </div>
                <div>
                  –Managed and solved server-side issues, and deployed the
                  product on production and testing environments.
                </div>
              </div>
            </div>

            <div
              className="block3-WorkEx-background hvr2"
              style={{ boxShadow: "0 0 20px 1px black" }}
            >
              <div style={{ marginBottom: "10px" }}>
                <div className="LTI">Kansai Nerolac Paints</div>
                <div className="LTI-role">Automation Analyst</div>
              </div>
              <div className="LTI-points">
                <div>
                  Developed a web scraping tool utilizing UI Path to automate
                  data extraction from various websites.
                </div>
                <div>
                  – Researched the application of Robotic Process
                  Automation(RPA) in different divisions within the company.
                </div>
                <div>
                  – Prepared detailed documentation covering different RPA
                  products and accompanying case studies.
                </div>
              </div>
            </div>
          </div>

          <div className="vertical-line" style={{ marginLeft: "3em" }}></div>
          <div className="heads block3-heading">
            &#60;Programming Skills&gt;
          </div>
        </div>
      </div>
    </>
  );
};

export default Block5;
