import './style.css';
import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as TWEEN from '@tweenjs/tween.js';



document.getElementById("hideAll").style.display = "block";
window.onload = function() 
{ document.getElementById("hideAll").style.display = "none"; }

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1,1000);
// const camera = new THREE.OrthographicCamera( window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2, 1, 1000 );
const renderer= new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
});
renderer.setPixelRatio( window.devicePixelRatio);
renderer.setSize( window.innerWidth, window.innerHeight);

const controls = new OrbitControls(camera, renderer.domElement);
controls.target = new THREE.Vector3(-8.7, 4.4, 4.4);
renderer.render(scene, camera);

function addStar(){
    const geometry = new THREE.SphereGeometry(0.25,24,24);
    const material = new THREE.MeshStandardMaterial({color: 0xb7cdf7})
    const star = new THREE.Mesh ( geometry, material);

    const [x,y,z] =Array(3).fill().map(()=> THREE.MathUtils.randFloatSpread(100));
    star.position.set(x,y,z);
    scene.add(star)
}
Array(300).fill().forEach(addStar);

const spaceTexture = new THREE.TextureLoader().load('galaxy2.jpg');
scene.background = spaceTexture;




// ----------------------------------loading-------------------------------------------
let mixer;
const loadingManager = new THREE.LoadingManager();

const progressBar = document.getElementById('progress-bar');
loadingManager.onProgress = function(url, loaded, total){
    progressBar.value = (loaded/total)*100;
}

const progressBarContainer = document.querySelector('.progress-bar-container');
loadingManager.onLoad = function(){
    progressBarContainer.style.display = 'none';
}

const loader = new GLTFLoader(loadingManager);
loader.load(
    'test1.glb', (gltf)=>{
        const Model = gltf.scene;
        scene.add(Model);
        mixer = new THREE.AnimationMixer(Model);
        let clips = gltf.animations;
        // jsanidesign = THREE.AnimationClip.findByName(clips, 'JSEng.001Action')
        console.log(Model.position);

        clips.forEach(function(clip){
            const action = mixer.clipAction(clip);

            action.play();
        })         
    },
    ( xhr ) => {
        // called while loading is progressing
       console.log(`${( xhr.loaded / xhr.total * 100 )}% loaded`);
        // console.log(  );
    },
    ( error ) => {
        // called when loading has errors
        console.error( 'An error happened', error );
    },
)
// --------------------------------DOM Reference------------------------
const Home= document.getElementById('home');
const design= document.getElementById('design');
const engineering= document.getElementById('engineering');
const corporate= document.getElementById('corporate');
const portfolio= document.getElementById('portfolio');
const contactus = document.getElementById('contactus');
const career = document.getElementById('career');

// const Homesection= document.getElementById('');
const designsection= document.getElementById('designsection');
const engineeringsection= document.getElementById('engineeringsection');
const corporatesection= document.getElementById('corporatesection');
const portfoliosection= document.getElementById('portfoliosection');
const toggleicon= document.getElementById('toggleicon');
const contactussection = document.getElementById('contactussection');
const careersection = document.getElementById('careersection')
const atkhayarplacessection= document.getElementById('atkhayarplacessection');
const atkhayarplaces= document.getElementById('atkhayarplaces');


const homeicon = document.getElementById('homeicon');
const designicon = document.getElementById('designicon');
const engineeringicon = document.getElementById('engineeringicon');
const corporateicon = document.getElementById('corporateicon');
const portfolioicon = document.getElementById('portfolioicon');
const contactusicon = document.getElementById('contactusicon');
const careericon = document.getElementById('careericon');

const homeiconmobile = document.getElementById('homeiconmobile');
const designiconmobile = document.getElementById('designiconmobile');
const engineeringiconmobile = document.getElementById('engineeringiconmobile');
const corporateiconmobile = document.getElementById('corporateiconmobile');
const portfolioiconmobile = document.getElementById('portfolioiconmobile');
const contactusiconmobile = document.getElementById('contactusiconmobile');
const careericonmobile = document.getElementById('careericonmobile');
const atkhayarplacesmobile = document.getElementById('atkhayarplacesmobile');

// ----------------------------------Screen adjustment-----------------------------------
function media(x) {
    if (x.matches) { 
        // camera.position.setX(8.15548149947991);
        // camera.position.setY(7.9926503201927055);
        // camera.position.setZ(8.589577576676497);

        camera.position.setX(9.047917002076815);
        camera.position.setY(13.385470590523568);
        camera.position.setZ(9.807665782056354);
        
        controls.target.set(-4.966121757132901, 6.44879819363984,-5.5844968904982535) 
    } else {
         
         camera.position.setX(7);
         camera.position.setY(6.797);
         camera.position.setZ(15.885);
      
    }
  }
  var x = window.matchMedia("(max-width: 1024px)")
media(x) ;


const ambientLight = new THREE.AmbientLight(0xffffff,1.2);
scene.add(ambientLight);
// const light = new THREE.HemisphereLight( 0xffffbb, 0xffffbb, 1 );
// light.position.set(0,25,0);
// scene.add( light );
const color = 0xFFFFFF;
    const intensity = 2;
    const width = 12;
    const height = 4;
const light = new THREE.RectAreaLight(color, 1.5, width, height);
    light.position.set(0, 2.9, 0);
    light.rotation.x = THREE.Math.degToRad(-90);
const light1 = new THREE.RectAreaLight(color, 1, width, height);
    light1.position.set(0, 4.5, -4);
    light1.rotation.x = THREE.Math.degToRad(-90);
const light2 = new THREE.RectAreaLight(color, 1.5, width, height);
    light2.position.set(-4, 7, -4);
    light2.rotation.x = THREE.Math.degToRad(-90);
const light3 = new THREE.RectAreaLight(color, 1.5, width, height);
    light3.position.set(-4, 11, -8);
    light3.rotation.x = THREE.Math.degToRad(-90);
const light4 = new THREE.RectAreaLight(color, 1.5, width, height);
    light4.position.set(-8, 13, -8);
    light4.rotation.x = THREE.Math.degToRad(-90);


    scene.add(light, light1, light2, light3, light4);

// const lightHelper = new THREE.PointLightHelper(light4)
// const gridHelper = new THREE.GridHelper(200,50);
// scene.add(lightHelper, gridHelper);
// const axesHelper = new THREE.AxesHelper( 5 );
// scene.add( axesHelper );

// ------------------------------Routing for Web (1024px)---------------------------
const nav =document.getElementById('navflex');
const sectionarray =[designsection, engineeringsection, corporatesection, portfoliosection, contactussection, careersection, atkhayarplacessection]


function filterer(x){
   
    x.map((y)=>{
        if(y.style.animationName=='moveright'){
            y.style.animation='moveleft 3s forwards'
        } 
    })
}

function filterermobile(x){
   
    x.map((y)=>{
        if(y.style.animationName=='dropdown'){
            y.style.animation='backupmore 3s forwards'
        } 
    })
}

    Home.addEventListener('click', function() {
        new TWEEN.Tween(camera.position)
    .to({x:5.318316,y:2.484750,z:12.086898 },1000).easing(TWEEN.Easing.Quadratic.Out)
    .start();

    new TWEEN.Tween(controls.target)
    .to({ x:-11.8700,y:5.63094,z:-2.109401},1000).easing(TWEEN.Easing.Quadratic.Out)
    .start();
    });
    homeicon.addEventListener('click', function() {
        new TWEEN.Tween(camera.position)
    .to({x:5.318316,y:2.484750,z:12.086898 },1000).easing(TWEEN.Easing.Quadratic.Out)
    .start();

    new TWEEN.Tween(controls.target)
    .to({ x:-11.8700,y:5.63094,z:-2.109401},1000).easing(TWEEN.Easing.Quadratic.Out)
    .start();

        filterer(sectionarray);
        nav.style.animation = 'moverightfornav 3s forwards';
        toggleicon.style.animation = 'moveleft 3s forwards';

    });
    homeiconmobile.addEventListener('click', function() {
        new TWEEN.Tween(camera.position)
    .to({x:9.047917002076815,y:13.385470590523568,z:9.807665782056354},1000).easing(TWEEN.Easing.Quadratic.Out)
    .start();

    new TWEEN.Tween(controls.target)
    .to({ x:-4.966121757132901,y:6.44879819363984,z:-5.5844968904982535},1000).easing(TWEEN.Easing.Quadratic.Out)
    .start();

        filterermobile(sectionarray);

    });

    design.addEventListener('click', function() {
        new TWEEN.Tween(camera.position)
      .to({x:2.65,y:4.25,z:0.260 },1000).easing(TWEEN.Easing.Quadratic.Out)
      .start();

      new TWEEN.Tween(controls.target)
      .to({ x:-3,y:2.82,z:-2.973},1000).easing(TWEEN.Easing.Quadratic.Out)
      .start();
      nav.style.animation= 'moveleft 3s forwards';
      designsection.style.animation = 'moveright 3s forwards';
      if(nav.style.animationName=='moveleft'){
        toggleicon.style.animation = 'moverightfortoggle 3s forwards';
    }
    });
    designicon.addEventListener('click', function() {
        new TWEEN.Tween(camera.position)
      .to({x:2.65,y:4.25,z:0.260 },1000).easing(TWEEN.Easing.Quadratic.Out)
      .start();

      new TWEEN.Tween(controls.target)
      .to({ x:-3,y:2.82,z:-2.973},1000).easing(TWEEN.Easing.Quadratic.Out)
      .start();

      filterer(sectionarray);
      designsection.style.animation = 'moveright 2s forwards';

    });
    designiconmobile.addEventListener('click', function() {
        new TWEEN.Tween(camera.position)
      .to({x: 4.257642365597153, y: 6.921443891687598, z: 0.29519879726756937},1000).easing(TWEEN.Easing.Quadratic.Out)
      .start();

      new TWEEN.Tween(controls.target)
      .to({x: -2.2349388906635803, y: 3.7077444037201364, z: -6.835855182119292},1000).easing(TWEEN.Easing.Quadratic.Out)
      .start();

      filterermobile(sectionarray);
      designsection.style.animation = 'dropdown 2s forwards';

    });

   engineering.addEventListener('click', function() {
        new TWEEN.Tween(camera.position)
      .to({x:-2.373,y:7.17899,z:-0.6299 },1000).easing(TWEEN.Easing.Quadratic.Out)
      .start();

      new TWEEN.Tween(controls.target)
      .to({ x:-4.573,y:5.712,z:-1.525},1000).easing(TWEEN.Easing.Quadratic.Out)
      .start();
      nav.style.animation= 'moveleft 3s forwards'; nav.style.animation= 'moveleft 3s forwards';
      engineeringsection.style.animation = 'moveright 3s forwards';
   
      if(nav.style.animation='moveleft 3s forwards'){
        toggleicon.style.animation = 'moverightfortoggle 3s forwards';
    }
    });
    engineeringicon.addEventListener('click', function() {
        new TWEEN.Tween(camera.position)
        .to({x:-2.373,y:7.17899,z:-0.6299 },1000).easing(TWEEN.Easing.Quadratic.Out)
        .start();
  
        new TWEEN.Tween(controls.target)
        .to({ x:-4.573,y:5.712,z:-1.525},1000).easing(TWEEN.Easing.Quadratic.Out)
        .start();

      filterer(sectionarray);
      engineeringsection.style.animation = 'moveright 2s forwards';

    });
    engineeringiconmobile.addEventListener('click', function() {
        new TWEEN.Tween(camera.position)
        .to({x: -0.4004086222160943, y: 9.179173507574692, z: 0.24066599620699503},1000).easing(TWEEN.Easing.Quadratic.Out)
        .start();
  
        new TWEEN.Tween(controls.target)
        .to({x: -5.424244233480451, y: 6.69247410493196, z: -5.277207637326074},1000).easing(TWEEN.Easing.Quadratic.Out)
        .start();

      filterermobile(sectionarray);
      engineeringsection.style.animation = 'dropdown 2s forwards';

    });

    corporate.addEventListener('click', function() {
        new TWEEN.Tween(camera.position)
      .to({x:-2.1010,y:9.3839,z:-4.91052 },1000).easing(TWEEN.Easing.Quadratic.Out)
      .start();

      new TWEEN.Tween(controls.target)
      .to({ x:-4.3001,y:7.9178,z:-5.8057},1000).easing(TWEEN.Easing.Quadratic.Out)
      .start();
      nav.style.animation= 'moveleft 3s forwards';
      corporatesection.style.animation = 'moveright 3s forwards';

      if(nav.style.animation='moveleft 3s forwards'){
        toggleicon.style.animation = 'moverightfortoggle 3s forwards';
    }
    });
    corporateicon.addEventListener('click', function() {
        new TWEEN.Tween(camera.position)
      .to({x:-2.1010,y:9.3839,z:-4.91052 },1000).easing(TWEEN.Easing.Quadratic.Out)
      .start();

      new TWEEN.Tween(controls.target)
      .to({ x:-4.3001,y:7.9178,z:-5.8057},1000).easing(TWEEN.Easing.Quadratic.Out)
      .start();

      filterer(sectionarray);
      corporatesection.style.animation = 'moveright 2s forwards';

    });
    corporateiconmobile.addEventListener('click', function() {
        new TWEEN.Tween(camera.position)
      .to({x: -0.11878575198287766, y: 10.689562919987658, z: -3.986535051614982},1000).easing(TWEEN.Easing.Quadratic.Out)
      .start();

      new TWEEN.Tween(controls.target)
      .to({x: -4.204035292044349, y: 9.751667308198762, z: -7.969362109927145},1000).easing(TWEEN.Easing.Quadratic.Out)
      .start();

      filterermobile(sectionarray);
      corporatesection.style.animation = 'dropdown 2s forwards';

    });

    portfolio.addEventListener('click', function() {
        new TWEEN.Tween(camera.position)
      .to({x:-5.81035,y:12.1179,z:-4.92961 },1000).easing(TWEEN.Easing.Quadratic.Out)
      .start();

      new TWEEN.Tween(controls.target)
      .to({ x:-7.065,y:11.7746,z:-5.3276},1000).easing(TWEEN.Easing.Quadratic.Out)
      .start();
      nav.style.animation= 'moveleft 3s forwards';
      portfoliosection.style.animation = 'moveright 3s forwards';
      if(nav.style.animation='moveleft 3s forwards'){
        toggleicon.style.animation = 'moverightfortoggle 3s forwards';
    }
    });
    portfolioicon.addEventListener('click', function() {
        new TWEEN.Tween(camera.position)
        .to({x:-5.81035,y:12.1179,z:-4.92961 },1000).easing(TWEEN.Easing.Quadratic.Out)
        .start();
  
        new TWEEN.Tween(controls.target)
        .to({ x:-7.065,y:11.7746,z:-5.3276},1000).easing(TWEEN.Easing.Quadratic.Out)
        .start();

      filterer(sectionarray);
      portfoliosection.style.animation = 'moveright 2s forwards';

    });  
    portfolioiconmobile.addEventListener('click', function() {
        new TWEEN.Tween(camera.position)
        .to({x: -4.882033135613094, y: 14.103867029011525, z: -4.813381303715374},1000).easing(TWEEN.Easing.Quadratic.Out)
        .start();
  
        new TWEEN.Tween(controls.target)
        .to({x: -6.870865960867908, y: 13.265673380567069, z: -6.62803328658111},1000).easing(TWEEN.Easing.Quadratic.Out)
        .start();

      filterermobile(sectionarray);
      portfoliosection.style.animation = 'dropdown 2s forwards';

    });  

    atkhayarplaces.addEventListener('click', function() {
        new TWEEN.Tween(camera.position)
      .to({x:-5.81035,y:12.1179,z:-4.92961 },1000).easing(TWEEN.Easing.Quadratic.Out)
      .start();

      new TWEEN.Tween(controls.target)
      .to({ x:-7.065,y:11.7746,z:-5.3276},1000).easing(TWEEN.Easing.Quadratic.Out)
      .start();
      filterer(sectionarray);
      atkhayarplacessection.style.animation = 'moveright 3s forwards';
      
    }
    );
    atkhayarplacesmobile.addEventListener('click', function() {
        new TWEEN.Tween(camera.position)
      .to({x:-5.81035,y:12.1179,z:-4.92961 },1000).easing(TWEEN.Easing.Quadratic.Out)
      .start();

      new TWEEN.Tween(controls.target)
      .to({ x:-7.065,y:11.7746,z:-5.3276},1000).easing(TWEEN.Easing.Quadratic.Out)
      .start();
      filterermobile(sectionarray);
      atkhayarplacessection.style.animation = 'dropdown 3s forwards';
      
    }
    );


    contactus.addEventListener('click', function() {
        new TWEEN.Tween(camera.position)
      .to({x: 1.848547942527988, y: 0.4828506048071382, z: 2.7329222571043306 },1000).easing(TWEEN.Easing.Quadratic.Out)
      .start();

      new TWEEN.Tween(controls.target)
      .to({ x: -5.436852191040968, y: -0.41814811815446523, z: 0.15346855357466058},1000).easing(TWEEN.Easing.Quadratic.Out)
      .start();
      nav.style.animation= 'moveleft 3s forwards';
      contactussection.style.animation = 'moveright 3s forwards';
      if(nav.style.animation='moveleft 3s forwards'){
        toggleicon.style.animation = 'moverightfortoggle 3s forwards';
    }
    });
    contactusicon.addEventListener('click', function() {
        new TWEEN.Tween(camera.position)
        .to({x: 1.848547942527988, y: 0.4828506048071382, z: 2.7329222571043306 },1000).easing(TWEEN.Easing.Quadratic.Out)
        .start();
  
        new TWEEN.Tween(controls.target)
        .to({ x: -5.436852191040968, y: -0.41814811815446523, z: 0.15346855357466058},1000).easing(TWEEN.Easing.Quadratic.Out)
        .start();

      filterer(sectionarray);
      contactussection.style.animation = 'moveright 2s forwards';

    }); 
    contactusiconmobile.addEventListener('click', function() {
        new TWEEN.Tween(camera.position)
        .to({x: 3.8324506570881156, y: 0.6963984326943837, z: 4.38498154897478},1000).easing(TWEEN.Easing.Quadratic.Out)
        .start();
  
        new TWEEN.Tween(controls.target)
        .to({x: -3.2106428727349132, y: 4.771476472501272, z: -1.7077993534282354},1000).easing(TWEEN.Easing.Quadratic.Out)
        .start();

      filterermobile(sectionarray);
      contactussection.style.animation = 'dropdown 2s forwards';

    });

    career.addEventListener('click', function() {
        new TWEEN.Tween(camera.position)
      .to({x: 3.250271931786169, y: 0.535743402608443, z: 0.34280542161963606 },1000).easing(TWEEN.Easing.Quadratic.Out)
      .start();

      new TWEEN.Tween(controls.target)
      .to({ x: -4.515091793578695, y: 0.04528185424247106, z: 0.3745685448897186},1000).easing(TWEEN.Easing.Quadratic.Out)
      .start();
      nav.style.animation= 'moveleft 3s forwards';
      careersection.style.animation = 'moveright 3s forwards';
      if(nav.style.animation='moveleft 3s forwards'){
        toggleicon.style.animation = 'moverightfortoggle 3s forwards';
    }
    });
    careericon.addEventListener('click', function() {
        new TWEEN.Tween(camera.position)
        .to({x: 3.250271931786169, y: 0.535743402608443, z: 0.34280542161963606 },1000).easing(TWEEN.Easing.Quadratic.Out)
        .start();
  
        new TWEEN.Tween(controls.target)
        .to({ x: -4.515091793578695, y: 0.04528185424247106, z: 0.3745685448897186},1000).easing(TWEEN.Easing.Quadratic.Out)
        .start();

      filterer(sectionarray);
      careersection.style.animation = 'moveright 2s forwards';

    }); 
    careericonmobile.addEventListener('click', function() {
        new TWEEN.Tween(camera.position)
        .to({x: 5.178484036980921, y: 0.3052295271192733, z: 1.9106038117412134},1000).easing(TWEEN.Easing.Quadratic.Out)
        .start();
  
        new TWEEN.Tween(controls.target)
        .to({x: -3.241435638669144, y: 4.5031341540002146, z: -1.9385462274558405},1000).easing(TWEEN.Easing.Quadratic.Out)
        .start();

      filterermobile(sectionarray);
      careersection.style.animation = 'dropdown 2s forwards';

    });

const clock = new THREE.Clock();
window.addEventListener( 'resize', onWindowResize, false );
function onWindowResize() {
				
    camera.aspect = window.innerWidth/ window.innerHeight;

    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );

}
function animate(time){
    if(mixer)
   
    mixer.update(clock.getDelta());
    renderer.render (scene, camera);
     requestAnimationFrame(animate);
    controls.update();
    TWEEN.update(time);
    // console.log(camera.position);
    // console.log(controls.target);
    
}

animate();

