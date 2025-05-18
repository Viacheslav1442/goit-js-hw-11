import{a as g,S as l,i}from"./assets/vendor-BMHzDZyJ.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();function p(o){const r="https://pixabay.com",n="/api/",a=new URLSearchParams({key:"50282426-bcbed3422443d463b1ec5299f",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${r}${n}?${a}`;return g.get(e).then(t=>t.data.hits).catch(t=>{console.log("Помилка при запиті до Pixabay:",t)})}const c=document.querySelector(".gallery"),y=new l(".gallery a"),u=document.querySelector(".loader-container");function h(o){const r=o.map(n=>{const{webformatURL:a,largeImageURL:e,tags:t,likes:s,views:d,comments:m,downloads:f}=n;return`
        <li><a class="gallery-link" href="${e}">
          <div class="gallery-item">
            <img class="gallery-image" src="${a}" alt="${t}" loading="lazy" />
            <div class="gallery-info">
              <p><b>Likes:</b> ${s}</p>
              <p><b>Views:</b> ${d}</p>
              <p><b>Comments:</b> ${m}</p>
              <p><b>Downloads:</b> ${f}</p>
            </div>
          </div>
        </a></li>
      `}).join("");c.insertAdjacentHTML("beforeend",r),y.refresh()}function b(){c.innerHTML=""}function L(){u.classList.remove("hidden")}function w(){u.classList.add("hidden")}const v=document.querySelector(".gallery"),$=document.querySelector(".form");$.addEventListener("submit",o=>{o.preventDefault();const r=o.target.elements["search-text"].value;if(L(),r.trim()===""){i.show({title:"Warning",message:"Please enter a search term before submitting!",position:"topRight",color:"yellow"}),o.target.reset();return}b(),p(r).then(n=>{if(n.length===0)i.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"});else{const a=h(n);v.insertAdjacentHTML("beforeend",a)}}).finally(()=>{w()}),o.target.reset()});new l(".gallery-item a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=index.js.map
