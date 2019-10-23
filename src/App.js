import React from 'react';
import SectionTitle from './SectionTitle';
import SectionText from './SectionText';
import Skills from './Skills';
import Contact from './Contact';
import './App.css';
import store from './store.js'


function App() {

  return (
    <div className="App">
      <div className="cv-pdf">
        <main className="grid-template">
          <div className="contact">
             <Contact items={store.contactArr} />
          </div>
          <div className="col-one">
            <section>
              <SectionTitle title="About"/>
              <SectionText text={store.about}/>
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
            </section>
          </div>
          <div className="col-two">
              <SectionTitle title="Projects"/>
              <SectionTitle title="Experience"/>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
