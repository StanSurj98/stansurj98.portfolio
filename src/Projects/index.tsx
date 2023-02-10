export interface ProjectInterface {
  name: string;
  description: string;
  url: string;
  imageURL: string;
}

export const projectsList: ProjectInterface[] = [
  {
    name: "Gamer Gear",
    description:
      "Full-stack informercial site for gaming peripherals, visitors are able to see which gaming peripherals are currently dominating the market by game and used by the most professional players in the E-Sports scene. Built on NextJS with ReactTS.",
    url: "https://gamer-gear.vercel.app/home",
    imageURL: "gamer_gear_collage.png",
  },
  {
    name: "What's Brewin'",
    description:
      "Full-stack application on React, Express and PSQL helping beer lovers travel anywhere and view on a map, all the local breweries/brew-pubs in the area.",
    url: "https://github.com/StanSurj98/whats.brewin",
    imageURL: "whats_brewin_collage.png",
  },
  {
    name: "2D Point n' Shoot Game",
    description:
      'A simple 2D "Point and Shoot" game built with vanilla JS, HTML and CSS as an exercise in collision detection, delta time, and array data structures.',
    url: "https://github.com/StanSurj98/Point_n_Shoot_2D_JS_Game",
    imageURL: "2d_point_n_shoot.png",
  },
  {
    name: "Interview Scheduler",
    description:
      "A full stack application that allow users to create, edit and delete interview appointments.",
    url: "https://github.com/StanSurj98/interview-scheduler",
    imageURL: "interview_scheduler_collage.png",
  },
  // {
  //   name: "MindFULL+",
  //   description: "Hackathon challenge project for Hack The Change 2022. Students answer polls created by teachers in regards to learning methods. OpenAI microservice for sentiment analysis on responses to find true reasons behind ineffective teaching methods.\n\nFront-end: React, Typescript, Styled-Components\nBack-end: Express, PostgresQL, Prisma, Python, FastAPI, OpenAI, Docker",
  //   url: "https://github.com/StanSurj98/MindFULL",
  //   imageURL: ""
  // },
  {
    name: "Jungle",
    description:
      "A full stack e-commerce project with Ruby on Rails with Stripe integration.",
    url: "https://github.com/StanSurj98/Jungle",
    imageURL: "jungle_collage.png",
  },
  {
    name: "Tweeter",
    description:
      "A Twitter clone to learn front-end web development. Our first Single Page Application exercise during bootcamp.",
    url: "https://github.com/StanSurj98/Tweeter",
    imageURL: "tweeter_collage.png",
  },
];
