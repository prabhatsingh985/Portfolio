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
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
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
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "DSA Enthusiast",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "AI/ML Developer",
      icon: creator,
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "DSA",
      company_name: "",
      icon: tesla,
      iconBg: "#383E56",
      date: "Sept 2022 - Present",
      points: [
        "Excellent Command on C++ in solving DSA questions",
        "Solved 500+ Questions on Geeks for Geeks and ranked in top 1 in my Institute",
        "Knight level on leetcode and solved 1100+ questions on this platform .",
        "Pupil level on codeforces, and Solved 700+  Problems",
        "Completed Javascript Algorithms and Data Structures courser on Coursera",
        ,
      ],
    },
    {
      title: "Web Developer",
      company_name: "",
      icon: starbucks,
      iconBg: "#E6DEDD",
      date: "Oct 2022 - Oct 2023",
      points: [
        "Achieved Different Certifications in Web Devlopment and Created many Projects.",
        "First Project was Real Estate Service Webpage followed by a Fully Responsive Food Delivery Webpage",
        "Created a tic tac toe and Shopping cart app  using react followed by a Portfolio Website.",
        
      ],
    },
    {
      title: "React Developer",
      company_name: "freeCodeCamp",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2023 - Oct2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Created exciting projects using React, including a Shopping Cart app and a DatePicker.",
        "Created a Rent-Car-Service app using React, followed by a Genius AI project.",
       
      ],
    },
    {
      title: "AI/ML  Developer",
      company_name: "",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Oct 2023 - Present",
      points: [
        "Learning AI/ML  from different platform.",
        "Completed Supervised Machine Learning: Regression and Classification coursera on Coursera .",
        "Participating in code reviews and providing constructive feedback to other developers.",
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
      name: "Genius AI ",
      description:
        "The SaaS AI platform offers versatility for users to inquire about any topic across various domains and effortlessly generate images, videos, and music. It includes a strategic upsell opportunity for a pro model with enhanced features and provides the capability to generate custom code, meeting diverse user needs with precision and efficiency.",
      tags: [
        {
          name: "Reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/prabhatsingh985/Genius",
    },
    
    {
      name: "Shopping Cart ",
      description:
        "The Shopping Cart app is a dynamic web application developed using React, HTML, CSS, and JavaScript. Users can browse products, add items to their cart, adjust quantities, and remove items as needed. The app offers a seamless and intuitive user interface, ensuring a smooth and enjoyable shopping experience.",
      tags: [
        {
          name: "Reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/prabhatsingh985/Shopping-Cart",
    },
    {
      name: "Tic Tac Toe",
      description:
        "The Tic Tac Toe game is an interactive web application crafted using HTML, CSS, and JavaScript. Players can engage in the classic game, taking turns to place Xs and Os on a 3x3 grid. The application features a sleek and responsive design, ensuring an enjoyable and user-friendly experience for players of all ages.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/prabhatsingh985/Tic-Tac-Toe",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };