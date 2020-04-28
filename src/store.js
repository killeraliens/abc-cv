export default {
  contact: {
    name: "Your Name",
    phone:  "40+ (666) 666-6666",
    // location: "Transylvania, Romania",
    email: 'youremail@example.com',
    github: { href: 'https://github.com/yourhandle', label: 'yourhandle',  targetBlank: true},
    linkedin: { href:'https://linkedin.com/in/yourprofile', label: '/yourprofile', targetBlank: true} ,
    website: { href: 'https://yourwebsite.example', label:'yourwebsite.example', targetBlank: true}
  },
  skillsetsA: [
    `Postgres`, `Express`, `React`, `Node.js`, `Ruby on Rails`, `HTML5`, `CSS/SCSS`,
    `Bootstrap`, `jQuery`, `SQL`, `MVC architecture`, `REST API`, `OOP`, `git & GitHub`,
    `Heroku`, `now & Zeit`, `Mocha, Chai, Supertest`, `Jest, Enzyme`
  ],
  skillsetsB: [
    `Webflow`, `Invision`, `Adobe Creative Suite`, `Sketch`, `Figma`, ` Whimsical`,
    `Mindnode`, `feature inventories`, `paper prototypes`,
    `user interviews & testing`, `branding & creative content`
  ],
  projects: [
    {
      title: "Project Title A",
      text: `Project description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Sed euismod nisi porta lorem mollis. Montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada.`, //inlineLink is in this paragraph
      stackSkills: [
        `Postgres`, `Express`, `React`, `Node.js`, `Figma`, ` Whimsical`, ` feature inventories`
      ],
      link: { href: "https://reactjs.org/docs/typechecking-with-proptypes.html", label: "aprojectsite.com" },
      inlineLink: { href: "https://reactjs.org/docs/typechecking-with-proptypes.html", label: "additional link here" } // optional
    },
    {
      title: "Project Title B",
      text: `Project description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Sed euismod nisi porta lorem mollis. Montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada.`, //inlineLink is in this paragraph
      stackSkills: [
        `Ruby on Rails`, `HTML5`, `CSS/SCSS`,`Bootstrap`,
        `branding & creative content`
      ],
      link: { href: "https://reactjs.org/docs/typechecking-with-proptypes.html", label: "bprojectsite.com"},
      // inlineLink: { href: "https://reactjs.org/docs/typechecking-with-proptypes.html", label: "here." }, // optional
    }
  ],
  education: [
    {title: "Education Title, Location", date: "Month YYYY - Month YYYY"},
    {title: "Course Title, Course Description", date: "Month - Month YYYY"},
    {title: "University Title, Location", date: "Degree Title, YYYY"},
  ],
  experiences: [
    {
      date: 'YYYY - Current',
      title: 'Company Name',
      role: 'Role Title',
      textBullets: [
        'Amet consectetur adipiscing elit duis tristique sollicitudin nibh sit amet.',
        'Sed euismod nisi porta lorem mollis. Montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada.',
        'Placerat in egestas erat imperdiet sed euismod nisi.'
      ],
      link: { href: 'https://reactjs.org/docs/typechecking-with-proptypes.html', label: 'LinkLabel' }
    },
    {
      date: 'YYYY - YYYY',
      title: 'Company Name',
      role: 'Role Title',
      textBullets: [
        'Amet consectetur adipiscing elit duis tristique sollicitudin nibh sit amet.Sed euismod nisi porta lorem mollis.Montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada.'
    ],
      // link: { href: 'https://reactjs.org/docs/typechecking-with-proptypes.html', label: 'LinkLabel' }
    },
    {
      date: 'Month - Month YYYY',
      title: 'Company Name',
      role: 'Role Title',
      textBullets: [
        'Viverra nibh cras pulvinar mattis nunc sed. Aenean pharetra magna ac placerat vestibulum lectus.',
        'Cursus turpis massa tincidunt dui ut ornare lectus sit. Sem integer vitae justo eget magna fermentum iaculis eu non. Sit amet nulla facilisi morbi tempus iaculis. '
      ],
      link: { href: 'https://reactjs.org/docs/typechecking-with-proptypes.html', label: 'LinkLabel' }
    },
    {
      date: 'YYYY - YYYY',
      title: 'Company Name',
      role: 'Role Title',
      textBullets: [
        'Tortor dignissim convallis aenean et. Viverra nibh cras pulvinar mattis nunc sed. Aenean pharetra magna ac placerat vestibulum lectus.',
        'Placerat in egestas erat imperdiet sed euismod nisi.',
        'Sem integer vitae justo eget magna fermentum iaculis eu non.'
      ],
      // link: { href: 'https://reactjs.org/docs/typechecking-with-proptypes.html', label: 'LinkLabel'}
    },
  ]
}
