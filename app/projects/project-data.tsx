export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "Calculator iOS",
    year: 2024,
    description:
      "This SwiftUI Calculator project is designed to create a functional and visually appealing calculator app for iOS devices. It incorporates basic arithmetic operations and a user-friendly interface while showcasing the use of SwiftUI's declarative syntax and state management capabilities.",
    url: "https://github.com/Msouss/IOS-Calculator",
  },
  {
    title: "Cinema App",
    year: 2024,
    description:
      "The cinema is an app using JavaFX that allows the user to selects movies and seats to reserve their order.",
    url: "https://github.com/Msouss/Java",
  },
  {
    title: "PHP game",
    year: 2024,
    description:
      "This project is a dynamic web application built in PHP that challenges users with a series of puzzles while incorporating a \"life system\" to increase the game's challenge and engagement. The platform combines HTML, CSS, and JavaScript for the front-end with PHP and a database (like MySQL) for back-end logic and user data management.",
    url: "https://github.com/Msouss/Php",
  },
];
