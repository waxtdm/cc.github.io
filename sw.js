if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(i[f])return;let c={};const o=e=>s(e,f),a={module:{uri:f},exports:c,require:o};i[f]=Promise.all(n.map((e=>a[e]||o(e)))).then((e=>(r(...e),c)))}}define(["./workbox-f8357146"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-43b35bf0.js",revision:null},{url:"assets/index-d4d8ef87.css",revision:null},{url:"index.html",revision:"ff53167795869a7d8839522128a6671c"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"images/icon/48.png",revision:"8a7865b199eff69709b69a613e78b127"},{url:"images/icon/72.png",revision:"30ae6dd8936e2edfd33f982115272bcf"},{url:"images/icon/96.png",revision:"1a2ea47f59dd250910df148ce44534a1"},{url:"images/icon/128.png",revision:"9d7a97fb8b939a014cfb6ecc03a4324b"},{url:"images/icon/144.png",revision:"5ab90d19ba9cb52666187d2c02003574"},{url:"images/icon/192.png",revision:"e69ed07fef960feae02f874ffd6d7fac"},{url:"manifest.webmanifest",revision:"d0ae5a858f424d24ea9742e8ad14f7e3"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/(.*?)\.(js|css|woff2|woff|ttf)/,new e.CacheFirst({cacheName:"js-css-cache",plugins:[]}),"GET"),e.registerRoute(/(.*?)\.(png|jpe?g|svg|gif|bmp|psd|tiff|tga|eps)/,new e.CacheFirst({cacheName:"image-cache",plugins:[]}),"GET")}));
