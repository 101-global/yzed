if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return c[e]||(s=new Promise(async s=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=s}else importScripts(e),s()})),s.then(()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]})},s=(s,c)=>{Promise.all(s.map(e)).then(e=>c(1===e.length?e[0]:e))},c={require:Promise.resolve(s)};self.define=(s,a,r)=>{c[s]||(c[s]=Promise.resolve().then(()=>{let c={};const n={uri:location.origin+s.slice(1)};return Promise.all(a.map(s=>{switch(s){case"exports":return c;case"module":return n;default:return e(s)}})).then(e=>{const s=r(...e);return c.default||(c.default=s),c})}))}}define("./sw.js",["./workbox-e032be30"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/",revision:"neuz3MRGsT0fHkj-UrSWm"},{url:"/YZED_loadingkopie.png",revision:"4a05d6cb6959a8e88abac51b2d2e58fb"},{url:"/_next/static/chunks/a3c7d80da8ae28115f5f0cb051dd17a0108b2bf3.7b310fc0ec187f2c6e8a.js",revision:"fa8eb55d1d560bde6bebb31a7837418b"},{url:"/_next/static/chunks/commons.95738e6f00712a0fa292.js",revision:"ddadae4c9f5b94b3feb0eee631a0bc71"},{url:"/_next/static/chunks/framework.619a4f70c1d4d3a29cbc.js",revision:"33dad5bd4dd35523782d0a34ac47f9fc"},{url:"/_next/static/chunks/framework.619a4f70c1d4d3a29cbc.js.LICENSE.txt",revision:"c7c771c7a9ea0b2f7e6b82ef94cc9f76"},{url:"/_next/static/css/c1c6ef3c4dcd7d3d2360.css",revision:"43cbdaa9f96da1aa93ac65612774c4ab"},{url:"/_next/static/media/revicons.57fd05d4ae650374c8deeff7c4aae380.ttf",revision:"17629a5dfe0d3c3946cf401e1895f091"},{url:"/_next/static/media/revicons.a77de540a38981833f9e31bd4c365cc6.eot",revision:"2feb69ccb596730c72920c6ba3e37ef8"},{url:"/_next/static/media/revicons.e8746a624ed098489406e6113d185258.woff",revision:"04eb8fc57f27498e5ae37523e3bfb2c7"},{url:"/_next/static/neuz3MRGsT0fHkj-UrSWm/_buildManifest.js",revision:"e0adf7b6664d010471cafc1ed4869a30"},{url:"/_next/static/neuz3MRGsT0fHkj-UrSWm/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/neuz3MRGsT0fHkj-UrSWm/pages/_app.js",revision:"e630d6a43799c416311467837d4fd731"},{url:"/_next/static/neuz3MRGsT0fHkj-UrSWm/pages/_error.js",revision:"8525ba22e799b75e108c84e1b34ba23e"},{url:"/_next/static/neuz3MRGsT0fHkj-UrSWm/pages/index.js",revision:"3497cce966124e44cd84a442da5d840f"},{url:"/_next/static/neuz3MRGsT0fHkj-UrSWm/pages/reserved.js",revision:"c79617705fff9f5eebf1cf729d471cec"},{url:"/_next/static/runtime/main-8ca4ac6c40ed084667a0.js",revision:"25d8e3152d05774a76b2739bb9dcd602"},{url:"/_next/static/runtime/polyfills-b5792cb05b81d93fa5b1.js",revision:"ee0c827fc36e3f645e45846e74592633"},{url:"/_next/static/runtime/webpack-c212667a5f965e81e004.js",revision:"f5e6e2fca3144cc944812cfa3547f475"},{url:"/android-chrome-192x192.png",revision:"c87b3ef459c3d9e2ca89a7ce214ea64d"},{url:"/android-chrome-512x512.png",revision:"efa98c7406efc5721bade2c73ffb7ec5"},{url:"/apple-touch-icon.png",revision:"875608d0dc40d89e9b48b94e82489103"},{url:"/favicon-16x16.png",revision:"c86804fcb5629d4b5d5e8099439d9b7f"},{url:"/favicon-32x32.png",revision:"0cbcefe245f1bdfed30f1b48f8351ce6"},{url:"/favicon.ico",revision:"412192267449ea67eebabd3e62acfe51"},{url:"/manifest.json",revision:"688128be216cc2f753fe641590f2fcd3"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/use\.fontawesome\.com\/releases\/.*/i,new e.CacheFirst({cacheName:"font-awesome",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.StaleWhileRevalidate({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.StaleWhileRevalidate({cacheName:"others",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
