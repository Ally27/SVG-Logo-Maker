const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Circle, Square } = require("./lib/shapes");
const SVG = require("./lib/SVG");

inquirer
  .prompt([
    {
      type: "input",
      name: "text",
      message: "Enter the Logo Name",
    },
    {
      type: "input",
      name: "textColor",
      message: "Enter the text color",
    },
    {
      type: "input",
      name: "shapeColor",
      message: "Enter the logo color",
    },
    {
      type: "input",
      name: "shape",
      message: "Select a shape:",
      choices: ["Square", "Triangle", "Circle"],
    },
  ])
  .then((input) => {
    console.log(input);
    let shape;
    if (input.shape.toLowerCase() === "circle") {
      shape = new Circle();
    }
    if (input.shape.toLowerCase() === "square") {
      shape = new Square();
    }
    if (input.shape.toLowerCase() === "triangle") {
      shape = new Triangle();
    }
    shape.setColor(input.shapeColor);

    const Svg = new SVG();
    Svg.setText(input.text, input.textColor);
    Svg.setShape(shape);

    fs.writeFileSync("logo.svg", Svg.render());
  })
  .catch((err) => console.error(err));
