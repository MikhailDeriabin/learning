import * as THREE from './three.module.min.js';

//Create a scene, where everything is located
const scene = new THREE.Scene();

//Create an object = mesh
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 'purple' });
const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

//Create camera
const aspectRatio = {
    width: window.innerWidth,
    height: window.innerHeight
}
const camera = new THREE.PerspectiveCamera(75, aspectRatio.width/aspectRatio.height, 1, 2000);
camera.position.z = 3;
camera.position.x = 1;
camera.position.y = 1;
scene.add(camera);

//Create renderer
const canvas = document.querySelector('.draw');
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(aspectRatio.width, aspectRatio.height);
renderer.render(scene, camera);