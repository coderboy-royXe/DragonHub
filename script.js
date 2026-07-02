// ===== LIVE CLOCK =====

function updateClock() {

    let now = new Date();

    let time = now.toLocaleTimeString();

    document.getElementById("clock").innerHTML = "🕒 " + time;

}

setInterval(updateClock,1000);

updateClock();


// ===== SHOW / HIDE PASSWORD =====

function togglePassword(){

    let pass=document.getElementById("password");

    if(pass.type==="password"){

        pass.type="text";

    }

    else{

        pass.type="password";

    }

}


// ===== PRESS ENTER TO LOGIN =====

document.addEventListener("keypress",function(event){

    if(event.key==="Enter"){

        login();

    }

});


// ===== LOGIN =====

function login(){

    let username=document.getElementById("username").value;

    let password=document.getElementById("password").value;

    let box=document.querySelector(".login-box");

    if(username==="ADMIN" && password==="password"){

        document.body.innerHTML=`

<nav style="
background:#000;
padding:18px;
display:flex;
justify-content:center;
gap:20px;
box-shadow:0 0 15px cyan;
">

<button onclick="home()">🏠 Home</button>

<button onclick="garage()">🏎 F1 Garage</button>

<button onclick="roblox()">🎮 Roblox</button>

<button onclick="about()">👤 About</button>

<button onclick="contact()">📞 Contact</button>

<button onclick="logout()">🚪 Logout</button>

</nav>

<div id="content"
style="
text-align:center;
color:white;
padding:40px;
animation:fade .6s;
">

</div>

`;

        home();

    }

    else{

        document.getElementById("error").innerHTML="❌ Wrong Username or Password";

        box.animate([

            {transform:"translateX(-10px)"},

            {transform:"translateX(10px)"},

            {transform:"translateX(-10px)"},

            {transform:"translateX(10px)"},

            {transform:"translateX(0px)"}

        ],{

            duration:350

        });

    }

}


// ===== PAGES =====

function home(){

document.getElementById("content").innerHTML=`

<img src="dragon.jpg"

style="
width:320px;
border-radius:20px;
box-shadow:0 0 25px cyan;
">

<h1>🐉 Welcome to Dragon's Hub!</h1>

<h2>Just a test website :D</h2>

<p>Website under development.</p>

`;

}


function garage(){

document.getElementById("content").innerHTML=`

<h1>🏎 F1 Garage</h1>

<h2>Favorite Team</h2>

<p>Ferrari ❤️</p>

<h2>Favorite Driver</h2>

<p>Charles Leclerc</p>

<p>(More coming soon...)</p>

`;

}


function roblox(){

document.getElementById("content").innerHTML=`

<h1>🎮 Roblox</h1>

<p>Favorite Game :</p>

<h2>Emergency Response: Liberty County</h2>

<p>Minecraft • ER:LC • COD Mobile</p>

`;

}


function about(){

document.getElementById("content").innerHTML=`

<h1>👤 About Me</h1>

<p>My name is Raghven.</p>

<p>I study in St Johns School.</p>

<p>I love Cars.</p>

<p>I love Formula 1.</p>

`;

}


function contact(){

document.getElementById("content").innerHTML=`

<h1>📞 Contact Dragon</h1>

<h2>8056186066</h2>

`;

}


function logout(){

location.reload();

}
/* ===========================
   CUSTOM CURSOR
=========================== */

const cursor = document.getElementById("cursor");

document.addEventListener("mousemove",(e)=>{

    cursor.style.left=e.clientX+"px";

    cursor.style.top=e.clientY+"px";

});


/* ===========================
   PARTICLE BACKGROUND
=========================== */

const canvas=document.getElementById("particles");

const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

let particles=[];

class Particle{

constructor(){

this.x=Math.random()*canvas.width;

this.y=Math.random()*canvas.height;

this.size=Math.random()*3+1;

this.speedX=(Math.random()-0.5);

this.speedY=(Math.random()-0.5);

}

update(){

this.x+=this.speedX;

this.y+=this.speedY;

if(this.x>canvas.width)this.x=0;

if(this.x<0)this.x=canvas.width;

if(this.y>canvas.height)this.y=0;

if(this.y<0)this.y=canvas.height;

}

draw(){

ctx.beginPath();

ctx.arc(this.x,this.y,this.size,0,Math.PI*2);

ctx.fillStyle="cyan";

ctx.shadowBlur=20;

ctx.shadowColor="cyan";

ctx.fill();

}

}

for(let i=0;i<120;i++){

particles.push(new Particle());

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

for(let p of particles){

p.update();

p.draw();

}

requestAnimationFrame(animate);

}

animate();

window.addEventListener("resize",()=>{

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

});
// =========================
// XBOX ACHIEVEMENT SYSTEM
// =========================

function achievement(text){

const box=document.getElementById("achievement");

const txt=document.getElementById("achievementText");

txt.innerHTML=text;

box.classList.add("showAchievement");

setTimeout(()=>{

box.classList.remove("showAchievement");

},3500);

}


// =========================
// SECRET CODES
// =========================

let secret="";

document.addEventListener("keydown",(e)=>{

secret+=e.key.toLowerCase();

if(secret.length>25){

secret=secret.slice(-25);

}

if(secret.includes("dragon")){

achievement("🐉 Dragon Mode Activated!");

secret="";

}

if(secret.includes("minecraft")){

achievement("⛏️ Creeper Nearby!");

secret="";

}

if(secret.includes("roblox")){

achievement("🎮 Roblox Hub Loaded!");

secret="";

}

if(secret.includes("ferrari")){

achievement("🏎️ FORZA FERRARI!");

secret="";

}

if(secret.includes("formula1")){

achievement("🏁 Formula 1 Fan Detected!");

secret="";

}

});