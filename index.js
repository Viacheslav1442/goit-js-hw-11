import{a as g,S as l,i}from"./assets/vendor-BMHzDZyJ.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const p="https://pixabay.com",y="/api/",h="50282426-bcbed3422443d463b1ec5299f";function b(n){const o=new URLSearchParams({key:h,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0}),s=`${p}${y}?${o}`;return g.get(s).then(r=>r.data.hits).catch(r=>{throw console.error("Помилка при запиті до Pixabay:",r),r})}const c=document.querySelector(".gallery"),L=new l(".gallery a"),u=document.querySelector(".loader-container");function w(n){const o=n.map(s=>{const{webformatURL:r,largeImageURL:e,tags:t,likes:a,views:d,comments:m,downloads:f}=s;return`
        <li><a class="gallery-link" href="${e}">
          <div class="gallery-item">
            <img class="gallery-image" src="${r}" alt="${t}" loading="lazy" />
            <div class="gallery-info">
              <p><b>Likes:</b> ${a}</p>
              <p><b>Views:</b> ${d}</p>
              <p><b>Comments:</b> ${m}</p>
              <p><b>Downloads:</b> ${f}</p>
            </div>
          </div>
        </a></li>
      `}).join("");c.insertAdjacentHTML("beforeend",o),L.refresh()}function v(){c.innerHTML=""}function $(){u.classList.remove("hidden")}function P(){u.classList.add("hidden")}const S=document.querySelector(".gallery"),q=document.querySelector(".form");q.addEventListener("submit",n=>{n.preventDefault();const o=n.target.elements["search-text"].value;if($(),o.trim()===""){i.show({title:"Warning",message:"Please enter a search term before submitting!",position:"topRight",color:"yellow"}),n.target.reset();return}v(),b(o).then(s=>{if(s.length===0)i.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"});else{const r=w(s);S.insertAdjacentHTML("beforeend",r)}}).finally(()=>{P()}),n.target.reset()});new l(".gallery-item a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=index.js.map
