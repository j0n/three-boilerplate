export const calculatePointFromAngle = (A = 45, c = 1, start = { x: 0, y: 0, z: 0}) => {
  return {
    x: start.x + Math.sin(A) * c,
    y: start.y + Math.cos(A) * c,
    z: start.z,
  };
};
