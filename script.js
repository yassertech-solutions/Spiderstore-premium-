function enterStore(){

document.getElementById("welcome").style.display="none";

document.getElementById("main").style.display="block";

}

const canvas=document.getElementById("matrix");

const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

const letters="SPIDERVAMPIRE0123456789";

const chars=letters.split("");

const fontSize=14;

const columns=canvas.width/fontSize;

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

const text=
chars[Math.floor(Math.random()*chars.length)];

ctx.fillText(
text,
i*fontSize,
drops[i]*fontSize
);

if(
drops[i]*fontSize>
canvas.height &&
Math.random()>0.975
){
drops[i]=0;
}

drops[i]++;
}

}

setInterval(draw,35);
