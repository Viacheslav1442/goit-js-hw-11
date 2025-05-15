import{a as f,S as s,i as m}from"./assets/vendor-BMHzDZyJ.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();function p(o){const r="https://pixabay.com",n="/api/",a=new URLSearchParams({key:"50274791-f4b76ab6fee4d49d8c558ca21",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${r}${n}?${a}`;return f.get(e).then(t=>t.data.hits).catch(t=>{console.log("Помилка при запиті до Pixabay:",t)})}const c=document.querySelector(".gallery"),l=document.querySelector(".loader-container");let y=new s(".gallery a");function h(o){const r=o.map(({webformatURL:n,largeImageURL:a,tags:e,likes:t,views:i,comments:u,downloads:d})=>`
      <li class="gallery-item">
        <a href="${a}">
          <img src="${n}" alt="${e}" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${t}</p>
          <p><b>Views:</b> ${i}</p>
          <p><b>Comments:</b> ${u}</p>
          <p><b>Downloads:</b> ${d}</p>
        </div>
      </li>`).join("");c.insertAdjacentHTML("beforeend",r),y.refresh()}function g(){c.innerHTML=""}function b(){l.classList.remove("hidden")}function L(){l.classList.add("hidden")}const $=document.querySelector(".gallery"),S=document.querySelector(".form");S.addEventListener("submit",o=>{o.preventDefault();const r=o.target.elements["search-text"].value;b(),p(r).then(n=>{if(r.trim()===""||n.length===0)m.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"});else{const a=h(n);$.insertAdjacentHTML("beforeend",a)}}).finally(()=>{L()}),o.target.reset(),g()});new s(".gallery-item a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=index.js.map
