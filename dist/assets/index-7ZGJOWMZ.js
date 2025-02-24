(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();let l="https://pokeapi.co/api/v2/pokemon/",f=document.querySelector(".container");document.querySelector(".measures");const p=document.querySelectorAll(".btn-nav");async function u(){for(let t=1;t<=151;t++){const r=await(await fetch(l+t)).json();d(r)}}function d(t){let n=document.createElement("div");n.classList.add("pokemon-card");let r=m(t.id),i=t.name.toUpperCase(),e="",o=t.height/10,s=t.weight/10;t.types.forEach(c=>{let a=c.type.name;e=e+`
            <button class="info ${a}">
                ${a.toUpperCase()}
            </button>
        `}),n.innerHTML=`
        <h1>
            #${r}
        </h1>
        <img class="pokemon-image" 
        src="${t.sprites.other["official-artwork"].front_default}" 
        alt="imagen de ${i}">
        <div class="nombre-id">
            <button class="btn info">
                #${r}
            </button>
            <h2>
                ${i}
            </h2>
        </div>
        <div class="types">
            ${e}
        </div>
        <div class="measures">
            <button class="btn info">
                ${o} M
            </button>
            <button class="btn info">
                ${s} KG
            </button>
        </div>
    `,f.append(n)}function m(t){return t<10?"00"+t:t<100?"0"+t:t}u();p.forEach(t=>{t.addEventListener("click",n=>{f.innerHTML="";const r=n.currentTarget.id;if(r=="show-all"){u();return}async function i(){for(let e=1;e<=151;e++){const s=await(await fetch(l+e)).json();s.types.forEach(c=>{c.type.name==r&&d(s)})}}i()})});
