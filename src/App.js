import React from 'react';
import SectionTitle from './SectionTitle';
import SectionText from './SectionText';
import Skills from './Skills';
import Contact from './Contact';
import ProjectTitle from './ProjectTitle';
import './App.css';
import store from './store.js'
import profileImg from './assets/alexandra-brinn-profile.jpg';
import cvPdf from './assets/alexandra-brinn-campbell-cv.pdf';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFileDownload } from '@fortawesome/free-solid-svg-icons'


function App() {

  return (
    <div className="App live">
      <header className="live-only download-header">
        <a className="live-only" href={cvPdf} rel="noopener noreferrer" target="_blank" download> <FontAwesomeIcon icon={faFileDownload}></FontAwesomeIcon> download my CV</a>
      </header>

      {/* -----PAGE ONE----- */}
      <div className="cv-pdf">
        <main className="grid-template">
          <div className="contact">
            {/*<Contact items={store.contactArr} imgObj={store.profileImg} img={profileImg}/>*/}
             <Contact contactObj={store.contact} />
          </div>
          <div className="col-one">

            <section className="contact">
              <img src={profileImg} className="inline-circle-img" alt={store.profileImg.alt}/>
              <SectionText className="intro" text={store.intro} />

              <SectionText text={store.about} />
            </section>

         <section>
              <SectionTitle title="Contact"/>
              <ul className="contact-ul">
                <li><b>Ali Campbell</b></li>
                <li><b>{store.contact.phone}</b></li>
                <li><b>{store.contact.email.label}</b></li>
                <li style={{marginTop: 8}}>
                  <a href={store.contact.github.href} aria-label="link to my Github">
                    <FontAwesomeIcon icon={faGithubSquare}></FontAwesomeIcon>
                  </a>
                  {'  '}
                  <a href={store.contact.linkedin.href} aria-label="link to my LinkedIn">
                    <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                  </a>
                  {'  '}
                  <a href={store.contact.email.href} aria-label="link to my Email">
                    <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                  </a>
                  {'  '}
                  {/*<a href={store.contact.website.href} aria-label="link to my website">
                    <span>site</span>
                  </a>*/}
                </li>
              </ul>
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

          <div className="contact live-only large">
             <Contact contactObj={store.contact} />
          </div>

          <div className="col-one">
            <section>
              <SectionTitle title="Projects"/>
              {store.projects.map((project, i) => {
                return (
                  <div className="project" key={i}>
                    <ProjectTitle title={project.title} link={project.link}/>
                    <SectionText text={project.text}/>
                    <SectionText text={project.stack} project={project} />
                  </div>
                )
              })}
              <p><b>You can find more projects on my</b>{' '}
                <a href={store.contact.website.href} target="_blank" rel="noopener noreferrer">website</a>
              {' '}
              <b>at {store.contact.website.label}</b></p>
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
