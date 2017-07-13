
function init(){
  var scene=new THREE.Scene();

  var box = getBox(1,1,1);

  scene.add(box);

  var camera  = new THREE.PerspectiveCamera(
    45,
    window.innerWidth/window.innerHeight,
    1,
    10000
  );
  camera.position.z = 1000;


  var renderer=new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById('webgl').appendChild(renderer.domElement);
  renderer.render(
    scene,
    camera
  );
  animation();
};

function getBox(w,h,d){
  var geometry  = new THREE.BoxGeometry(w,h,d);
  var material  = new THREE.MeshBasicMaterial({
    color:0x00ff00,
    wireframe:true
  });
  var mesh  = new THREE.Mesh(
    geometry,
    material
  );
  return mesh;
}
function animate(){
  requestAnimationFrame(animate);

  mesh.rotation.x +_1;
  mesh.rotation.y +_1;

  renderer.render(scene,camera);
}
