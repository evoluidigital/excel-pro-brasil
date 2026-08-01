/* ==========================================================
   EXCEL PRO BRASIL
   SCRIPT.JS - PARTE 1
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

const body=document.body;
const progress=document.querySelector(".scroll-progress");
const menu=document.querySelector(".menu");
const menuBtn=document.querySelector(".menu-mobile");
const menuLinks=document.querySelectorAll(".menu a");
const sections=document.querySelectorAll("section");

/* ==========================================================
   BARRA DE PROGRESSO
========================================================== */

function updateProgress(){

const total=document.documentElement.scrollHeight-window.innerHeight;
const current=window.scrollY;
const percent=(current/total)*100;

progress.style.width=`${percent}%`;

}

window.addEventListener("scroll",updateProgress);

/* ==========================================================
   MENU MOBILE
========================================================== */

if(menuBtn){

menuBtn.addEventListener("click",()=>{

menu.classList.toggle("menu-open");

});

}

menuLinks.forEach(link=>{

link.addEventListener("click",()=>{

menu.classList.remove("menu-open");

});

});

/* ==========================================================
   MENU ATIVO
========================================================== */

function activeMenu(){

let current="";

sections.forEach(section=>{

const top=window.scrollY;
const offset=section.offsetTop-180;
const height=section.offsetHeight;

if(top>=offset && top<offset+height){

current=section.getAttribute("id");

}

});

menuLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

}

window.addEventListener("scroll",activeMenu);
activeMenu();
  /* ==========================================================
   ANIMAÇÃO AO ENTRAR NA TELA
========================================================== */

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.15
});

document.querySelectorAll(

".card-mercado,.recurso,.card-dica,.curiosidade,.aula-card,.etapa,.comparativo-card,.faq-item"

).forEach(item=>{

item.classList.add("hidden");

observer.observe(item);

});

/* ==========================================================
   BOTÃO VOLTAR AO TOPO
========================================================== */

const topButton=document.createElement("button");

topButton.innerHTML='<i class="fa-solid fa-arrow-up"></i>';

topButton.className="top-button";

body.appendChild(topButton);

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topButton.classList.add("show-top");

}else{

topButton.classList.remove("show-top");

}

});

topButton.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/* ==========================================================
   EFEITO NOS BOTÕES
========================================================== */

document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-3px) scale(1.02)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="";

});

});
  /* ==========================================================
   EFEITO DE REVELAÇÃO DOS ELEMENTOS
========================================================== */

const revealItems=document.querySelectorAll(".hidden");

const revealOnScroll=()=>{

const trigger=window.innerHeight*0.90;

revealItems.forEach(item=>{

const top=item.getBoundingClientRect().top;

if(top<trigger){

item.classList.add("show");

}

});

};

window.addEventListener("scroll",revealOnScroll);

revealOnScroll();

/* ==========================================================
   EFEITO PARALLAX SUAVE NO HERO
========================================================== */

const heroImage=document.querySelector(".hero-imagem img");

window.addEventListener("scroll",()=>{

if(heroImage){

const offset=window.scrollY*0.08;

heroImage.style.transform=`translateY(${offset}px)`;

}

});

/* ==========================================================
   CONTADOR DE LEITURA
========================================================== */

let readingStarted=false;

window.addEventListener("scroll",()=>{

if(readingStarted) return;

if(window.scrollY>250){

readingStarted=true;

console.log("Visitante começou a navegar pelo conteúdo.");

}

});

/* ==========================================================
   ANO AUTOMÁTICO NO RODAPÉ
========================================================== */

const copy=document.querySelector(".copyright p");

if(copy){

copy.innerHTML=copy.innerHTML.replace("2026",new Date().getFullYear());

}

/* ==========================================================
   PLACEHOLDER PARA FUTURAS FUNÇÕES

   - Busca de artigos
   - Sistema de categorias
   - Dark Mode
   - Newsletter
   - Comentários
   - Quiz de Excel
========================================================== */



});

