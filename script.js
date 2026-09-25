// Change this ONE value to your real Veltrix Cloud Discord invite.
const DISCORD_URL = "https://discord.gg/FVWmCpAMrV";

document.querySelectorAll(".buy").forEach(el => {
  el.href = DISCORD_URL;
  el.target = "_blank";
  el.rel = "noopener";
});
document.getElementById("discordNav").href = DISCORD_URL;
document.getElementById("menuBtn").addEventListener("click", () => {
  const nav = document.querySelector(".nav nav");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
  nav.style.position = "absolute";
  nav.style.top = "72px";
  nav.style.left = "0";
  nav.style.right = "0";
  nav.style.padding = "18px";
  nav.style.background = "rgba(2,11,24,.98)";
  nav.style.flexDirection = "column";
});

// Lightweight snowfall; no library required.
const canvas = document.getElementById("snow");
const ctx = canvas.getContext("2d");
let flakes = [];
function resize(){canvas.width=innerWidth;canvas.height=innerHeight;flakes=Array.from({length:Math.min(110,Math.floor(innerWidth/10))},()=>({x:Math.random()*canvas.width,y:Math.random()*canvas.height,r:Math.random()*2.2+.5,s:Math.random()*1.2+.35,w:Math.random()*Math.PI*2}));}
function snow(){ctx.clearRect(0,0,canvas.width,canvas.height);ctx.fillStyle="rgba(220,245,255,.75)";flakes.forEach(f=>{f.y+=f.s;f.x+=Math.sin(f.w+=.008)*.18;if(f.y>canvas.height+5){f.y=-5;f.x=Math.random()*canvas.width}ctx.beginPath();ctx.arc(f.x,f.y,f.r,0,Math.PI*2);ctx.fill()});requestAnimationFrame(snow)}
addEventListener("resize",resize); resize(); snow();
