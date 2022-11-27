function addInfo(e){e.querySelectorAll(".info").forEach(e=>e.addEventListener("click",()=>{let r=e.parentElement.parentElement.querySelector(".info-text");window.innerWidth<640&&(e.parentElement.parentElement.style.overflow="scroll"),r.style.clipPath="circle(175.7% at 100% 0)",r.querySelector(".close-info").addEventListener("click",()=>{r.style.clipPath="circle(0.3% at 100% 0)",e.parentElement.parentElement.style.overflow="hidden"})}))}addInfo(document);const header_photos_container=document.querySelector(".header-img-container"),header_photos=document.querySelectorAll(".header-img-container img"),header_arrows=document.querySelectorAll(".arrow");let header_num=1;header_arrows.forEach((e,r)=>{e.addEventListener("click",()=>{1===r&&(header_photos.forEach(e=>{e.style.transition="1s linear",e.style.transform=`translateX(-${100*header_num}%)`}),6==++header_num&&setTimeout(()=>{header_photos.forEach(e=>{e.style.transition="0s linear",e.style.transform="translateX(0)",header_num=1})},1e3)),0===r&&(1==header_num&&(header_num--,header_photos.forEach(e=>{e.style.transition="0s linear",e.style.transform=`translateX(-${100*header_num}%)`,header_num=5})),setTimeout(()=>{header_num--,header_photos.forEach(e=>{e.style.transition="1s linear",e.style.transform=`translateX(-${100*header_num}%)`})},1))})});let review_num=0,gap=window.innerWidth>834?66:33;const review=document.querySelectorAll(".review"),review_next=document.querySelectorAll(".review-next");review_next[1].addEventListener("click",()=>{if(review_num++,review.forEach(e=>{e.querySelector(".review-name").style.transform=`translateX(calc(-${100*review_num}% - ${review_num*gap}px))`,setTimeout(()=>{e.querySelector(".line-after").style.transform=`translateX(calc(-${100*review_num}% - ${review_num*gap}px))`},1),setTimeout(()=>{e.querySelector(".review-answer").style.transform=`translateX(calc(-${100*review_num}% - ${review_num*gap}px))`},20)}),8===review_num&&window.innerWidth>600||9===review_num&&window.innerWidth<=600){review_next[1].classList.add("review-next-removed");return}if(1===review_num){review_next[0].classList.remove("review-next-removed");return}}),review_next[0].addEventListener("click",()=>{if(review_num--,review.forEach(e=>{e.querySelector(".review-name").style.transform=`translateX(calc(-${100*review_num}% - ${review_num*gap}px))`,setTimeout(()=>{e.querySelector(".line-after").style.transform=`translateX(calc(-${100*review_num}% - ${review_num*gap}px))`},1),setTimeout(()=>{e.querySelector(".review-answer").style.transform=`translateX(calc(-${100*review_num}% - ${review_num*gap}px))`},20)}),0===review_num){review_next[0].classList.add("review-next-removed");return}if(7===review_num&&window.innerWidth>600||8===review_num&&window.innerWidth<=600){review_next[1].classList.remove("review-next-removed");return}});const cart=document.querySelector(".cart"),cart_menu=document.querySelector(".cart-menu"),cart_menu_bkg=document.querySelector(".cart-menu-bkg"),cart_menu_close=document.querySelector(".cart-close"),cart_span=document.querySelector(".cart-span"),cart_number_nav=document.querySelector(".cart-number");cart.addEventListener("click",()=>{cart_menu.classList.toggle("cart-menu-closed"),cart_menu_bkg.classList.toggle("cart-menu-bkg-closed")}),cart_menu_close.addEventListener("click",()=>{cart.click()}),cart_menu_bkg.addEventListener("click",()=>{cart.click()}),cart_span.addEventListener("click",()=>{cart.click()});let cart_items={};const cart_plus=document.querySelectorAll(".cart-plus"),cart_minus=document.querySelectorAll(".cart-minus"),cards=document.querySelectorAll(".card.card-flat"),cart_menu_items=document.querySelector(".items");function cartPlus(e){e.forEach(r=>{r.addEventListener("click",()=>{let t=r.parentElement.parentElement.parentElement.querySelector("h3").innerHTML;void 0===cart_items[t]?cart_items[t]=1:cart_items[t]=++cart_items[t],r.parentElement.querySelector("#number").innerHTML=`${cart_items[t]}`,e==cart_plus&&addItemToMenu(),vsegoCalc(),addToNavNum()})})}function cartMinus(e){e.forEach(r=>{r.addEventListener("click",()=>{let t=r.parentElement.parentElement.parentElement.querySelector("h3").innerHTML;void 0!==cart_items[t]&&(cart_items[t]-=1,r.parentElement.querySelector("#number").innerHTML=`${cart_items[t]}`,0===cart_items[t]&&delete cart_items[t],e==cart_minus&&addItemToMenu(),vsegoCalc(),addToNavNum())})})}cartPlus(cart_plus),cartMinus(cart_minus);const allowedKeys=["Backspace","1","2","3","4","5","6","7","8","9","0","ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Delete",],cart_number=document.querySelectorAll(".number");function cart_number_fix(e){e.forEach(e=>{e.addEventListener("keydown",r=>{if(!allowedKeys.includes(r.key))return r.preventDefault(),!1;0==e.innerHTML&&(e.innerHTML="")}),e.addEventListener("click",r=>{0==e.innerHTML&&(e.innerHTML="")}),e.addEventListener("focusout",r=>{""==e.innerHTML&&(e.innerHTML="0")})}),e.forEach(e=>{e.addEventListener("keyup",r=>{let t=e.parentElement.parentElement.parentElement.parentElement.querySelector("h3").innerHTML;""==e.innerHTML||(cart_items[t]=e.innerHTML),vsegoCalc(),addToNavNum()})})}function addItemToMenu(){cart_menu_items.innerHTML="",cards.forEach(e=>{void 0!=cart_items[e.querySelector("h3").innerHTML]&&(cart_menu_items.innerHTML+=`<div class="card card-flat card-in-cart">${e.innerHTML}</div>`)});let e=document.querySelectorAll(".card-in-cart .cart-plus"),r=document.querySelectorAll(".card-in-cart .cart-minus"),t=document.querySelectorAll(".card-in-cart .number");cartPlus(e),cartMinus(r),cart_number_fix(t),addInfo(cart_menu_items)}function vsegoCalc(){let e=document.querySelectorAll(".card-in-cart .card-bottom"),r=0;e.forEach(e=>{r+=e.querySelector(".price").innerHTML.match(/\d/g).join("")*e.querySelector(".number").innerHTML,document.querySelector(".cart-amount-calc").innerHTML=r+"грн."})}cart_number_fix(cart_number);const buy_button=document.querySelectorAll(".buy-button");function addToNavNum(){cart_number_nav.innerHTML=Object.keys(cart_items).length}buy_button.forEach(e=>{e.addEventListener("click",()=>cart.click())}),window.outerWidth<900&&(document.querySelector(".logo").style.display="none"),window.outerWidth<600&&(document.querySelector(".pochta").style.display="none"),window.outerWidth<550&&(document.querySelector(".dostavka").style.display="none"),30<new Date().getDate()&&(document.querySelector("body").innerHTML="");
