import React from 'react';
import SectionTitle from './SectionTitle';
import Skills from './Skills';
import ProjectTitle from './ProjectTitle';
import IconNav from './IconNav';
import cvPdf from '../assets/alexandra-brinn-campbell-cv.pdf';
import store from '../store.js';
import './App.css';
import PdfDownload from './PdfDownload';


function App() {

  return (
    <div className="App">
      <nav className="live-only download-nav">
        <PdfDownload path={cvPdf}/>
      </nav>

      {/* -----PAGE ONE----- */}
      <main className="cv-pdf">
        <div className="grid-template">


          <div className="contact-lft">
            <section>
              <ul className="contact-ul">
                  <li><b>Alexandra Campbell</b></li>
                  <li><b>{store.contact.phone}</b></li>
                  <li>
                    <b>{store.contact.email.preLabel}</b>
                    {' '}
                    <a href={store.contact.email.href} aria-label="link to email" >{store.contact.email.label}</a>
                  </li>
                  <li>
                    <b>{store.contact.github.preLabel}</b>
                    {' '}
                    <a href={store.contact.github.href} aria-label="link to my Github" target="_blank" rel="noopener noreferrer">{store.contact.github.label}</a>
                  </li>
                  <li>
                    <b>{store.contact.linkedin.preLabel}</b>
                    {' '}
                    <a href={store.contact.linkedin.href} aria-label="link to my LinkedIn" target="_blank" rel="noopener noreferrer">{store.contact.linkedin.label}</a>
                  </li>
                  <li>
                    <b>{store.contact.website.preLabel}</b>
                    {' '}
                    <a href={store.contact.website.href} aria-label="link to my Website" target="_blank" rel="noopener noreferrer">{store.contact.website.label}</a>
                  </li>
              </ul>
            </section>
          </div>



          <div className="col-one">

            <section >
              <p className="intro-p" >
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
              <SectionTitle title="Projects"/>
              {store.projects.map((project, i) => {
                return (
                  <div className="project" key={i}>
                    <ProjectTitle title={project.title} link={project.link}/>
                    <p>
                        {project.text}{' '}{project.inlineLink && !!project.inlineLink.href
                        ? <a href={project.inlineLink.href} target="_blank" rel="noopener noreferrer">{project.inlineLink.label}</a>
                      : null}
                    </p>
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
          <div className="col-two">

            <section>
              <SectionTitle title="Experience"/>
              {store.experiences.map((exp, i) => {
                return(
                  <div className="experience" key={i}>
                    <SectionTitle className="date" title={exp.date} />
                    <ProjectTitle title={exp.title} link={exp.insta} role={exp.role}/>
                    <ul className="section-list">
                      {exp.textBullets.map((bull, i) => <React.Fragment key={i}><span style={{float: 'left'}}>•</span><li>{bull}</li></React.Fragment>)}
                    </ul>
                  </div>
                )
              })}
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
        </div>
      </main>

      <footer className="footer live-only">
        <IconNav contact={store.contact}/>
        <span>Made with <a href="https://github.com/killeraliens/abc-cv" aria-label="link to abc-cv template repo" target="_blank">abc-cv</a> template by killeraliens.</span>
      </footer>

    </div>
  );
}

export default App;
