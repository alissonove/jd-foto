const track=document.getElementById('track');
const slides=document.querySelectorAll('.slide');
const prev=document.getElementById('prev');
const next=document.getElementById('next');
const dotsContainer=document.getElementById('dots');
let index=0;const total=slides.length;
slides.forEach((_,i)=>{
  const dot=document.createElement('button');
  if(i===0)dot.classList.add('active');
  dot.addEventListener('click',()=>goTo(i));
  dotsContainer.appendChild(dot);
});
const dots=dotsContainer.querySelectorAll('button');
function update(){
  track.style.transform=`translateX(-${index*100}%)`;
  dots.forEach(d=>d.classList.remove('active'));
  dots[index].classList.add('active');
}
function goTo(i){index=i;update();resetTimer();}
function nextSlide(){index=(index+1)%total;update();}
function prevSlide(){index=(index-1+total)%total;update();}
next.addEventListener('click',()=>{nextSlide();resetTimer();});
prev.addEventListener('click',()=>{prevSlide();resetTimer();});
let timer=setInterval(nextSlide,3000);
function resetTimer(){clearInterval(timer);timer=setInterval(nextSlide,3000);}
let startX=0;
track.addEventListener('touchstart',e=>startX=e.touches[0].clientX);
track.addEventListener('touchend',e=>{
  let diff=startX-e.changedTouches[0].clientX;
  if(Math.abs(diff)>50){diff>0?nextSlide():prevSlide();resetTimer();}
});
const lightbox=document.getElementById('lightbox');
const lbImg=document.getElementById('lb-img');
document.querySelectorAll('.card img').forEach(img=>{
  img.addEventListener('click',()=>{
    lbImg.src=img.src;
    lightbox.classList.add('active');
  });
});
lightbox.addEventListener('click',()=>lightbox.classList.remove('active'));