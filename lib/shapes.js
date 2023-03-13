//setting classes for required shapes
//while setting color
class Shape {
  constructor() {
    this.color = "";
  }
  setColor(color) {
    this.color = color;
  }
}
class Triangle extends Shape {
  render() {
    return `<polygon height="100%" width="100%" fill=${this.color}>`;
  }
}
class Circle extends Shape{
    render(){
        return `<circle cx="50%" cy"50%" r="100" height="100%" width "100%" fill="${this.color}">`
    }
}
