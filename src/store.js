
export default {
  devSkills: [
    'JavaScript', 'React', 'Enzyme', 'jQuery', 'HTML5', 'CSS/Sass',
    'Bootstrap', 'Node.js', 'Ruby on Rails', 'SQL ', 'PostgreSQL',
    'MVC architecture', 'OOP', 'git', 'GitHub', 'Heroku'
  ],
  designSkills: [
    'Webflow', 'Invision', 'Adobe Creative Suite', 'Sketch',
    'Figma', 'Whimsical', 'Mindnode', 'AutoCad', 'user interviews & testing',
    'branding & creative content'
  ],
  about: "Fullstack web developer coming from a background in industrial design and graphics. " +
  "I love scripting digital experiences for people and can offer a range of both creative and technical skills. " +
  "Always ready to work with any new tools for the job.",
  contactArr: [
    "ALEXANDRA BRINN CAMPBELL", "1+ (602) 625-2503", "Phoenix, Arizona", {href: 'mailto:AlexandraBrinnCampbell@gmail.com', label: 'AlexandraBrinnCampbell@gmail.com', targetBlank: true},
    "GitHub KILLERALIENS",  {href:'https://linkedin.com/in/alexandra-brinn-campbell', label: 'linkedin.com/in/alexandra-brinn-campbell', targetBlank: true} , {href: 'https://killeraliens.github.io/alexandra-brinn/', label:'killeraliens.github.io/alexandra-brinn', targetBlank: true}
  ],
  projects: [
    {
      title: "Doctors Near Me",
      text: "Doctors Near Me is an app that locates and displays medical professionals based on your location, \
        insurance plan, or specialty search inputs. This project utilizes OOJS & constructor functions to pull doctor info from highly nested JSON objects, \
        as well as ES 2017 features to sequence multiple API calls for its filter results. ",
      stack: "Built with HTML5, CSS, jQuery, JavaScript, Better Doctor API, Google Maps JavaScript API, \
        Google Geocoding and Reverse Geocoding APIs",
      link: {href: "https://killeraliens.github.io/doctors-near-me", label: "killeraliens.github.io/doctors-near-me"},
      github: {href: "https://github.com/killeraliens/doctors-near-me", label: "github.com/killeraliens/doctors-near-me"}
    },
    {
      title: "Goat's Guide",
      text: "Goat’s Guide is a heavy metal event & venue database concept as well as an ongoing study in UX design. \
        I am currently reworking this project using React, Express/Node to reduce app loading time, \
        and encourage user participation with the integration of Facebook’s Graph API.",
      stack: "The current live version is built with Ruby on Rails, and utilizes HTML-scraping gems such as Watir and Nokogiri, \
        along with custom background tasks/Sidekiq to collect event data. Uses Devise gem for authentication. \
        PostgreSQL database. Deployed with Heroku.",
      link: {href: "http://www.goatsguide.com", label: "www.goatsguide.com"},
      github: {href: "https://github.com/killeraliens/goats-guide", label: "github.com/killeraliens/goats-guide"}
    }
  ],


}
