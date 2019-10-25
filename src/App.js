import React from 'react';
import SectionTitle from './SectionTitle';
import SectionText from './SectionText';
import Skills from './Skills';
import Contact from './Contact';
import ProjectTitle from './ProjectTitle';
import './App.css';
import store from './store.js'
import profileImg from './assets/alexandra-brinn-profile.jpg';


function App() {

  return (
    <div className="App">
      <div className="cv-pdf">
        <main className="grid-template">
          <div className="contact">
            {/*<Contact items={store.contactArr} imgObj={store.profileImg} img={profileImg}/>*/}
             <Contact items={store.contactArr} />
          </div>
          <div className="col-one">

            <section className="contact">
              {/*<SectionTitle title="Alexandra Brinn Campbell"/>*/}
              {/*<ProjectTitle title="Alexandra Brinn Campbell"/>*/}
              {/*<Contact items={store.contactArr} imgObj={store.profileImg} img={profileImg}/>*/}
              {/*<SectionText className="intro" text={store.about} imgObj={store.profileImg} img={profileImg}/>*/}
              <img src={profileImg} className="inline-circle-img" alt={store.profileImg.alt}/>
              <SectionText className="intro" text={store.intro} />

              <SectionText text={store.about} />
            </section>


          </div>
          <div className="col-two">

            <section>
              <SectionTitle title="Dev"/>
              <Skills skills={store.devSkills} />
            </section>

            <section>
              <SectionTitle title="UX & UI"/>
              <Skills skills={store.designSkills} />
            </section>

            <section>
              <SectionTitle title="Education"/>
              {store.courses.map((course, i) => {
                return (
                  <div className="course" key={i}>
                    <SectionTitle  className="date" title={course.date}/>
                    <ProjectTitle title={course.title} />
                  </div>
                )
              })}
            </section>

          </div>
        </main>
      </div>

    {/* -----PAGE TWO----- */}
      <div className="cv-pdf">
        <main className="grid-template">
          <div className="contact">
             <Contact items={store.contactArr} />
          </div>
          <div className="col-one">

            <section>
              <SectionTitle title="Projects"/>
              {store.projects.map((project, i) => {
                return (
                  <div className="project" key={i}>
                    <ProjectTitle title={project.title} link={project.link}/>
                    <SectionText text={project.text}/>
                    <SectionText text={project.stack}/>
                  </div>
                )
              })}
            </section>

          </div>
          <div className="col-two">

            <section>
              <SectionTitle title="Experience"/>
              {store.experiences.map((exp, i) => {
                return(
                  <div className="experience" key={i}>
                    <SectionTitle className="date" title={exp.date} />
                    <ProjectTitle title={exp.title} link={exp.insta} role={exp.role}/>
                    <SectionText text={exp.text} />
                  </div>
                )
              })}
            </section>

          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
