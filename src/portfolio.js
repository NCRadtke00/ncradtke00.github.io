const intro = {
  username: "Nick Radtke",
  title: "Welcome to my portfolio, I'm Nick!",
  subTitle:
    "I'm a passionate Full Stack Software Developer and problem-solver. I have experience designing and building Web and Mobile applications with C#, .Net, HTML, CSS, JavaScript, Reactjs, Node, SQL, and some other cool libraries, databases, and frameworks!",
  resumeLink:
    "https://docs.google.com/document/d/1kGInjx7H5coX7gJyoCCvqHdBFycG3uKliluubm4Jl0Q/edit?usp=sharing",
  displayIntro: true,
};
const socialMediaLinks = {
  github: "https://github.com/NCRadtke00",
  linkedin: " https://www.linkedin.com/in/nicholasradtke/",
  gmail: "raddnc@gmail.com",
  facebook: "https://www.facebook.com/",
  instagram: "https://www.instagram.com/",
  twitter: "https://twitter.com/",
  display: true,
};
const skillsSection = {
  title: "Skill Section",
  subTitle:
    "As a full stack developer, I'm always exploring different tech stacks and creating new awesome projects",
  skills: [
    "~I enjoy developing interactive front end user interfaces for web and mobile applications",
    "~I build reliable back end servers to ensure data is communicated from databases to the user",
    "~From time to time I integrate third party services such as Firebase, Youtube, and Stripe",
  ],
  frontendSkills: [
    {
      skillName: "HTML-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "CSS-3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "SASS",
      fontAwesomeClassname: "fab fa-sass",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "React.js",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "Redux",
      fontAwesomeClassname: "",
    },
    {
      skillName: "Razor Pages",
      fontAwesomeClassname: "",
    },
    {
      skillName: "Tailwind",
      fontAwesomeClassname: "",
    },
    {
      skillName: "Styled-Components",
      fontAwesomeClassname: "",
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "",
    },
  ],
  backendSkills: [
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "NPM",
      fontAwesomeClassname: "fab fa-npm",
    },
    {
      skillName: "Asp.Net",
      fontAwesomeClassname: "",
    },
    {
      skillName: "C#",
      fontAwesomeClassname: "",
    },
  ],
  otherSkills: [
    {
      skillName: "SQL-database",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire",
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git",
    },
    {
      skillName: "Stripe",
      fontAwesomeClassname: "fab fa-cc-stripe",
    },
    {
      skillName: "AdobeXD",
      fontAwesomeClassname: "",
    },
  ],
  display: true,
};
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "devCodeCamp",
      logo: require("./assests/images/dcc.png"),
      subHeader: "Full Stack Software Development",
      duration: "August 2020 - October 2020",
      desc: "Focused on building full-stack applications with C#/.NET and JavaScript Librarys",
      descBullets: [
        " C# | ASP.NET, 3.1/5.0, Core, MVC, WebAPI, Entity Framework | JavaScript | SQL | Node | React | MERN Stack | Git/GitHub | APIs | Web Services | Testing/Unit Testing | HTML5/CSS3 | Data Structures | Algorithms | BootStrap4",
      ],
    },
    {
      schoolName: "University Wisconsin Milwaukee",
      logo: require("./assests/images/UWM.svg"),
      subHeader: "International Economics",
      duration: "September 2009 - May 2012, Spring 2015, Fall 2019",
      desc: "Studied Finance and Accounting, eventually switching to International Economics.",
      descBullets: [
        "2009-2010 Student Housing Counsel Senator",
        "2009-2011 UWM Triathlon Team",
        "2019 Student Vetran America representive",
      ],
    },
  ],
};
const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Frontend",
      progressPercentage: "90%",
    },
    {
      Stack: "Backend",
      progressPercentage: "70%",
    },
    {
      Stack: "Programming",
      progressPercentage: "80%",
    },
  ],
  displayCodersrank: true,
};
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Intern",
      company: "MacGregor Partners",
      //   companylogo: require("./assets/images/"),
      date: "June 2021 - July 2021",
      desc: "Learned JDA Blue Yonder's Wearhouse Management System",
      descBullets: [
        "building custom view pages",
        "create database queries",
        "implement software",
        "troubleshoot GUI and PUTTI issues with the software",
      ],
    },
    {
      role: "Information Technology Specialist",
      company: "US Army Reserves",
      //   companylogo: require("./assets/images/"),
      date: "March 2019 - Present",
      desc: "I provide and maintain vital signal support for feild hospital operations, as well as a wide range of technical support and assistance.",
    },
    {
      role: "Senior Designer",
      company: "The Tile Shop",
      //   companylogo: require("./assets/images/"),
      date: "May 2017 – July 2018",
      desc: "I designed and sold tile related building materials for a wide range of projects. The projects I worked on range from designing bathrooms in home, offices, manicipal buildings, schools,",
    },
  ],
};
const contactInfo = {
  title: "Contact Me",
  subtitle:
    "Let's discuss one of my projects, a project you'd like me to work on, or a possible role you would like me to fill!",
  number: " (262) 420 - 6008 ",
  email_address: " NCRadtke@uwm.edu ",
};
const myProjects = {
  title: "Projects",
  subtitle: "Check out some of my projects",
  projects: [
    {
      //   image: require("./assets/images/"),
      projectName: "Portfolio",
      projectDesc: "Personal portfolio",
      footerLink: [
        {
          name: "Visit Portfolio",
          url: "NCRadtke00.github.io",
        },
        // optional add extra buttons here
      ],
    },
    {
      //   image: require("./assets/images/"),
      projectName: "Sudys",
      projectDesc:
        "Capstone Project at devCodeCamp, build with C#/.Net MVC, Razor pages, GoogleMaps API, GeoCode API, Bootstrap, and Stripe",
      footerLink: [
        {
          name: "Visit Code",
          url: "https://github.com/NCRadtke00/SudsCapstone",
        },
      ],
    },
    {
      //   image: require("./assets/images/"),
      projectName: "NotYouTube",
      projectDesc:
        "A clone of youtube to avoid ads, and improve my skills with react and API's",
      footerLink: [
        {
          name: "Visit NotYoutube",
          url: "https://ncr-ytc.web.app/auth",
        },
      ],
    },
    {
      //   image: require("./assets/images/"),
      projectName: "NetflixClone",
      projectDesc:
        "A netflix clone project, since netflix uses react I figured it would be a great project to improve my skills and get practice. ",
      footerLink: [
        {
          name: "Visit NotNetflix",
          url: "https://netflix-clone-83724.web.app/",
        },
      ],
    },
  ],
  display: true,
};
export {
  intro,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  contactInfo,
  myProjects,
};
