/* eslint no-console:0 */
/* global THREE */

import fps from 'fps';
import setup from './lib/setup';
import { Clock, DirectionalLight } from 'three';
import { Line, Square, LineFromAngle } from './lib/Line';

const ticker = fps({
  every: 10,   // update every 10 frames
});

const { camera, scene, renderer } = setup();
const clock = new Clock();


const light = new DirectionalLight(0xffffff );
light.position.set(0, 0, 1 );
scene.add(light);
/*
for (let i = 0, ii = 50; i < ii; i++) {
  const line = Line({x: 0, y: i/5, z: 0}, {x: i/5, y: 0, z: 0});
  scene.add(line);
  line.rotateZ(45 * (Math.PI/180));
}
*/
const amountLines = 22;
/*
for (let i = 0, ii = amountLines; i < ii; i++) {
  const line = Line({x: 0, y: i/10, z: 0}, {x: 2, y: i/10, z: 0});
  scene.add(line);
  line.rotateZ(90 * (Math.PI/180));
}

for (let i = 0, ii = amountLines; i < ii; i++) {
  const line = Line({x: 0, y: i/10, z: 0}, {x: 2, y: i/10, z: 0});
  scene.add(line);
}

for (let i = 0, ii = amountLines; i < ii; i++) {
  const line = Line({x: 0, y: i/10, z: 0}, {x: 2, y: i/10, z: 0});
  scene.add(line);
  line.rotateZ(180 * (Math.PI/180));
}
for (let k = 1; k < 8; k++) {
  for (let i = 0, ii = amountLines; i < ii; i++) {
    const line = Line({x: 0, y: i/10, z: 0}, {x: 2, y: i/10, z: 0});
    scene.add(line);
    line.rotateZ((k * 45) * (Math.PI/180));
  }
}

*/

for (let i = 0, ii = amountLines; i < ii; i++) {
  const line = Line({x: 0, y: i/10, z: 0}, {x: 2, y: i/10, z: 0});
  scene.add(line);
  line.rotateZ(270 * (Math.PI/180));
}
const sAmount = 41;
for (let i = 0, ii = sAmount; i < ii; i++) {
  const half = Math.round(sAmount / 2);
  const space = 10;
  if (half >= i) {
    const line = Line({x: 0, y: i/space, z: 0}, {x: 2 - (i/space), y: 2, z: 0});
    scene.add(line);
  } else {
    const value = i - half;
    console.log(i);
    const line = Line({x: 0 + value/space, y: 0, z: 0}, {x: 2, y: 2 - value/space, z: 0}, i === 21 ? 0x00f200f1 : false);
    scene.add(line);
  }
  // line.rotateZ(270 * (Math.PI/180));
}

/*
for (let i = 0, ii = amountLines; i < ii; i++) {
  const line = LineFromAngle({x:0, y: 0, z: 0}, 45, 2.80);
  scene.add(line);
}
*/

const square = new Square({x: -2, y: -2, z: 0}, { x: 2, y: 2, z: 0 });
scene.add(square);

const animate = () => {
  ticker.tick();
  /*eslint no-unused-vars: 0 */
  const delta = clock.getDelta();
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
};

// Start animating
animate();
