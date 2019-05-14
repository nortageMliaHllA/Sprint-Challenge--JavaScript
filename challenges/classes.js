// 1. Copy and paste your prototype in here and refactor into class syntax.

// function CuboidMaker(sizes) {
//     this.length = sizes.length;
//     this.width = sizes.width;
//     this.height = sizes.height;
//   }
  class CuboidMaker {
      constructor(sizes) {
        this.length = sizes.length;
        this.width = sizes.width;
        this.height = sizes.height;
      }
      volume() {
        return `${this.length * this.width * this.height}`;
     }
      surfaceArea() {
        return 2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height));
     }
  };
  
  
//   CuboidMaker.prototype.surfaceArea = function () {
//     return 2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height));
//   };
  
  const cuboid = new CuboidMaker({
      length: 4,
      width: 5,
      height: 5,
  
  });
  // Test your volume and surfaceArea methods by uncommenting the logs below:
  console.log(cuboid.volume()); // 100
  console.log(cuboid.surfaceArea()); // 130
  
