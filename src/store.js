
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
  intro: "Alexandra Campbell - AKA Ali. Designer gone full stack web developer.",
  about: "Dedicated programmer coming from a background in industrial design and graphics. \
  I love scripting digital experiences for people and can offer a range of both creative and technical skills. \
  Always ready to work with any new tools for the job.",
  profileImg: {src: "./assets/alexandra-brinn-profile.jpg", alt: "Portrait of Alexandra"},
  contact: {
    name: "ALEXANDRA BRINN CAMPBELL",
    phone:  "1+ (602) 625-2503",
    location: "Phoenix, Arizona",
    email: {preLabel: "email", href: 'mailto:AlexandraBrinnCampbell@gmail.com', label: 'AlexandraBrinnCampbell@gmail.com', targetBlank: false},
    github: {preLabel: "GitHub user", href: 'https://github.com/killeraliens', label: 'killeraliens'},
    linkedin: {preLabel: "LinkedIn", href:'https://linkedin.com/in/alexandra-brinn-campbell', label: 'linkedin.com/in/alexandra-brinn-campbell', targetBlank: true} ,
    website: {preLabel: 'website', href: 'https://killeraliens.github.io/alexandra-brinn/', label:'killeraliens.github.io/alexandra-brinn', targetBlank: true}
  },
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
      stack: "Current version is built with Ruby on Rails, and utilizes HTML-scraping gems such as Watir and Nokogiri, \
        along with custom background tasks/Sidekiq to collect event data. Uses Devise gem for authentication. \
        PostgreSQL database. Deployed with Heroku.",
      link: {href: "http://www.goatsguide.com", label: "www.goatsguide.com"},
      github: {href: "https://github.com/killeraliens/goats-guide", label: "github.com/killeraliens/goats-guide"}
    },
    // {
    //   title: "Excuse Engine",
    //   text: "An app that generates excuses for you based on your location. A great experience in teamwork while using Github/Heroku. Thanks to Janie, Maddie, Mark.",
    //   stack: "Built with Ruby on Rails, JavaScript, traffic & London transport APIs, HTML and CSS",
    //   link: {href: "http://www.excuse-engine.com/", label: "excuse-engine.com"},
    //   github: {href: "https://github.com/maddielewis/excuse-engine", label: "github.com/maddielewis/excuse-engine"}
    // },
  ],
  courses: [
    {title: "Thinkful JavaScript Node Coding Bootcamp", date: "May 2019 - Curr"},
    {title: "Le Wagon London, Ruby on Rails Coding Bootcamp", date: "Jan - Mar 2019"},
    {title: "General Assembly 8 week course in UX design", date: "Feb - Mar 2018"},
    {title: "Emily Carr University, Vancouver BC", date: "BDES Industrial Design, 2007"},
  ],
  experiences: [
    {
      date: 'Apr 2015 - Jul 2018',
      title: 'Burgeon Group',
      role: 'Design Project Manager',
      text: 'Burgeon group is a niche design & build firm with a stellar international reputation for the concept, design, and fabrication of children’s experience in the public library space. My role as design project manager included coordination between  client , design, and fabrication departments.  I worked closely with the CEO/lead designer contributing to client communications, design, and marketing, as well as executed the technical drafting, construction & installation plan documents for our inhouse fabrication teams.',
      insta: {href: 'https://www.instagram.com/burgeongroup/', label: 'instagram @BurgeonGroup'}
    },
    {
      date: '2012 - 2015',
      title: 'Demi Coffee',
      text: 'Developed and operated a small food & beverage concept with a partner. Great experience in customer service, creative offerings, fun with branding. Best cold brew.',
      insta: {href: 'https://www.instagram.com/demicoffee/', label: 'instagram @DemiCoffee'}
    },
    {
      date: '2012 - Current',
      title: 'Curiotile',
      text: 'Personal project in product design. Iterative flatpack designs in stainless and powedercoat steel, custom displays & storage solutions. Website coming soon.',
    },
    {
      date: '2009 - 2013',
      title: 'Ah Diós',
      role: ' Freelance Graphics & Branding',
      text: 'Collaborating with three others in web, film, and UX backgrounds. \
        Brand development and various projects in graphic, signage, web, and packaging for Visual+Intent, Cartel Coffee Lab, Request Manufacturing, Sooh Media +'
    }

  ]

}
