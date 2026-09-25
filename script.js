// Veltrix Cloud — plan selector
const DISCORD_URL = "https://discord.gg/FVWmCpAMrV";

const PLAN_DATA = {
  minecraft: {
    title: "Minecraft Hosting",
    subtitle: "Choose your RAM and server resources. Starting from ₹60/month.",
    plans: [
      ["2 GB", "₹60", "2 GB RAM • 50 GB SSD • Instant Setup"],
      ["4 GB", "₹100", "4 GB RAM • 80 GB SSD • DDoS Protection"],
      ["6 GB", "₹150", "6 GB RAM • 100 GB SSD • DDoS Protection"],
      ["8 GB", "₹200", "8 GB RAM • 150 GB SSD • Priority Support"],
      ["12 GB", "₹300", "12 GB RAM • 200 GB SSD • Priority Support"],
      ["16 GB", "₹400", "16 GB RAM • 250 GB SSD • High Performance"],
      ["24 GB", "₹550", "24 GB RAM • 350 GB SSD • High Performance"],
      ["32 GB", "₹650", "32 GB RAM • 500 GB SSD • Premium Support"],
      ["64 GB", "₹799", "64 GB RAM • 750 GB SSD • Premium Support"],
      ["128 GB", "₹999", "128 GB RAM • 1 TB SSD • Premium Support"],
      ["Infinity", "Custom", "Custom RAM • CPU • Disk • Enterprise resources"]
    ]
  },
  vps: {
    title: "VPS Hosting",
    subtitle: "Select the VPS size you need. Contact Discord to confirm exact CPU/storage.",
    plans: [
      ["2 GB VPS", "₹199", "2 GB RAM • SSD • Root Access"],
      ["4 GB VPS", "₹299", "4 GB RAM • SSD • Root Access"],
      ["8 GB VPS", "₹499", "8 GB RAM • NVMe • Root Access"],
      ["16 GB VPS", "₹799", "16 GB RAM • NVMe • Root Access"],
      ["32 GB VPS", "₹1,399", "32 GB RAM • NVMe • Root Access"],
      ["64 GB VPS", "₹2,499", "64 GB RAM • NVMe • Root Access"]
    ]
  },
  game: {
    title: "Game Servers",
    subtitle: "High-performance hosting for popular games.",
    plans: [
      ["Starter", "₹149", "2 GB RAM • SSD • Instant Setup"],
      ["Pro", "₹299", "4 GB RAM • SSD • DDoS Protection"],
      ["Advanced", "₹499", "8 GB RAM • NVMe • Priority Support"],
      ["Premium", "₹899", "16 GB RAM • NVMe • Premium Support"]
    ]
  },
  dedicated: {
    title: "Dedicated Servers",
    subtitle: "Powerful dedicated resources for demanding workloads.",
    plans: [
      ["Starter", "₹2,499", "Dedicated CPU • NVMe • Full Root"],
      ["Performance", "₹3,999", "High CPU • NVMe • Full Root"],
      ["Enterprise", "Custom", "Custom CPU • RAM • Storage • DDoS options"]
    ]
  }
};

const modal = document.getElementById("plansModal");
const grid = document.getElementById("plansGrid");
const title = document.getElementById("plansTitle");
const subtitle = document.getElementById("plansSubtitle");

function openPlans(category) {
  const data = PLAN_DATA[category] || PLAN_DATA.minecraft;
  title.textContent = data.title;
  subtitle.textContent = data.subtitle;
  grid.innerHTML = data.plans.map((plan, i) => `
    <article class="plan-option ${i === 1 ? "featured" : ""}">
      ${i === 1 ? '<span class="plan-badge">POPULAR</span>' : ""}
      <h3>${plan[0]}</h3>
      <strong>${plan[1]}${plan[1] === "Custom" ? "" : '<em>/month</em>'}</strong>
      <p>${plan[2]}</p>
      <a class="btn primary plan-buy" href="${DISCORD_URL}" target="_blank" rel="noopener">
        Buy Now →
      </a>
    </article>
  `).join("");
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closePlans() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

document.querySelectorAll(".view-plans").forEach(btn => {
  btn.addEventListener("click", () => openPlans(btn.dataset.category));
});

document.getElementById("plansClose").addEventListener("click", closePlans);
document.getElementById("plansBackdrop").addEventListener("click", closePlans);
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closePlans();
});

// Discord navigation button
document.getElementById("discordNav").href = DISCORD_URL;

// Mobile menu
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
function resize(){
  canvas.width=innerWidth;
  canvas.height=innerHeight;
  flakes=Array.from({length:Math.min(110,Math.floor(innerWidth/10))},()=>({
    x:Math.random()*canvas.width,y:Math.random()*canvas.height,r:Math.random()*2.2+.5,
    s:Math.random()*1.2+.35,w:Math.random()*Math.PI*2
  }));
}
function snow(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle="rgba(220,245,255,.75)";
  flakes.forEach(f=>{
    f.y+=f.s;
    f.x+=Math.sin(f.w+=.008)*.18;
    if(f.y>canvas.height+5){f.y=-5;f.x=Math.random()*canvas.width}
    ctx.beginPath();ctx.arc(f.x,f.y,f.r,0,Math.PI*2);ctx.fill()
  });
  requestAnimationFrame(snow)
}
addEventListener("resize",resize); resize(); snow();
