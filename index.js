import{a as f,S as m}from"./assets/vendor-dsYlHsC8.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function p(i){const r="https://pixabay.com",o="/api/",s=new URLSearchParams({key:"50274791-f4b76ab6fee4d49d8c558ca21",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${r}${o}?${s}`;return f.get(e).then(t=>t.data.hits).catch(t=>{console.log("Помилка при запиті до Pixabay:",t)})}const n=document.querySelector(".gallery"),c=document.querySelector(".loader-container");let h=new m(".gallery a");function g(i){const r=i.map(({webformatURL:o,largeImageURL:s,tags:e,likes:t,views:a,comments:u,downloads:d})=>`
      <li class="gallery-item">
        <a href="${s}">
          <img src="${o}" alt="${e}" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${t}</p>
          <p><b>Views:</b> ${a}</p>
          <p><b>Comments:</b> ${u}</p>
          <p><b>Downloads:</b> ${d}</p>
        </div>
      </li>`).join("");n.insertAdjacentHTML("beforeend",r),h.refresh()}function y(){n.innerHTML=""}function b(){c.classList.remove("hidden")}function L(){c.classList.add("hidden")}iziToast.success({title:"OK",message:"Images loaded successfully!",position:"topRight"});iziToast.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});const l=document.querySelector(".form"),P=l.elements["search-text"];l.addEventListener("submit",async i=>{i.preventDefault();const r=P.value.trim();if(!r){iziToast.warning({message:"Please enter a search term!",position:"topRight"});return}y(),b();try{const o=await p(r);o.hits.length===0?iziToast.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):g(o.hits)}catch{iziToast.error({message:"An error occurred while fetching data.",position:"topRight"})}finally{L()}});
//# sourceMappingURL=index.js.map
