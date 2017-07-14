var scene,camera,box, renderer, mesh, geometry, material;
function init(){
   scene=new THREE.Scene();
   var gui  = new dat.GUI();

   box = getBox(6,6,6);
   plane  = getPlane(150);
   var pointLight  = getPointLight(1);
   var sphere=getSphere(0.5);


  gui.add(pointLight,'intensity',0,10);
  gui.add(pointLight.position,'y',-10,10);

  scene.add(box);
  scene.add(plane);
  scene.add(pointLight);
  pointLight.add(sphere);

  // scene.fog=new THREE.FogExp2(0xffffff, 0.01);

   camera  = new THREE.PerspectiveCamera(
    45,
    window.innerWidth/window.innerHeight,
    1,
    10000
  );
  camera.position.z = 100;
  // pointLight.position.z = 10;
  // pointLight.position.y=10;
  pointLight.intensity=2;
  plane.position.z= -20;

   renderer=new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0xffffff);
  document.getElementById('webgl').appendChild(renderer.domElement);
  renderer.render(
    scene,
    camera
  );
  return scene;
};

function getBox(w,h,d){
   geometry  = new THREE.BoxGeometry(w,h,d);
   material  = new THREE.MeshPhongMaterial({
    color:0x000000,
    wireframe:true
  });
   mesh  = new THREE.Mesh(
    geometry,
    material
  );
  return mesh;
};

function getSphere(size){
   geometry  = new THREE.SphereGeometry(size,24,24);
   material  = new THREE.MeshBasicMaterial({
    color:0xffffff,
  });
   mesh  = new THREE.Mesh(
    geometry,
    material
  );
  return mesh;
};

function getPlane(size){
   geometry  = new THREE.PlaneGeometry(size,size);
   material  = new THREE.MeshPhongMaterial({
    color:  0x000000,
  });
   mesh  = new THREE.Mesh(
    geometry,
    material
  );
  return mesh;
}

function animate(){
  requestAnimationFrame(animate);

  box.rotation.x +=0.01;
  box.rotation.y +=0.01;

  renderer.render(scene,camera);
};

function getPointLight(intensity){
  var light=new THREE.PointLight(0xffffff,intensity);
  return light;
}
init();
animate();
