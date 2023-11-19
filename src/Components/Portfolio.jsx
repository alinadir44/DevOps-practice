/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React, { useState } from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
// import image from "../images/portfolio.jpg";

// const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */

const Portfolio = () => {
  const projectList = [
    {
      title: "Docker basics teardown",
      description:
        "A simple introduction to the world of Docker with a deep dive into its core concepts",
      url: "https://medium.com/@edgecake88/tearing-down-docker-to-the-basics-15f693cbc86e",
      technologies: ["Docker", "Networks"],
    },
    {
      title: "Working with ports in Docker",
      description: "A reflection on ports and their working in Docker",
      url: "https://medium.com/@edgecake88/working-with-ports-in-docker-247cf9b3166",
      technologies: ["Docker", "Networks"],
    },
    {
      title: "Note It Down",
      description: "An end-to-end note-taking app developed using python",
      url: "https://github.com/alinadir44/NoteItDown",
      technologies: ["Python", "JavaScript", "Node.js"],
    },
    {
      title: "Docker - CMD vs Entrypoint",
      description: "Distinctions between these two important Dockerfile commands",
      url: "https://medium.com/devops-dev/docker-cmd-vs-entrypoint-782754ee67a",
      technologies: ["Docker", "Networks"],
    },
    {
      title: "Hospital Management System",
      description: "An end-to-end hospital management system",
      url: "https://github.com/alinadir44/HMS",
      technologies: ["JavaScript", "Node.js", "React.js", "MySQL"],
    },
    {
      title: "File Auditor in Go",
      description: "Program to log file-level changes(add/remove/delete) in directories",
      url: "https://github.com/alinadir44/NoteItDown",
      technologies: ["Golang", "SQLite", "Cayley"],
    },
  ];
  const [filteredList, setFilteredList] = useState(projectList);

  const filterBySearch = (event) => {
    let query = event.target.value;
    query = query.toLowerCase();

    let updatedList = [...projectList];
    updatedList = updatedList.filter((project) => {
      return project.technologies.find((val) => {
        return val.toLowerCase().includes(query);
      });
    });
    setFilteredList(updatedList);
  };

  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Projects</h2>
      <div style={{ display: "flex", flexDirection: "column", paddingTop: "3rem" }}>
        {/* <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
              animation: "1s ease-out 0s 1 slideIn",
            }}
            alt={imageAltText}
          />
        </div> */}
        <div
          className="search-header"
          style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}
        >
          <div style={{ alignItems: "center" }} className="search-text">
            Search by Technology
          </div>
          <input
            id="search-box"
            style={{ marginLeft: "10px", borderRadius: "10px" }}
            onChange={filterBySearch}
          />
        </div>
        <div className="container">
          {filteredList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
