import React from 'react';
import Header from "./components/Header";
import SkillsContainer from "./components/SkillsContainer";
import {Skill} from "./types/Types";

const skills: Skill[] = [
    {
        name: "LINUX",
        icon: "/tempIcons/linux.png"
    },
    {
        name: "AWS",
        icon: "/tempIcons/aws.svg"
    },
    {
        name: "CI/CD",
        icon: "/tempIcons/cicd.png"
    },
    {
        name: "SQL",
        icon: "/tempIcons/sql.png"
    },
    {
        name: "PHP",
        icon: "/tempIcons/php.png"
    },
    {
        name: "NEXTJS",
        icon: "/tempIcons/nextjs.svg"
    },
    {
        name: "TYPESCRIPT",
        icon: "/tempIcons/typescript.png"
    },
    {
        name: "REACT",
        icon: "/tempIcons/react.svg"
    },
    {
        name: "REACT NATIVE",
        icon: "/tempIcons/react-native.svg"
    },
    {
        name: "GIT",
        icon: "/tempIcons/git.svg"
    },
]

function App() {
  return (
      <div>

          <img className="floatingStyle1" style={{position: "absolute", width: 200, opacity: 0.3, top: 250, right: 350}} src="/svgs/union_27.svg" alt=""/>

          <img style={{position: "absolute", width: 500, maxWidth: "100%", opacity: 0.1, bottom: 0, left: 0}} src="/svgs/union_35.svg" alt=""/>


          <Header />

          <div className="home">
              <div className="text">
                  <h1>
                      Get Your<br/>
                      Software system<br/>
                      From me.
                  </h1>

                  <div className="underHeader">
                      <a className="button" href="resume.pdf" download>
                          Download CV
                      </a>

                      <p>
                          from crm/erp to e-commerce to any custom System <br />
                          passion and innovation fill my heart.
                      </p>
                  </div>
              </div>

              <div>
                  <img src="/my-picture.png" alt="Nour Abo Elsoud" />
              </div>
          </div>

          <SkillsContainer skills={skills} />


      </div>
  );
}

export default App;
