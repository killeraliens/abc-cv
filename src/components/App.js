import React from 'react'
import './App.css'
import IconNav from './IconNav'
import store from '../store.js'
import PdfDownload from './PdfDownload'
import ContactSection from './ContactSection'
import AboutSection from './AboutSection'
import SkillsSection from './SkillsSection'
import ProjectsSection from './ProjectsSection'
import ExperiencesSection from './ExperiencesSection'
import EducationSection from './EducationSection'
// while localhost:3000 is serviving, `npm run generate` before updating this path and deleting the template pdf.
import cvPdf from '../assets/your-name-here-cv.pdf'

function App() {
  return (

    <div id='App' className="App live">
      <nav className="live-only download-nav">
        <PdfDownload path={cvPdf}/>
      </nav>

      {/* -----PAGE ONE----- */}
      <main className="cv-pdf">
        <div className="grid-template">

          <div className="contact-lft">
            <ContactSection contactObject={store.contact} />
          </div>

          <div className="col-one">
            <AboutSection>
              About. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </AboutSection>
            <SkillsSection
              skillsTitle="Skills Title A"
              skillsArray={store.skillsetsA} />
            <SkillsSection
              skillsTitle="Skills Title B"
              skillsArray={store.skillsetsB} />
            <ProjectsSection projectsArray={store.projects} moreProjectsLink={store.contact.website}/>
          </div>


          <div className="col-two">
            <ExperiencesSection experienceArray={store.experiences} />
            <EducationSection educationArray={store.education} />
          </div>
        </div>
      </main>

      <footer className="footer live-only">
        <IconNav contact={store.contact}/>
        <span>Made with <a href="https://github.com/killeraliens/abc-cv" aria-label="link to abc-cv template repo" target="_blank" rel="noopener noreferrer">abc-cv</a> template by killeraliens.</span>
      </footer>

    </div>
  );
}

export default App;
