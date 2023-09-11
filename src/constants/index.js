import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  kubernetes,
  golang,
  ethereum,
  hardhat,
  netflixClone,
  todoList,
  beachResorts,
  techStore,
  disneyClone,
  linkedinClone,
  portfolioV1,
  natours,
  fundMe,
  raffle,
  mintrrs,
  pumpkinIndex,
  thetaFans,
  nekoDex,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "2x Web3 Hackathon Winner 🏆",
    icon: creator,
  },
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Blockchain Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "golang",
    icon: golang,
  },
  {
    name: "ethereum",
    icon: ethereum,
  },
  {
    name: "hardhat",
    icon: hardhat,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Kubernetes",
    icon: kubernetes,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Backend Developer Intern",
    company_name: "Studiovity",
    icon: "", // icon image file
    iconBg: "#383E56",
    date: "July 2023 - September 2023",
    points: [
      "Developed and maintained REST APIs using NodeJS, ExpressJS and MongoDB",
      "Implemented Receipt / PDF generation on the backend side",
      "Writing documentation for the APIs implemented by other developers as well as myselves",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "NEKO-DEX",
    description:
      "A Cute Cat-Themed DeFi Protocol on Polygon, OKX & Fantom Networks, the protocol includes Decentralized Exchange, Liquidity Pools, LP Tokens Staking, Donations, AAVE Staking, and so much more.",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "Hardhat",
        color: "yellow-text-gradient",
      },
      {
        name: "Solidity",
        color: "pink-text-gradient",
      },
    ],
    image: nekoDex,
    source_code_link: "https://github.com/JustUzair/NEKO-DEX",
  },
  {
    name: "Thetafans",
    description:
      "Thetafans solves the problem of costly intermediaries in content monetization by leveraging blockchain technology, enabling direct and secure transactions between creators and fans without the need for intermediaries, such as payment processors, resulting in increased revenue for creators",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "Hardhat",
        color: "yellow-text-gradient",
      },
      {
        name: "Solidity",
        color: "pink-text-gradient",
      },
    ],
    image: thetaFans,
    source_code_link: "https://github.com/JustUzair/ThetaFans",
  },
  {
    name: "Pumpkin-Index",
    description:
      "An index token is like a basket that holds many different types of cryptocurrencies at once, allowing investors to invest in several cryptocurrencies through one token",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "Hardhat",
        color: "yellow-text-gradient",
      },
      {
        name: "Solidity",
        color: "pink-text-gradient",
      },
    ],
    image: pumpkinIndex,
    source_code_link: "https://github.com/JustUzair/Pumpkin-Protocol",
  },
  {
    name: "Mintrrs",
    description:
      "An NFT minting site that generates different Arts based on the layers generated and uploaded by the artists. The website is a crossover between Web2 and Web3, where artist can generate upto hundreds and thousands of arts just with a few scribbles",
    tags: [
      {
        name: "NodeJS",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "yellow-text-gradient",
      },
      {
        name: "Pug",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
    ],
    image: mintrrs,
    source_code_link: "https://github.com/JustUzair/NFT-Generator",
  },
  {
    name: "Raffle | Decentralized Lottery",
    description:
      "You can enter the raffle using a Goerli test net, or if you want you can spin a hardhat node locally and enter the raffle as well.",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "Hardhat",
        color: "yellow-text-gradient",
      },
      {
        name: "Solidity",
        color: "pink-text-gradient",
      },
    ],
    image: raffle,
    source_code_link: "https://github.com/JustUzair/Hardhat-Raffle",
  },
  {
    name: "Solidity Fund-Me",
    description:
      "This project demonstrates a basic Hardhat (Solidity) use case . It comes with a sample contract, a test for that contract, and a script that deploys that contract.",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "Hardhat",
        color: "yellow-text-gradient",
      },
      {
        name: "Solidity",
        color: "pink-text-gradient",
      },
    ],
    image: fundMe,
    source_code_link: "https://github.com/JustUzair/Full-Stack-Fund-Me",
  },
  {
    name: "Natours",
    description:
      "A tours and travels website for trekking and exploring nature. The website includes functionalities like JWT Authentication, Sign Up, Login, Forgot Password, Reset Password, Upload Profile Photo, Pay and Book your tour, Submit, edit and remove their reviews, receive emails in real time, and much more. In addition to all this, the website is taken care of responsiveness, optimizations, security, etc.",
    tags: [
      {
        name: "NodeJS",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "yellow-text-gradient",
      },
      {
        name: "Pug",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
    ],
    image: natours,
    source_code_link: "https://github.com/JustUzair/Natours",
  },
  {
    name: "Portfolio-V1",
    description:
      "A Portfolio Website, to showcase my personal projects, achievements and skills. The website is made using Next.JS, TypeScript, Tailwind CSS and Framer-Motion. The project supports various types of filters for projects, Dark and Light Themes, etc. In addition the website is also taken care of responsiveness, optimizations, deployment, etc. All the other projects are showcased within the portfolio website 🤞🤞.",
    tags: [
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "NextJS",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind",
        color: "orange-text-gradient",
      },
      {
        name: "Framer-motion",
        color: "yellow-text-gradient",
      },
    ],
    image: portfolioV1,
    source_code_link: "https://github.com/JustUzair/Portfolio-V1",
  },
  {
    name: "LinkedIn Clone",
    description:
      "ReactJS, Firebase and Redux based LinkedIn Clone. It uses Firestore to store posts and uses Google Auth to provide login functionality. Logged In users can also post an article and attach an image or video link which will be stored in firebase in real-time. Also the Post description supports profanity filter upto some extent.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
      {
        name: "FirestoreDB",
        color: "yellow-text-gradient",
      },
    ],
    image: linkedinClone,
    source_code_link: "https://github.com/JustUzair/react-linkedin-clone",
  },
  {
    name: "Disney Clone",
    description:
      "Disney Plus clone. It uses ReactJS, and Firebase auth along with FirestoreDB to store the data. You can log in with Google account too. Also do not forget to hover on the disney, marvel, etc, logos (Click in mobile devices). They have cool little effects",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
      {
        name: "FirestoreDB",
        color: "yellow-text-gradient",
      },
    ],
    image: disneyClone,
    source_code_link: "https://github.com/JustUzair/disney-plus-clone",
  },
  {
    name: "Netflix Clone",
    description:
      "A Netflix Clone, with firebase authentication. You can create an account with any random email and password and sign in using that credentials. The web app makes use of tMDb API(TheMovieDatabase API) to load movies and shows into the app. As there wasn't any database, this project is front-end only. And the project is made using ReactJS and Firebase(only for authentication).API:- tMDb.TEST CREDENTIALS Email: - abcabc@gmail.com Password: -abcabc",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "yellow-text-gradient",
      },
      ,
    ],
    image: netflixClone,
    source_code_link: "https://github.com/JustUzair/react-netflix-clone",
  },
  {
    name: "Tech Store",
    description:
      "ReactJS based project called tech store, which is an online tech hardware store built using ReactJS, Bootstrap, Contentful (Headless CMS), and also includes PayPal sandbox payment. The website is pure ReactJS and is front-end only and it uses the static data from Contentful API. Test Credentials for paypal sandbox are:    Email:-abc@techstore.com Password:-abcdabcd",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Contentful",
        color: "green-text-gradient",
      },
      ,
    ],
    image: techStore,
    source_code_link: "https://github.com/JustUzair/react-tech-store",
  },
  {
    name: "Beach Resorts",
    description:
      "Showcasing available rooms in the resort and providing info for the same. Technologies used:- ReactJS and Contentful (CMS/BYOF)",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Contentful",
        color: "green-text-gradient",
      },
      ,
    ],
    image: beachResorts,
    source_code_link: "https://github.com/JustUzair/react-beach-resorts",
  },
  {
    name: "To-Do List",
    description: "This is a basic to-do list app made using ReactJS",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      ,
    ],
    image: todoList,
    source_code_link: "https://github.com/JustUzair/react-todo-list",
  },
];

export { services, technologies, experiences, testimonials, projects };
