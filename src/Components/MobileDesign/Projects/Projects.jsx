import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Projects.css";
import { Pagination } from "swiper/modules";

function Projects({ project }) {
  let projects = [
    {
      title: "📚 Fekra Center",
      content: (
        <p>
          <span>Target Audience:</span>
          <br />
          - Offers free online sessions for primary and preparatory school
          students.
          <br />
          <span>Modern & Responsive Design:</span>
          <br />
          - Clean and engaging interface optimized for all devices.
          <br />
          - User-friendly experience tailored for students and parents.
          <br />
          <span>Integrated Dashboard:</span>
          <br />
          - Full backend control for administrators.
          <br />
          - Supports CRUD operations for managing courses, sessions, and user
          data.
          <br />
          <span>Educational Focus:</span>
          <br />
          - Enables scalable and structured digital learning aligned with
          academic needs.
          <br />
          <span>Business Value:</span>
          <br />- Combines accessibility, performance, and management tools for
          a complete e-learning solution.
        </p>
      ),
      techs: [
        <i className="fa-brands fa-react" />,
        <i className="fa-brands fa-node" />,
        <i className="fa-brands fa-bootstrap" />,
      ],
      website: "https://housed.vercel.app/",
      github: "https://github.com/IslamMohamed95/House-Design-Client",
    },
    {
      title: "🏚️ House Design",
      content: (
        <p>
          <span>Industry Focus:</span>
          <br />
          - Designed for a company specializing in prefabricated construction
          services.
          <br />
          <span>Modern & Responsive Design:</span>
          <br />
          - Clean, user-friendly interface with intuitive navigation optimized
          for all devices.
          <br />
          <span>Integrated CRM System:</span>
          <br />
          - Custom-built backend for internal use. Supports full CRUD operations
          tailored to the company’s service model. Enhances project management
          and administrative control.
          <br />
          <span>Client Portal Access:</span>
          <br />- Allows clients to securely log in. Track real-time progress of
          their ongoing projects. Improves transparency and communication
          throughout all construction stages.
        </p>
      ),
      techs: [
        <i className="fa-brands fa-react" />,
        <i className="fa-brands fa-node" />,
        <i className="fa-brands fa-bootstrap" />,
      ],
      website: "https://housed.vercel.app/",
      github: "https://github.com/IslamMohamed95/House-Design-Client",
    },
    {
      title: "🗨️ MoCha",
      content: (
        <p>
          <span>
            Custom-built social media platform inspired by Facebook, designed
            with simplicity and ease of use in mind.
          </span>
          <br />
          <span>Features:</span>
          <br />
          -clean and intuitive UI, eliminating unnecessary complexity for a
          smooth user experience.
          <br />
          - Supports full post management including create, edit, and delete
          functionalities.
          <br />
          - Enables users to add or remove friends, enhancing social interaction
          across the platform.
          <br />
          - Allows users to edit personal profiles, including updating personal
          information and uploading profile images.
          <br />
          -Built to demonstrate core social media functionalities within a
          streamlined environment.
        </p>
      ),
      techs: [
        <i className="fa-brands fa-react" />,
        <i className="fa-brands fa-node" />,
        <i className="fa-brands fa-bootstrap" />,
      ],
      website: "https://housed.vercel.app/",
      github: "https://github.com/IslamMohamed95/House-Design-Client",
    },
  ];
  return (
    <div ref={project} className="MobProjects">
      <h1>Projects</h1>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        {projects.map((p, i) => (
          <SwiperSlide>
            <div className="project" key={i}>
              <h1>{p.title}</h1>
              <div>
                {p.content}
                <ul>
                  <li>
                    <a href={p.website} target="_blank" rel="noreferrer">
                      View Site
                    </a>
                  </li>
                  <li>
                    <a href={p.github} target="_blank" rel="noreferrer">
                      Github
                    </a>
                  </li>
                </ul>
              </div>
              <ul id="techs">
                {p.techs.map((t, i) => (
                  <React.Fragment>
                    <li key={i}>{t}</li>
                  </React.Fragment>
                ))}
              </ul>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Projects;
