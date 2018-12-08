/* eslint no-console:0 */
/* global THREE */

import fps from 'fps';
import setup from './lib/setup';
import { Clock, DirectionalLight } from 'three';

const ticker = fps({
  every: 10,   // update every 10 frames
});

const { camera, scene, renderer } = setup();
const clock = new Clock();


const light = new DirectionalLight(0xffffff );
light.position.set(0, 0, 1 );
scene.add(light);


const animate = () => {
  ticker.tick();
  /*eslint no-unused-vars: 0 */
  const delta = clock.getDelta();
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
};

// Start animating
animate();
