// infer keyword examples (runtime illustration)
function add(a: number, b: number) {
  return a + b;
}
console.log(add(2, 3));

class Point {
  constructor(public x: number, public y: number) {}
}
const p = new Point(4, 5);
console.log(p.x, p.y);