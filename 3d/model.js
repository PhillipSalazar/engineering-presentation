var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);

var gemotry = new THREE.ConeGeometry( 1, 5, 5);
var material =  new THREE.MeshBasicMaterial({color: '#DC143C'});

//var cone = new THREE.Mesh(gemotry, material);\
var loader = new THREE.ObjectLoader();
loader.load("last-nano.json",function ( obj ) {
  obj.position.z =3;

     scene.add( obj );
});




scene.background = new THREE.Color( '#6495ED' );
camera.position.z = 5;

function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
  obj.rotation.x += 0.005;
  obj.rotation.y += 0.005;

}
render();
