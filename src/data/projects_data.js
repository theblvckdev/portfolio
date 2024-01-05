import SpaceThumnail from "../assets/images/design.png";
import CountryApiThumnail from "../assets/images/desktop-design-home-light.jpg";
import IPAddressThumnail from "../assets/images/desktop-design.jpg";
import PorfolioV1 from "../assets/images/portfolio_v1.png";

export const projects = [
  {
    thumbnail: SpaceThumnail,
    title: "Space Tourism Website",
    content: `Frontend mentor challenge I took to help test and improve my proficiency
    in frontend technologies used today.`,
    liveUrl: "https://space-tourisim-website.vercel.app/",
    tools: ["React", "Tailwind", "Vercel", "Figma"],
  },

  {
    thumbnail: IPAddressThumnail,
    title: "IP Address Tracker",
    content: `Built a web application that consumes a third
    party API that helps get IP address requested by the client, returns it's details, and shows it on a map.`,
    liveUrl: "https://my-ip-address-tracker-react.vercel.app/",
    tools: ["React", "Tailwind", "Vercel", "API", "Leeflet"],
  },

  {
    thumbnail: CountryApiThumnail,
    title: "REST Country API",
    content: `Built a web application that consumes a third
    party API that helps get the details of different countries in the world with their flags.`,
    liveUrl: "https://rest-country-api-frontend-v2.vercel.app/",
    tools: ["React", "Tailwind", "Vercel", "API"],
  },

  {
    thumbnail: PorfolioV1,
    title: "My Portfolio (v2)",
    content: `An old porfolio Site built with HTML, CSS, and a bit of JavaScript.`,
    liveUrl: "https://nathcodes.netlify.app/",
    tools: ["HTML", "CSS", "JavaScript", "Netlify", "Bootstrap"],
  },
];
