//setting classes for required shapes
//while setting color
class Shape {
  constructor({ logoName, textColor, logoColor, logoShape }) {
    this.logoShape = logoShape;

    this.validTextInput(logoName);
    this.logoName = logoName;

    this.validColorInput(textColor);
    this.textColor = textColor;

    this.validColorInput(logoColor);
    this.logoColor = logoColor;
  }
  //throws an error if the user enters empty
  ifInputEmpty(input) {
    if (!input) throw new Error("Input cannot be empty");
  }

  validTextInput(input) {
    this.ifInputEmpty(input);
//throws error if length is incorrect
    if (input.length > 3) {
      throw new Error("Logo text cannot be more than 3 characters");
    }
  }

  validColorInput(input) {
    this.ifInputEmpty(input);
    input = input.toLowerCase();

    if (!isCss3Color(input)) {
      throw new Error("Please enter a valid css color keyword or hex code");
    }
  }

  render() {
    throw new Error("Child shapes must implement a render() method");
  }
}
module.exports = Shape;
