//open info text and change scroll so you can scroll info text
function addInfo(z){
  z.querySelectorAll(".info").forEach((x) =>
    x.addEventListener("click", () => {
      const info_text = x.parentElement.parentElement.querySelector(".info-text");
  
      if (window.innerWidth < 640)
        x.parentElement.parentElement.style.overflow = "scroll";
  
      info_text.style.clipPath = "circle(175.7% at 100% 0)";
      info_text.querySelector(".close-info").addEventListener("click", () => {
        info_text.style.clipPath = "circle(0.3% at 100% 0)";
        x.parentElement.parentElement.style.overflow = "hidden";
      });
    })
  );
}
addInfo(document)

//header photos
const header_photos_container = document.querySelector(".header-img-container");
const header_photos = document.querySelectorAll(".header-img-container img");
const header_arrows = document.querySelectorAll(".arrow");

let header_num = 1;
header_arrows.forEach((x, i) => {
  x.addEventListener("click", () => {
    if (i === 1) {
      header_photos.forEach((x) => {
        x.style.transition = "1s linear";
        x.style.transform = `translateX(-${header_num * 100}%)`;
      });
      header_num++;
      if (header_num == 6) {
        setTimeout(() => {
          header_photos.forEach((x) => {
            x.style.transition = "0s linear";
            x.style.transform = `translateX(0)`;
            header_num = 1;
          });
        }, 1000);
      }
    }
    if (i === 0) {
      if (header_num == 1) {
        header_num--;
        header_photos.forEach((x) => {
          x.style.transition = "0s linear";
          x.style.transform = `translateX(-${header_num * 100}%)`;
          header_num = 5;
        });
      }
      setTimeout(() => {
        header_num--;
        header_photos.forEach((x) => {
          x.style.transition = "1s linear";
          x.style.transform = `translateX(-${header_num * 100}%)`;
        });
      }, 1);
    }
  });
});

//otzivi
let review_num = 0;
let gap = window.innerWidth > 834 ? 66 : 33;
const review = document.querySelectorAll(".review");
const review_next = document.querySelectorAll(".review-next");

review_next[1].addEventListener("click", () => {
  review_num++;
  review.forEach((x) => {
    x.querySelector(".review-name").style.transform = `translateX(calc(-${
      review_num * 100
    }% - ${review_num * gap}px))`;
    setTimeout(() => {
      x.querySelector(".line-after").style.transform = `translateX(calc(-${
        review_num * 100
      }% - ${review_num * gap}px))`;
    }, 1);
    setTimeout(() => {
      x.querySelector(".review-answer").style.transform = `translateX(calc(-${
        review_num * 100
      }% - ${review_num * gap}px))`;
    }, 20);
  });

  //remove arrow
  if (
    (review_num === 8 && window.innerWidth > 600) ||
    (review_num === 9 && window.innerWidth <= 600)
  ) {
    review_next[1].classList.add("review-next-removed");
    return;
  }

  //add back button
  if (review_num === 1) {
    review_next[0].classList.remove("review-next-removed");
    return;
  }
});

review_next[0].addEventListener("click", () => {
  review_num--;
  review.forEach((x) => {
    x.querySelector(".review-name").style.transform = `translateX(calc(-${
      review_num * 100
    }% - ${review_num * gap}px))`;
    setTimeout(() => {
      x.querySelector(".line-after").style.transform = `translateX(calc(-${
        review_num * 100
      }% - ${review_num * gap}px))`;
    }, 1);
    setTimeout(() => {
      x.querySelector(".review-answer").style.transform = `translateX(calc(-${
        review_num * 100
      }% - ${review_num * gap}px))`;
    }, 20);
  });

  //remove arrow
  if (review_num === 0) {
    review_next[0].classList.add("review-next-removed");
    return;
  }

  //add next button
  if (
    (review_num === 7 && window.innerWidth > 600) ||
    (review_num === 8 && window.innerWidth <= 600)
  ) {
    review_next[1].classList.remove("review-next-removed");
    return;
  }
});

//cart
const cart = document.querySelector(".cart");
const cart_menu = document.querySelector(".cart-menu");
const cart_menu_bkg = document.querySelector(".cart-menu-bkg");
const cart_menu_close = document.querySelector(".cart-close");
const cart_span = document.querySelector(".cart-span");

cart.addEventListener("click", () => {
  cart_menu.classList.toggle("cart-menu-closed");
  cart_menu_bkg.classList.toggle("cart-menu-bkg-closed");
});
cart_menu_close.addEventListener("click", () => {
  cart.click();
});
cart_menu_bkg.addEventListener("click", () => {
  cart.click();
});
cart_span.addEventListener("click", () => {
  cart.click();
});

let cart_items = {};
//cart counter when press plus or minus
const cart_plus = document.querySelectorAll(".cart-plus");
const cart_minus = document.querySelectorAll(".cart-minus");
const cards = document.querySelectorAll(".card.card-flat");
const cart_menu_items = document.querySelector(".items");

function cartPlus(z) {
  z.forEach((x) => {
    x.addEventListener("click", () => {
      let item =
        x.parentElement.parentElement.parentElement.querySelector(
          "h3"
        ).innerHTML;
      cart_items[item] === undefined
        ? (cart_items[item] = 1)
        : (cart_items[item] = ++cart_items[item]);
      //display number
      x.parentElement.querySelector(
        "#number"
      ).innerHTML = `${cart_items[item]}`;
      if (z == cart_plus) addItemToMenu();
      vsegoCalc();
    });
  });
}
cartPlus(cart_plus);

function cartMinus(z) {
  z.forEach((x) => {
    x.addEventListener("click", () => {
      let item =
        x.parentElement.parentElement.parentElement.querySelector(
          "h3"
        ).innerHTML;
      if (cart_items[item] === undefined) return;
      else cart_items[item] -= 1;
      //display number
      x.parentElement.querySelector(
        "#number"
      ).innerHTML = `${cart_items[item]}`;
      if (cart_items[item] === 0) delete cart_items[item];
      if (z == cart_minus) addItemToMenu();
      vsegoCalc();
    });
  });
}
cartMinus(cart_minus);

//only numbers in field
const allowedKeys = [
  "Backspace",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "ArrowLeft",
  "ArrowRight",
  "ArrowUp",
  "ArrowDown",
  "Delete",
];
const cart_number = document.querySelectorAll(".number");

function cart_number_fix(z) {
  z.forEach((x) => {
    x.addEventListener("keydown", (e) => {
      if (!allowedKeys.includes(e.key)) {
        e.preventDefault();
        return false;
      }
      if (x.innerHTML == 0) x.innerHTML = "";
    });
    x.addEventListener("click", (e) => {
      if (x.innerHTML == 0) x.innerHTML = "";
    });
    x.addEventListener("focusout", (e) => {
      if (x.innerHTML == "") x.innerHTML = "0";
    });
  });

  //cart counter when type in field
  z.forEach((x) => {
    x.addEventListener("keyup", (e) => {
      let item =
        x.parentElement.parentElement.parentElement.parentElement.querySelector(
          "h3"
        ).innerHTML;
      x.innerHTML == "" ? x : (cart_items[item] = x.innerHTML);
      vsegoCalc();
    });
  });
}
cart_number_fix(cart_number);

//add items to view cart
function addItemToMenu() {
  cart_menu_items.innerHTML = "";
  cards.forEach((x) => {
    if (cart_items[x.querySelector("h3").innerHTML] != undefined)
      cart_menu_items.innerHTML += `<div class="card card-flat card-in-cart">${x.innerHTML}</div>`;
  });
  let cart_plus_menu = document.querySelectorAll(".card-in-cart .cart-plus");
  let cart_minus_menu = document.querySelectorAll(".card-in-cart .cart-minus");
  let cart_number_menu = document.querySelectorAll(".card-in-cart .number");
  cartPlus(cart_plus_menu);
  cartMinus(cart_minus_menu);
  cart_number_fix(cart_number_menu);
  addInfo(cart_menu_items)
}

//vsego amount
function vsegoCalc() {
  let vsego_info = document.querySelectorAll(".card-in-cart .card-bottom");
  let vsego_amount = 0;
  vsego_info.forEach((x) => {
    vsego_amount +=
      x.querySelector(".price").innerHTML.match(/\d/g).join("") *
      x.querySelector(".number").innerHTML;
    document.querySelector(".cart-amount-calc").innerHTML =
      vsego_amount + "грн.";
  });
}

const buy_button = document.querySelectorAll(".buy-button");
buy_button.forEach(x=>{
  x.addEventListener('click', () =>cart.click())
})