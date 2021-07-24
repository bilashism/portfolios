document.addEventListener("DOMContentLoaded",()=>{"serviceWorker"in navigator?navigator.serviceWorker.register("./sw.js",{scope:"/Preso-Blog/"}).then(()=>console.log("Service worker registered")).catch(e=>console.log("Service worker not registered",e)):alert("Please update or switch to modern browser to have the ultimate experience of the web!");class e{constructor(e,t){const r=document.createElement("script");r.defer=!0,r.src=e,document.body.insertAdjacentElement("beforeend",r),r.addEventListener("load",t||(()=>console.log("Script added successfully!!")))}}setTimeout(()=>{new e("https://www.googletagmanager.com/gtag/js?id=UA-140881194-1",()=>{function e(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],e("js",new Date),e("config","UA-140881194-1")})},2e3);const t=document.querySelector(".top-nav"),r=document.querySelector(".navbar-track");if("IntersectionObserver"in window){const e={threshold:.15};(r=>{new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting?(t.classList.replace("bg-white","bg-transparent"),t.classList.remove("shadow")):(t.classList.replace("bg-transparent","bg-white"),t.classList.add("shadow"))})},e).observe(r)})(r)}else console.log("This browser doesn't support 'Intersection Observer'!"),window.addEventListener("scroll",()=>{window.scrollY,r.getBoundingClientRect().bottom,t.classList.replace("bg-transparent","bg-white"),t.classList.add("shadow")});if(document.querySelector(".category-slider")){new e("./js/plugins/tiny-slider.js",()=>{tns({container:".category-slider",responsive:{320:{items:1,edgePadding:10},450:{edgePadding:60},576:{edgePadding:80},768:{items:2,edgePadding:50},992:{edgePadding:100},1200:{items:3,center:!0,edgePadding:80,controls:!0,controlsText:['<svg class="bi bi-arrow-left-short" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-label="arrow-left">\n                    <path fill-rule="evenodd" d="M7.854 4.646a.5.5 0 010 .708L5.207 8l2.647 2.646a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 01.708 0z" clip-rule="evenodd"/>\n                    <path fill-rule="evenodd" d="M4.5 8a.5.5 0 01.5-.5h6.5a.5.5 0 010 1H5a.5.5 0 01-.5-.5z" clip-rule="evenodd"/>\n                  </svg>','<svg class="bi bi-arrow-right-short" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"  aria-label="arrow-right">\n                    <path fill-rule="evenodd" d="M8.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L10.793 8 8.146 5.354a.5.5 0 010-.708z" clip-rule="evenodd"/>\n                    <path fill-rule="evenodd" d="M4 8a.5.5 0 01.5-.5H11a.5.5 0 010 1H4.5A.5.5 0 014 8z" clip-rule="evenodd"/>\n                  </svg>']}},slideBy:1,controls:!1,nav:!1,speed:500,lazyload:!0,autoplay:!0,autoplayTimeout:3500,autoplayHoverPause:!0,autoplayButtonOutput:!1,swipeAngle:!1})})}!function(){let e=document.querySelectorAll("[data-lz],[data-lz-srcset],[data-bg-lz]");e.forEach(e=>e.classList.add("sleeping")),"IntersectionObserver"in window?function(){let t={threshold:.15};e.forEach(e=>{new IntersectionObserver((e,t)=>{e.forEach(e=>{if(e.isIntersecting){const r=e.target,s=r.getAttribute("data-bg-lz"),o=r.getAttribute("data-lz"),a=r.getAttribute("data-lz-srcset");s&&(r.style.backgroundImage=`url(${s})`),o&&r.setAttribute("src",o),a&&r.setAttribute("srcset",a),r.classList.replace("sleeping","awake"),t.disconnect()}})},t).observe(e)})}():(console.log("This browser doesn't support 'Intersection Observer'!"),window.addEventListener("scroll",()=>{e.forEach(e=>{if(e.classList.contains("sleeping")){if(e.getBoundingClientRect().top<=window.innerHeight){const t=e.getAttribute("data-bg-lz"),r=e.getAttribute("data-lz"),s=e.getAttribute("data-lz-srcset");t&&(e.style.backgroundImage=`url(${t})`),r&&e.setAttribute("src",r),s&&e.setAttribute("srcset",s),e.classList.replace("sleeping","awake")}}})}))}(),document.querySelector(".footer-year").textContent=`${(new Date).getFullYear()}`});