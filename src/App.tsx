import React from 'react';
import Header from "./components/Header";

function App() {
  return (
      <div>

          <img style={{position: "absolute", width: 200, opacity: 0.3, top: 250, right: 350}} src="/svgs/union_27.svg"/>

          <img style={{position: "absolute", width: 500, opacity: 0.1, bottom: 0, left: 0}} src="/svgs/union_35.svg"/>


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
                  <img src="/my-picture.png" />
              </div>
          </div>


      </div>
  );
}

export default App;
