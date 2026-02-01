// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import appwriteLogo from './assets/tech_logo/appwritelogo.png'
import PHPLogo from './assets/tech_logo/PHPLOGO.png'
// Education Section Logo's
import mpboardLogo from './assets/education_logo/MPBoardLogo.png'
import sirtLogo from './assets/education_logo/SIRT LOGO.png'
import materialuiLogo from './assets/tech_logo/materialuiLogo.png'

// Project Section Logo's
import aitripplannerLogo from './assets/work_logo/AiTrip.png'
import SSEHLogo from './assets/work_logo/SSEH.png'
import theGYMLogo from './assets/work_logo/GYM.png'
import blogspotLogo from './assets/work_logo/blogSpot.png'
import blinkitLogo from './assets/work_logo/blinkit.png'
import netlegends from './assets/work_logo/netlegends.png'


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      // { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],

     
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'Appwrite', logo: appwriteLogo },

      // { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'PHP', logo: PHPLogo },
      // { name: 'Java', logo: javaLogo },
      // { name: 'Python', logo: pythonLogo },
      // { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      // { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      // { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      // { name: 'Figma', logo: figmaLogo },
    ],
  },
];

 export const experiences = [
    {
      id: 0,
      img: netlegends,
      role: "Web Development Internship",
      company: "Net Legends",
      date: "Oct 2025 - Jan 2026",
      desc: "Developed dynamic and scalable web applications using the MERN stack and PHP, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "PHP",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "MySQL",
        "Express JS",
      ],
    }
  ];
  
export const education = [
    {
      id: 0,
      img: sirtLogo,
      school: "Sagar Institute Of Research And Technology, Bhopal",
      date: "july 2022 - july 2026",
      grade: "72.30%",
      desc: "I completed my Bachelor's degree in Computer Science (B-Tech - CSBS) from SIRT College, Bhopal. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at B-Tech College allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Technology (Computer Science And Business System)",
    },
    {
      id: 1,
      img: mpboardLogo,
      school: "Govt BHSS Chand, Chhindwara, Madhya Pradesh",
      date: "Apr 2020 - March 2021",
      grade: "78.40%",
      desc: "I completed my class 12 education from govt boys HS school Chand, Chhindwara under the MP board, where I studied Physics, Chemistry, and Mathematics (PCM).",
      degree: "12th MPBSE - PCM",
    },
    {
      id: 2,
      img: mpboardLogo,
      school: "ShriRam School Chand, Chhindwara, Madhya Pradesh",
      date: "Apr 2018 - March 2019",
      grade: "79.60%",
      desc: "I completed my class 10 education from ShriRam School Chand, Chhindwara under the MP board.",
      degree: "10th MPBSE",
    },
];
  
export const projects = [
    {
      id: 0,
      title: "Ai Trip Planner",
      description:
      "The AI Trip Planner is a web application I built to make travel planning effortless. Its main job is to generate personalized, detailed itineraries based on a user's destination, trip length, budget, and travel companions. The entire platform runs on a modern tech stack, with React.js for the front end and Firebase Authentication and Firestore for secure user sign-ins and saving trip history.",
      image: aitripplannerLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS","Tailwind CSS","API","Firebase","Vite"],
      github: "https://github.com/PremYadav10/Ai-Trip-Planner",
      webapp: "https://ai-trip-planner-one-delta.vercel.app/",
    },
    {
      id: 1,
      title: "Blog Spot 🚀",
      description:
      "Developed a full-stack blogging platform offering users a personalized experience to create, edit, and manage their content. The application leverages Appwrite for secure authentication and efficient data handling, including robust database and storage services. The frontend is built with React.js and styled using Tailwind CSS, ensuring a modern, intuitive, and responsive design across all devices.",
      image: blogspotLogo,
      tags: ["React JS", "Appwrite", "Tailwind CSS", "Auth","Redux"],
      github: "https://github.com/PremYadav10/Blog-Spot",
      webapp: "https://blog-spot-tau.vercel.app/",
    },
    {
      id: 2,
      title: "E-Commerce Website for Electronics Shop",
      description:
        " Designed and developed a responsive website for a local electronics showroom. The site features product categories, company details, and an inquiry form for customer interaction, focus on clean Ul and mobile-friendly design.",
      image: SSEHLogo,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/PremYadav10/shri-shyam-electro-hub",
      webapp: "https://shrishyamelectrohub.netlify.app/",
    },
    {
      id: 3,
      title: "The Gym Web Application",
      description:
      "Developed a responsive web application for a gym, providing members with a modern and interactive user experience.The site features a dynamic interface for viewing and booking class schedules, detailed trainer profiles, and a dedicated section for managing membership details. A key feature is the chatbot-enabled user support, powered by NLP and a Lyro AI-agent, which offers instant assistance for common queries.",
      image: theGYMLogo,
      tags: ["HTML", "CSS", "JavaScript","Lyro AI Agent"],
      github: "https://github.com/PremYadav10/The-GYM",
      webapp: "https://premyadav10.github.io/The-GYM/",
    },
    
    {   
      id: 4,
      title: "Blinkit Clone",
      description:
      "Developed a Blinkit Clone to showcase core front-end skills. Built exclusively with HTML, CSS, and JavaScript, this project demonstrates a solid understanding of fundamental web development principles, including DOM manipulation and event handling, to create a seamless and functional user experience.",
      image: blinkitLogo,
      tags: ["HTML", "CSS","JavaScript" ],
      github: "https://github.com/PremYadav10/Blinkit-Clone",
      webapp: "https://premyadav10.github.io/Blinkit-Clone/",
    },
    // {
    //   id: 5,
    //   title: "Webverse Digital",
    //   description:
    //     "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
    //   image: webverLogo,
    //   tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
    //   github: "https://github.com/codingmastr/Webverse-Digital",
    //   webapp: "https://webversedigital.com/",
    // },
    // {
    //   id: 6,
    //   title: "Coding Master",
    //   description:
    //     "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
    //   image: cmLogo,
    //   tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
    //   github: "https://codingmasterweb.in/",
    //   webapp: "https://codingmasterweb.in/",
    // },

];  