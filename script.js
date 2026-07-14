
const menuBtn=document.querySelector('.menu-btn');
const navLinks=document.querySelector('.nav-links');
if(menuBtn){menuBtn.addEventListener('click',()=>navLinks.classList.toggle('open'));}
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('open')));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());

const form=document.querySelector('#enquiryForm');
if(form){
 form.addEventListener('submit',e=>{
  e.preventDefault();
  const data=new FormData(form);
  const msg=`Hello AfriBase Lubes,%0A%0AName: ${encodeURIComponent(data.get('name'))}%0ACompany: ${encodeURIComponent(data.get('company'))}%0AInterest: ${encodeURIComponent(data.get('interest'))}%0AMessage: ${encodeURIComponent(data.get('message'))}`;
  window.open(`https://wa.me/27619395846?text=${msg}`,'_blank');
 });
}
