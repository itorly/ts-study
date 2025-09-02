type PointGenerator = () => { x: number; y: number; };

const point: ReturnType<PointGenerator> = {
  x: 10,
  y: 20
};

console.log(point); // { x: 10, y: 20 }