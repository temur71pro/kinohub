let idx=0
setInterval(()=>{
 const slides=document.querySelectorAll('.slide')
 idx=(idx+1)%slides.length
 document.getElementById('slider').style.transform=`translateX(-${idx*100}%)`
},4000)

function filterMovies(q){
 q=q.toLowerCase()
 document.querySelectorAll('.card h4').forEach(t=>{
  t.parentElement.style.display=t.innerText.toLowerCase().includes(q)?'block':'none'
 })
}

const slider=document.getElementById("slider");
const slides=document.querySelectorAll(".slide");
let index=0;

document.querySelector(".next").onclick=()=>{
index=(index+1)%slides.length;
update();
};

document.querySelector(".prev").onclick=()=>{
index=(index-1+slides.length)%slides.length;
update();
};

function update(){
slider.style.transform=`translateX(-${index*100}%)`;
}

setInterval(()=>{
index=(index+1)%slides.length;
update();
},5000);


// HAMBURGER MENU TO'G'RILASH
function toggleMenu(){
  document.querySelector("nav").classList.toggle("active");
}