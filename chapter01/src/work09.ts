export {};

type Point3D = {
  x: number;
  y: number;
  z: number;
};

class Cube {
  show(point: Point3D): void {
    console.log('X: ' + point.x);
    console.log('Y: ' + point.y);
    console.log('Z: ' + point.z);
  }
}

const p: Point3D = {
  x: 5,
  y: 7,
  z: 2,
};

const c: Cube = new Cube();
c.show(p);
