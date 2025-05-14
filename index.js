import{a as p,S as f}from"./assets/vendor-dsYlHsC8.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const m="50282426-bcbed3422443d463b1ec5299f",g="https://pixabay.com/api/";async function h(s){const r={key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await p.get(g,{params:r})).data}const n=document.querySelector(".gallery"),c=document.querySelector(".loader");let y=new f(".gallery a");function b(s){const r=s.map(({webformatURL:o,largeImageURL:a,tags:e,likes:t,views:i,comments:u,downloads:d})=>`
      <li class="gallery-item">
        <a href="${a}">
          <img src="${o}" alt="${e}" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${t}</p>
          <p><b>Views:</b> ${i}</p>
          <p><b>Comments:</b> ${u}</p>
          <p><b>Downloads:</b> ${d}</p>
        </div>
      </li>`).join("");n.insertAdjacentHTML("beforeend",r),y.refresh()}function L(){n.innerHTML=""}function w(){c.classList.remove("hidden")}function S(){c.classList.add("hidden")}iziToast.success({title:"OK",message:"Images loaded successfully!",position:"topRight"});iziToast.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});const l=document.querySelector(".form"),q=l.elements["search-text"];l.addEventListener("submit",async s=>{s.preventDefault();const r=q.value.trim();if(!r){iziToast.warning({message:"Please enter a search term!",position:"topRight"});return}L(),w();try{const o=await h(r);o.hits.length===0?iziToast.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):b(o.hits)}catch{iziToast.error({message:"An error occurred while fetching data.",position:"topRight"})}finally{S()}});
//# sourceMappingURL=index.js.map
