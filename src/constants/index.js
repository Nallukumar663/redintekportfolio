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
  carrent,
  jobit,
  tripguide,
  threejs,
  redintek,
  number1,
  number2,
  number3,
  number4,
  number5,
  number6
} from "../assets";
import {redmicro} from '../assets/index';
import { redmicrosoft } from "../assets/index";
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Services",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Development",
    icon: web,
  },
  {
    title: "Mobile App Development",
    icon: mobile,
  },
  {
    title: "Digital Marketing",
    icon: backend,
  },
  {
    title: "Media",
    icon: creator,
  },
  {
    title : "Cyber Security",
    icon: mobile,
  },{
    title : " ",
    icon : redintek
  }
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
    title: "Web Development",
    icon: number1,
    iconBg: "#E6DEDD",
    points: [
      "We handle innovative technologies to develop cutting-edge, user-friendly websites that boost our customers’ business and ensure a strong web presence, significantly empowering your business on the World Wide Web landscape.",
    ],
  },
  {
    title: "Mobile App Development",
    icon: number2,
    iconBg: "#E6DEDD",
    points: [
      "In this business era, the demand for mobile apps is increasing exponentially. Our experts ensure innovative solutions to handle your challenges and meet your business needs using modern technologies.",
    ],
  },
  {
    title: "Cyber Security",
    icon: number3,
    iconBg: "#E6DEDD",
    points: [
      "All an attacker needs is a single vulnerability, discover more about how we robustly and proactively protect your business from sophisticated cyber attacks..",
    ],
  },
  {
    title: "Digital Marketing",
    icon: number4,
    iconBg: "#E6DEDD",
    points: [
      "We provides a powerful digital marketing strategy through Search Engine Optimization (SEO) and social media optimization(SMO). A good SEO approach is an important factor in growing any business in this changing online marketing.",
    ],
  },
  {
    title: "Media",
    icon: number5,
    iconBg: "#E6DEDD",
    points: [
      "Our team creates a competitive edge for your social  marketing. We provide paid ads, graphic design, etc., enhancing your social media presence.",
    ],
  },
  {
    title: "SEO & SMM Services",
    icon: number6,
    iconBg: "#E6DEDD",
    points: [
      "Our team offers Search Engine Optimization and Social Media Marketing services to enhance our customer’s business, fostering digital brand growth.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: redmicro,
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: redmicrosoft,
  },
];

const projects = [
  {
    name: "Quick Support",
    description:
      "We provide 24×7 support service to our clients because our team gives importance to support our clients at their needy time We have passionate professionals that manages customer relationships in everything we do.",
    tags: [
    
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Dedicated Team",
    description:
      "We address our clients' business challenges in a customized way so our team comes up with an effective solution to the problem. Redintek always focus on innovative ideas to handle customers issues.",
    tags: [

    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "99% client satisfaction",
    description:
      "Redintek team always maintains the trust of our clients and we provide quality services that always satisfy our customers.",
    tags: [
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
