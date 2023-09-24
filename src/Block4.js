const Block4 = () => {
  return (
    <>
      <div className="block-background visible" id="POR">
        <div className="block4">
          <div className="heads block4-heading">&#60;POR&gt;</div>
          <div className="vertical-line" style={{ marginLeft: "3em" }}></div>
          <div className="block3-WorkEx">
            <div
              className="block4-WorkEx-background hvr1"
              style={{ boxShadow: "0 0 10px 0.01px black" }}
            >
              <div style={{ marginBottom: "10px" }}>
                <div className="LTI">Mathematics Association</div>
                <div className="LTI-role">Head of Design and Publicity</div>
              </div>
              <div className="LTI-points">
                <div>
                  – Achieved 40% growth in participant numbers for the
                  institute’s technical event, compared to the previous year.
                </div>
                <div>
                  – Assisted a Team of 5 members in designing and creation of
                  the Annual Mathematics Magazine
                </div>
              </div>
            </div>

            <div
              className="block4-WorkEx-background hvr2"
              style={{ boxShadow: "0 0 10px 0.01px black" }}
            >
              <div style={{ marginBottom: "10px" }}>
                <div className="LTI">Photography Club</div>
                <div className="LTI-role">Team Member</div>
              </div>
              <div className="LTI-points">
                <div>
                  – Handled and coordinated the setup of the Photography
                  Exhibition during the college fests for 2 consecutive years.
                </div>
                <div>
                  – Conducted recruitment, interviewed 50+ applicants, and led
                  the only double panel of Oasis 2018.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default Block4;
