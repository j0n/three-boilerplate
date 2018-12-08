/* eslint no-console:0 */
/* global THREE */

import fps from 'fps';
import setup from './lib/setup';

if (typeof global.THREE === 'undefined') {
  window.THREE = require('three');
}
var ticker = fps({
  every: 10   // update every 10 frames
})

var { camera, scene, renderer } = setup();
const clock = new THREE.Clock();


var light = new THREE.DirectionalLight(0xffffff );
light.position.set(0, 0, 1 );
scene.add(light);


function animate () {
  ticker.tick()
  /*eslint no-unused-vars: 0 */
  const delta = clock.getDelta();
  renderer.render(scene, camera)
  requestAnimationFrame(animate)
}

// Start animating
animate()
