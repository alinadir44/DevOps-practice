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

const Education = () => {
  const subjects = {
    OLevelSubjects: [
      "Mathematics",
      "English Language",
      "Physics",
      "Chemistry",
      "Biology",
      "History",
      "Geography",
      "Economics",
      "Accounting",
      "Computer Science",
      "French",
      "Spanish",
      "Art and Design",
      "Physical Education",
      "Islamic Studies"
    ],
    ALevelSubjects: [
      "Mathematics",
      "Further Mathematics",
      "English Literature",
      "Physics",
      "Chemistry",
      "Biology",
      "History",
      "Geography",
      "Economics",
      "Accounting",
      "Computer Science",
      "French",
      "Spanish",
      "Art and Design",
      "Physical Education",
      "Psychology",
      "Sociology",
      "Philosophy",
      "Business Studies",
      "Music",
    ],
  };

  return (
    <section className="padding" id="education">
      <h2 style={{ textAlign: "center" }}>Education</h2>
      <h3 style={{ textAlign: "center" }}>A list of courses I have studied since 9th grade</h3>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ width: "50%" }}>
          <div style={{ textAlign: "center", font: "30px" }}>A level subjects</div>
          <div className="container" style={{ width: "100%" }}>
            {subjects.ALevelSubjects.map((subject) => (
              <div className="box" key={subject}>
                <h3 style={{ flexBasis: "40px" }}>{subject}</h3>
              </div>
            ))}
          </div>
        </div>
        <div style={{ width: "50%" }}>
          <div style={{ textAlign: "center", font: "30px" }}>O level subjects</div>
          <div className="container" style={{ width: "100%" }}>
            {subjects.OLevelSubjects.map((subject) => (
              <div className="box" key={subject}>
                <h3 style={{ flexBasis: "40px" }}>{subject}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
