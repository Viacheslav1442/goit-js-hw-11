import{a as d,S as l,i}from"./assets/vendor-BMHzDZyJ.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();const u="https://pixabay.com",f="/api/",m="50282426-bcbed3422443d463b1ec5299f";function p(e){const a=new URLSearchParams({key:m,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0}),s=`${u}${f}?${a}`;return d.get(s).then(t=>t.data.hits).catch(t=>{throw console.error("Помилка при запиті до Pixabay:",t),t})}let c;function y(e){const a=document.querySelector(".gallery"),s=e.map(t=>`
        <div class="gallery-item">
          <a class="gallery-link" href="${t.largeImageURL}">
            <img class="gallery-image" src="${t.webformatURL}" alt="${t.tags}" />
          </a>
          <div class="info">
            <p><b>Likes:</b> ${t.likes}</p>
            <p><b>Views:</b> ${t.views}</p>
            <p><b>Comments:</b> ${t.comments}</p>
            <p><b>Downloads:</b> ${t.downloads}</p>
          </div>
        </div>
      `).join("");a.insertAdjacentHTML("beforeend",s),c?c.refresh():c=new l(".gallery a",{captionsData:"alt",captionDelay:250})}function h(){const e=document.querySelector(".gallery");e.innerHTML=""}function g(){const e=document.querySelector(".loader");e&&e.classList.remove("hidden")}function b(){const e=document.querySelector(".loader");e&&e.classList.add("hidden")}document.querySelector(".gallery");const L=document.querySelector(".form"),w=new l(".gallery-item a",{captionsData:"alt",captionDelay:250});L.addEventListener("submit",async e=>{e.preventDefault();const a=e.target.elements["search-text"].value.trim();if(a===""){i.show({title:"Error",message:"Please enter a search query!",position:"topRight",color:"red"});return}h(),g();try{const s=await p(a);s.length===0?i.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"}):(y(s),w.refresh())}catch(s){i.show({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight",color:"red"}),console.error(s)}finally{b(),e.target.reset()}});
//# sourceMappingURL=index.js.map
