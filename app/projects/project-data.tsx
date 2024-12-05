export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "Calculator iOS",
    year: 2023,
    description:
      "This SwiftUI Calculator project is designed to create a functional and visually appealing calculator app for iOS devices. It incorporates basic arithmetic operations and a user-friendly interface while showcasing the use of SwiftUI's declarative syntax and state management capabilities.",
    url: "https://github.com/Msouss/Ios",
  },
  {
    title: "Cinema app",
    year: 2022,
    description:
      "The Cinema app is an Android application built in Java that allows users to browse, search, and explore information about movies. The app aims to replicate the core functionalities of platforms like IMDb, offering a clean and user-friendly interface. It serves as a resource for movie enthusiasts to discover new films, check ratings, view trailers, and read reviews.",
    url: "https://github.com/Msouss/Java",
  },
  {
    title: "PHP game",
    year: 2021,
    description:
      "This project is a dynamic web application built in PHP that challenges users with a series of puzzles while incorporating a \"life system\" to increase the game's challenge and engagement. The platform combines HTML, CSS, and JavaScript for the front-end with PHP and a database (like MySQL) for back-end logic and user data management.",
    url: "https://example.com/",
  },
];
