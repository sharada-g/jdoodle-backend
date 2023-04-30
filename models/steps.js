const steps = [
  {
    id: 0,
    title: "Choose a Challenge",
    subtitle: "Pick a challenge from our library of 10+ programming questions.",
    subSteps: [
      {
        id: 1,
        description: "Choose from 10+ programming questions.",
      },
      {
        id: 2,
        description: "5 test cases to validate your answers.",
      },
      {
        id: 3,
        description: "Randomly selected 5 programming problems.",
      },
    ],
    image: {
      src: "https://www.hackerrank.com/wp-content/uploads/2022/11/binarytree-1.png",
      alt: "Choose a Challenge",
    },
  },
  {
    id: 1,
    title: "Write and Test Your Code",
    subtitle:
      "Write your code in the browser and test it using JDoodle Websocket APIs.",
    subSteps: [
      {
        id: 1,
        description: "Write your code in the browser.",
      },
      {
        id: 2,
        description: "Test your code using JDoodle REST APIs.",
      },
      {
        id: 3,
        description: "Submit your answers to all problems.",
      },
    ],
    image: {
      src: "https://www.hackerrank.com/wp-content/uploads/2022/11/code-1.png",
      alt: "Write Your Code",
    },
  },
  {
    id: 2,
    title: "Get Feedback",
    subtitle: "Get detailed feedback on your code and improve your skills.",
    subSteps: [
      {
        id: 1,
        description: "Validate your answers using JDoodle REST API.",
      },
      {
        id: 2,
        description: "Review test case results and learn from them.",
      },
      {
        id: 3,
        description: "Improve your programming skills and knowledge.",
      },
    ],
    image: {
      src: "https://www.hackerrank.com/wp-content/uploads/2022/09/contenders.png",
      alt: "Get Feedback",
    },
  },
];

module.exports = steps;
