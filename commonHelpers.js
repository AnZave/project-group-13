(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();new Swiper(".swiper",{slidesPerView:1,loop:!0,spaceBetween:16,pagination:{el:".swiper-pagination",type:"custom",renderCustom:function(o,r,n){return`<span class="current">${String(r).padStart(2,"0")}</span><span class="delimiter"></span><span class="total">${String(n).padStart(2,"0")}</span>`}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{768:{slidesPerView:2},1280:{slidesPerView:3}}});new Swiper(".swiper-modal",{slidesPerView:1,spaceBetween:24,autoplay:{delay:3e3},pagination:{el:".swiper-pagination-modal",clickable:!0},breakpoints:{400:{slidesPerView:2},600:{slidesPerView:3}}});document.querySelector(".mobile-menu-open-btn").addEventListener("click",function(){document.querySelector(".mob-menu").classList.toggle("is-open")});document.querySelector(".mob-menu-btn").addEventListener("click",function(){document.querySelector(".mob-menu").classList.toggle("is-open")});
//# sourceMappingURL=commonHelpers.js.map
