(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function l(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=l(e);fetch(e.href,o)}})();const a=new Promise((t,r)=>{r("Bad Idea")});a.then(t=>{console.log(t)}).catch(t=>{console.log(` Error : ${t}`)}).finally(()=>{console.log(" Finally You did It")});const s=document.querySelector("#advice"),d="https://api.adviceslip.com/advice",u=document.querySelector(".refreshBtn");document.querySelector(".advice-card");async function i(){try{return await(await fetch(d)).json()}catch(t){console.error("Some network error: ",t)}}(async()=>{const t=await i();s.textContent=t.slip.advice})();u.addEventListener("click",()=>{i().then(t=>{console.log(t),s.textContent=t.slip.advice})});
