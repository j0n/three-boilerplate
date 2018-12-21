import { LineBasicMaterial, Geometry, Vector3, Line as ThreeLine} from 'three';
import { calculatePointFromAngle } from './utils';

const defaultCoords = {
  x : -1,
  y : 0,
  z : 0,
};

const material = new LineBasicMaterial({
  transparent: true,
  color: 0x00000001,
  opacity: 0.5,
});
export const LineFromAngle = (start = defaultCoords, angle = 45, lineLenght = 1) => {
  const rad = angle * (Math.PI/180);
  const end = calculatePointFromAngle(rad, lineLenght, start);
  return Line(start, end);
};

export const Line = (start = defaultCoords, end = defaultCoords, color = 0x00000001) => {

  const geometry = new Geometry();
  geometry.vertices.push(
    new Vector3( start.x, start.y, start.z ),
    new Vector3( end.x, end.y, start.z),
  );
  if (color && color !== 0x00000001) {
    const newMat = material.clone();
    newMat.color.setHex(color);
    return new ThreeLine( geometry, newMat );
  }
  return new ThreeLine( geometry, material );
};
export const Square = (start = defaultCoords, end = defaultCoords) => {
  const geometry = new Geometry();
  geometry.vertices.push(
    new Vector3( start.x, start.y, start.z ),
    new Vector3( end.x, start.y, start.z),
    new Vector3( end.x, end.y, start.z),
    new Vector3( start.x, end.y, start.z),
    new Vector3( start.x, start.y, start.z),
  );
  return new ThreeLine( geometry, material );
};
