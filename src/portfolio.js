const intro = {
  username: "Nick Radtke",
  title: "Hey! Thanks for stopping by, I'm Nick!",
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
  title: "What I do",
  subTitle:
    "Full stack developer, exploring different tech stacks and creating awesome projects",
  skills: [
    " Develop highly interactive front end user interfaces for your web and mobile applications",
    " Progressive Web Applications ( PWA ) in normal and SPA Stacks",
    "Integration of third party services such as Firebase and AWS Amplify",
  ],
  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire",
    },
  ],
  display: true,
};
const educationInfo = {
  display: false,
  schools: [
    {
      schoolName: "University Wisconsin Milwaukee",
      //   logo: require("./assets/images/"),
      subHeader: "International Economics",
      duration: "September 2009 - May 2012, Spring 2015, Fall 2019",
      desc: "Studied Finance and Accounting, eventually switching to International Economics.",
      descBullets: [
        "2009-2010 Student Housing Counsel Senator",
        "2009-2011 UWM Triathlon Team",
      ],
    },
    {
      schoolName: "devCodeCamp",
      //   logo: require("./assets/images/"),
      subHeader: "Full Stack Software Development",
      duration: "August 2020 - October 2020",
      desc: "Focused on building full-stack applications with a range of , ...",
      descBullets: [
        " C# | ASP.NET, 3.1/5.0, Core, MVC, WebAPI, Entity Framework | Python | JavaScript | SQL | React | MERN Stack | Git/GitHub | APIs | Web Services | Testing/Unit Testing | HTML5/CSS3 | Data Structures | Algorithms | BootStrap 4",
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
const githubRepo = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "NCRadtke00",
  showGithubProfile: "true",
  display: true,
};
const contactInfo = {
  title: "Contact Me",
  subtitle:
    "Let's discuss one of my projects, or a project you'd like me to work on, my inbox is open for all.",
  number: "(262) 420 - 6008 ",
  email_address: "ncradtke@uwm.edu",
};
const twitterDetails = {
  userName: "", //Replace "" with twitter username without @
  display: true,
};
const myProjects = {
  title: "My Projects",
  subtitle: "Some Projects I've created to improve my skills",
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
      projectDesc: "Capstone Project at devCodeCamp",
      footerLink: [
        {
          name: "Visit Code",
          url: "",
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
          name: "Visit Project",
          url: "",
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
  githubRepo,
  contactInfo,
  twitterDetails,
  myProjects,
};
