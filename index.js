const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      name: "logoInfo",
      message: "Enter the Logo Name",
    },
    {
      type: "input",
      name: "textColor",
      message: "Enter the text color",
    },
    {
      type: "input",
      name: "logoColor",
      message: "Enter the logo color",
    },
    {
      type: "input",
      name: "shapeType",
      message: "Select a shape:",
      choices: ["Square", "Triangle", "Circle"],
    },
  ])
  .then((userData) => {
    const svgPath = "";
    const finalLogo = formShape(userData);
    fs.writeToFile(svgPath, generateSVG(finalLogo), (err) =>
      err ? console.error(err) : console.info("Generating Logo.svg")
    );
  })
  .catch((err) => console.error(err));
