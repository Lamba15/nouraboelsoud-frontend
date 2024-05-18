import React, { useEffect, useState } from "react";
import ScrollNavigation from "react-single-page-navigation";
import SkillsContainer from "./components/SkillsContainer";
import { SERVICE_URL } from "./Constants";
import { Project, Skill } from "./types/Types";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import Testimonials from "./components/Testimonials";
import Services from "./components/Services";

function App() {
  const [projects, setProjects] = useState<Project[]>([]);

  const [skills, setSkills] = useState<Skill[]>([]);

  const navigate = useNavigate();

  const { projectId } = useParams();

  const [isVisible, setIsVisible] = useState(false);

  const elements = {
    aboutMe: {},
    skills: {},
    services: {},
    testimonials: {},
    projects: {},
  };

  useEffect(() => {
    function getSkills() {
      fetch(`${SERVICE_URL}get-skills`, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      })
        .then(function (res) {
          return res.json();
        })
        .then(function (data) {
          if (data.code === 1) {
            setSkills(data.data);
            getProjects();
          } else {
            // todo handle error
          }
        })
        .catch(() => {
          // todo handle error
        });
    }

    function getProjects() {
      fetch(`${SERVICE_URL}get-projects-public`, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      })
        .then(function (res) {
          return res.json();
        })
        .then(function (data) {
          if (data.code === 1) {
            setProjects(data.data);
          } else {
            // todo handle error
          }
        })
        .catch(() => {
          // todo handle error
        });
    }

    getSkills();
  }, []);

  function handleProjectClick(id: number) {
    navigate("/projects/" + id);
  }

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      if (window.pageYOffset > 0) {
        header && header.classList.add("scrolled");
        setIsVisible(true);
      } else {
        header && header.classList.remove("scrolled");
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ScrollNavigation elements={elements} offset={-70}>
      {({ refs, activeElement, goTo }) => (
        <>
          <svg
            style={{
              width: "100%",
              position: "absolute",
              top: "calc(var(80px) * -1)",
              left: 0,
              zIndex: -1,
            }}
            data-name="BottomWaves"
            className="BottomWaves "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#fff"
              d="M0,32L60,26.7C120,21,240,11,360,37.3C480,64,600,128,720,133.3C840,139,960,85,1080,80C1200,75,1320,117,1380,138.7L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
            ></path>
          </svg>

          <img
            className="floatingStyle1"
            style={{
              position: "absolute",
              width: 200,
              opacity: 0.3,
              top: 250,
              left: 450,
            }}
            src="/svgs/union_27.svg"
            alt=""
          />

          <img
            style={{
              position: "absolute",
              width: 500,
              maxWidth: "100%",
              opacity: 0.1,
              bottom: 700,
              left: 0,
            }}
            src="/svgs/union_35.svg"
            alt=""
          />

          <img
            style={{
              position: "absolute",
              width: 500,
              maxWidth: "100%",
              transform: "rotateY(180deg)",
              opacity: 0.2,
              bottom: 1420,
              right: 0,
            }}
            src="/svgs/union_30.svg"
            alt=""
          />

          <img
            className="floatingStyle1"
            style={{
              position: "absolute",
              width: 500,
              bottom: 2000,
              maxWidth: "100%",
              opacity: 0.2,
              left: 0,
            }}
            src="/svgs/group_582.svg"
            alt=""
          />

          {/*<Header/>*/}
          <div className="header">
            <div className={"container"}>
              <div className={"logo-container"}>
                <a href="/" className="logo-link">
                  <img
                    id={"logo-image"}
                    src="/logos/my-logo-squared-144.png"
                    style={
                      isVisible
                        ? {
                            marginTop: 12,
                            height: 50,
                            marginBottom: 12,
                          }
                        : { marginTop: 12, height: 144, marginBottom: 12 }
                    }
                    alt="logo"
                  />
                  <span
                    style={
                      isVisible ? { display: "flex" } : { display: "none" }
                    }
                    className={`logoText `}
                  >
                    <span>Nour</span> <span>Abo Elsoud</span>
                  </span>
                </a>
              </div>

              <div className={"navigation"}>
                <div
                  onClick={() => goTo("aboutMe")}
                  className={activeElement === "aboutMe" ? "active" : ""}
                >
                  About
                </div>

                <div
                  onClick={() => goTo("skills")}
                  className={activeElement === "skills" ? "active" : ""}
                >
                  Skills
                </div>

                <div
                  onClick={() => goTo("services")}
                  className={activeElement === "services" ? "active" : ""}
                >
                  Services
                </div>

                <div
                  onClick={() => goTo("testimonials")}
                  className={activeElement === "testimonials" ? "active" : ""}
                >
                  Testimonials
                </div>

                <div
                  onClick={() => goTo("projects")}
                  className={activeElement === "projects" ? "active" : ""}
                >
                  Projects
                </div>
              </div>
            </div>
          </div>

          <div ref={refs.aboutMe} className="home">
            <div className="text">
              <h1>
                Get Your
                <br />
                Software System
                <br />
                From{" "}
                <span style={{ color: "#9767b7", fontWeight: 500 }}>Nour</span>.
              </h1>

              <div className="underHeader">
                <a className="button" href="resume.pdf" download>
                  Download Resume
                </a>

                <p>
                  Passionate full stack developer from CRM/ERP to Platforms{" "}
                  <br />
                  any custom System innovation fill my heart.
                </p>
              </div>
            </div>

            <img src="/my-picture.png" alt="Nour Abo Elsoud" />
          </div>

          <AboutMe />

          <div ref={refs.skills}>
            <SkillsContainer skills={skills} />
          </div>

          <div ref={refs.services}>
            <Services />
          </div>

          <div ref={refs.testimonials}>
            <Testimonials />
          </div>

          <div ref={refs.projects}>
            <Projects
              projects={projects}
              projectClick={(id) => handleProjectClick(id)}
            />
          </div>

          <Outlet
            context={[
              projects.find(
                (project) => project.id.toString() === projectId ?? "-1",
              )?.markdownDescription,
              projects.find(
                (project) => project.id.toString() === projectId ?? "-1",
              )?.skills,
              projects.find(
                (project) => project.id.toString() === projectId ?? "-1",
              )?.name,
            ]}
          />

          <footer>
            <svg
              style={{
                width: "100%",
                transform: "rotate(180deg)",
                position: "absolute",
                left: 0,
                zIndex: -1,
              }}
              data-name="BottomWaves"
              className="BottomWaves "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill="#ffffff"
                d="M0,32L60,26.7C120,21,240,11,360,37.3C480,64,600,128,720,133.3C840,139,960,85,1080,80C1200,75,1320,117,1380,138.7L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
              ></path>
            </svg>

            <div className={"container main-container"}>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 12 }}
              >
                <img
                  src={"/logos/my-logo-squared-144.png"}
                  style={{ height: 96, width: "max-content" }}
                  alt={""}
                />
                <span>Nour abo elsoud's portfolio website</span>
              </div>

              <div className={"hire-me"}>
                <a
                  href={
                    "mailto:contact@nouraboelsoud.com?subject=Job Inquiry&body=I saw your 'Hire Me' ad and am interested in your services. Please let me know more about your availability and rates. Thank you for your time and consideration."
                  }
                >
                  <button className={"button"}>Let's talk</button>
                </a>

                <div className={"socials"}>
                  <a
                    className={"social"}
                    rel={"noopener noreferrer"}
                    target={"_blank"}
                    href={
                      "https://www.upwork.com/freelancers/~01b9f10c5ef014f48a"
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 38 30"
                      role="img"
                      aria-hidden="true"
                    >
                      <path
                        fill="#14a800"
                        d="M28.18,19.06A6.54,6.54,0,0,1,23,16c.67-5.34,2.62-7,5.2-7s4.54,2,4.54,5-2,5-4.54,5m0-13.34a7.77,7.77,0,0,0-7.9,6.08,26,26,0,0,1-1.93-5.62H12v7.9c0,2.87-1.3,5-3.85,5s-4-2.12-4-5l0-7.9H.49v7.9A8.61,8.61,0,0,0,2.6,20a7.27,7.27,0,0,0,5.54,2.35c4.41,0,7.5-3.39,7.5-8.24V8.77a25.87,25.87,0,0,0,3.66,8.05L17.34,28h3.72l1.29-7.92a11,11,0,0,0,1.36,1,8.32,8.32,0,0,0,4.14,1.28h.34A8.1,8.1,0,0,0,36.37,14a8.12,8.12,0,0,0-8.19-8.31"
                      ></path>
                    </svg>
                  </a>

                  <a
                    className={"social"}
                    rel={"noopener noreferrer"}
                    target={"_blank"}
                    href={"https://www.facebook.com/pro.lamba15/"}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="100"
                      height="100"
                      viewBox="0 0 48 48"
                    >
                      <path
                        fill="#039be5"
                        d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
                      ></path>
                      <path
                        fill="#fff"
                        d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                      ></path>
                    </svg>
                  </a>

                  <a
                    className={"social"}
                    rel={"noopener noreferrer"}
                    target={"_blank"}
                    href={"https://github.com/Lamba15"}
                  >
                    <svg
                      height="32"
                      aria-hidden="true"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="32"
                      data-view-component="true"
                      className="octicon octicon-mark-github v-align-middle color-fg-default"
                    >
                      <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                    </svg>
                  </a>

                  <a
                    className={"social"}
                    rel={"noopener noreferrer"}
                    target={"_blank"}
                    href={"https://www.linkedin.com/in/nour-abo-elsoud/"}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      data-supported-dps="24x24"
                      fill="#1966c2"
                      className="mercado-match"
                      width="24"
                      height="24"
                      focusable="false"
                    >
                      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </>
      )}
    </ScrollNavigation>
  );
}

export default App;
