/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

const Cert = () => {

    const Certifications = [
      "Certification 1", "Certification 2", "Certification 3", "Certficiation 4",
    ];

  return (
    <section className="padding" id="cert">
      <h2 style={{ textAlign: "center" }}>Certifications</h2>
      <h3 style={{ textAlign: "center" }}>A list of my Certifications</h3>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
          <div className="container" style={{ width: "100%" }}>
            {Certifications.map((cert) => (
              <div className="box" key={cert}>
                <h3 style={{ flexBasis: "40px" }}>{cert}</h3>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Cert;
