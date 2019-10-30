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

          <div className="contact-lft">
            <section>
              <ul className="contact-ul" style={{marginTop: 0}}>
                <li><b>Alexandra Campbell</b></li>
                <li><b>{store.contact.phone}</b></li>
                <li><b>{store.contact.email.label}</b></li>
                 <li>
                  <b>{store.contact.github.preLabel}</b>
                  {' '}
                  <a href={store.contact.github.href} aria-label="link to my Github">{store.contact.github.label}</a>
                </li>
                <li>
                  <b>{store.contact.website.preLabel}</b>
                  {' '}
                  <a href={store.contact.website.href} aria-label="link to my Github">{store.contact.website.label}</a>
                </li>
              </ul>
            </section>
          </div>
          {/*<div className="contact-rt">
            <section>
              <ul className="contact-ul" style={{marginTop: 0}}>
                <li style={{textAlign: 'right'}}>
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
                </li>

              </ul>
            </section>
          </div>*/}
          <div className="col-one">


            <section>
              {/*<SectionText className="intro" text={store.intro} />
              <SectionText text={store.about} />*/}
              <p style={{marginTop: 0, fontStyle: 'italic'}}>
                {/*<b>{store.intro}</b>*/}
                {' '}
                {/*<b>{store.about}</b>*/}
                {store.about}
              </p>
            </section>

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
          <div className="col-two">

            <section>
              <SectionTitle title="Experience"/>
              {store.experiences.map((exp, i) => {
                return(
                  <div className="experience" key={i}>
                    <SectionTitle className="date" title={exp.date} />
                    <ProjectTitle title={exp.title} link={exp.insta} role={exp.role}/>
                    <ul className="section-list">
                      {exp.textBullets.map(bull => <li><span>•</span>{bull}</li>)}
                    </ul>
                  </div>
                )
              })}
            </section>

            <section>
              <SectionTitle title="Projects"/>
              {store.projects.map((project, i) => {
                return (
                  <div className="project" key={i}>
                    <ProjectTitle title={project.title} link={project.link}/>
                    <SectionText text={project.text}/>


                    <Skills skills={project.stackSkills} />
                  </div>
                )
              })}
              <p><b>You can find more projects on my website at
                {' '}
                <a href={store.contact.website.href} target="_blank" rel="noopener noreferrer">{store.contact.website.label}</a>
              </b></p>
            </section>


          </div>
        </main>
      </div>

    </div>
  );
}

export default App;
