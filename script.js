// ENTER STORE + MUSIC START
function enterStore(){

document.getElementById("welcome").style.display="none";
document.getElementById("main").style.display="block";

const music=document.getElementById("bgMusic");
music.volume=0.4;
music.play().catch(()=>{});

// set button icon
const btn=document.getElementById("musicBtn");
if(btn) btn.innerHTML="🔊";

updateVisualizerState();

}


// MUSIC TOGGLE
function toggleMusic(){

const music=document.getElementById("bgMusic");
const btn=document.getElementById("musicBtn");

if(!music) return;

if(music.paused){
music.play();
btn.innerHTML="🔊";
}else{
music.pause();
btn.innerHTML="🔇";
}

updateVisualizerState();

}


// VISUALIZER CONTROL
function updateVisualizerState(){

const music=document.getElementById("bgMusic");
const bars=document.querySelectorAll("#visualizer .bar");

if(!music || !bars) return;

bars.forEach(bar=>{
if(music.paused){
bar.style.animationPlayState="paused";
}else{
bar.style.animationPlayState="running";
}
});

}

// keep checking music state
setInterval(updateVisualizerState,300);


// MATRIX EFFECT
const canvas=document.getElementById("matrix");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

const letters="SPIDERVAMPIRE0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const chars=letters.split("");

const fontSize=14;
const columns=Math.floor(canvas.width/fontSize);

const drops=[];

for(let i=0;i<columns;i++){
drops[i]=1;
}

function draw(){

ctx.fillStyle="rgba(0,0,0,0.05)";
ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="#ff0000";
ctx.font=fontSize+"px monospace";

for(let i=0;i<drops.length;i++){

const text=chars[Math.floor(Math.random()*chars.length)];

ctx.fillText(text,i*fontSize,drops[i]*fontSize);

if(drops[i]*fontSize>canvas.height && Math.random()>0.975){
drops[i]=0;
}

drops[i]++;
}

}

setInterval(draw,35);


// RESPONSIVE MATRIX
window.addEventListener("resize",()=>{

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

});


// TYPEWRITER EFFECT
const title="SPIDERVAMPIRE BM X STORE";
let index=0;

function typeWriter(){

const heading=document.querySelector(".welcome-box h1");

if(heading && index<title.length){
heading.innerHTML+=title.charAt(index);
index++;
setTimeout(typeWriter,100);
}

}

window.onload=()=>{

const heading=document.querySelector(".welcome-box h1");

if(heading){
heading.innerHTML="";
typeWriter();
}

};
