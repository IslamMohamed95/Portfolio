import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Projects.css";
import { Pagination } from "swiper/modules";

function Projects({ project }) {
  return (
    <div ref={project} className="MobProjects">
      <h1>Projects</h1>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <div className="project">
            <h1>Prefabricated Web</h1>
            <div>
              Responsive website for prefabricated construction company with
              full access to control all the data through the website starting
              with :-
              <br />
              - Website to view all the company projects and modules that can be
              provided
              <br />
              - Login to dash board for admin and clients also
              <br /> - Overview for all salesmen performance monthly and yearly
              <br />
              - Overview for the total performance according to the number of
              projects still in progress and the completed projects
              <br />
              - Ability to create new or edit admin, salesmen, and contract
              (note : access to change for admins only) <br />
              -Client Page for review his own projects and ability to pause any
              projects according to any type of reasons
              <br />
              (note: the reason must be explained) Activate to view larger
              image,
              <ul>
                <li>
                  <a
                    href="https://www.housed.ae/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Site
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/IslamMohamed95/Prefab_Construction_Co"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </li>
              </ul>
            </div>
            <ul id="techs">
              <li>
                <i className="fa-brands fa-react"></i>
              </li>
              <li>
                <i className="fa-brands fa-node"></i>
              </li>
              <li>
                <i className="fa-brands fa-bootstrap"></i>
              </li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="project">
            <h1>MoCha Social Media</h1>
            <div>
              Social Media web application for interaction with other users same
              as any social media applications. you can create a new account and
              , login, creating posts and comments, Add and delete friends and
              chatting
              <ul>
                <li>
                  <a
                    href="https://mo-cha-client.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Site
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/IslamMohamed95/MoCha-Social-Web-App"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </li>
              </ul>
            </div>
            <ul id="techs2">
              <li>
                <i className="fa-brands fa-angular"></i>
              </li>
              <li>
                <i className="fa-brands fa-node"></i>
              </li>
              <li>
                <i className="fa-brands fa-bootstrap"></i>
              </li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="project">
            <h1>Todo List</h1>
            <div>
              TodoList with modern and creative design design.It has many
              actions can be taken like add or delete a todo. you can make a
              filtration according to todo status
              <ul>
                <li>
                  <a
                    href="https://profound-froyo-27b081.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Site
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/IslamMohamed95/TodoList"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </li>
              </ul>
            </div>
            <ul id="techs3">
              <li>
                <i className="fa-brands fa-react"></i>
              </li>
              <li>
                <i className="fa-brands fa-bootstrap"></i>
              </li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="project">
            <h1>Smart Calculator</h1>
            <div>
              Smart calculator with history for all of previous operations and
              giving you the ability to edit any previous operation if you
              messed any number also you can reset all the operations like
              normal calculator
              <ul>
                <li>
                  <a
                    href="https://comfy-pithivier-1d9f74.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Site
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/IslamMohamed95/Calculator"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </li>
              </ul>
            </div>
            <ul id="techs4">
              <li>
                <i className="fa-brands fa-react"></i>
              </li>
              <li>
                <i className="fa-brands fa-bootstrap"></i>
              </li>
            </ul>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Projects;
