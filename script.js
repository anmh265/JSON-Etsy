const categoryList = document.getElementById("categories-list");
const popularGift = ".popular-gift-card-container";

const categorySVG = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 5 22 12' width='16' height='12' aria-hidden='true' focusable='false'><path d='M5,6A1,1,0,0,0,4,7v3H5v9a1,1,0,0,0,1,1h5V6H5Z'></path><path d='M19,6H13.007A4.245,4.245,0,0,0,14.97,3.744a1.614,1.614,0,0,0-2.65-1.375,1.757,1.757,0,0,0-.315.324,1.753,1.753,0,0,0-.315-0.324A1.615,1.615,0,0,0,9.042,3.746,4.257,4.257,0,0,0,11.006,6H13V20h5a1,1,0,0,0,1-1V10h1V7A1,1,0,0,0,19,6Z'></path></svg>`;

const discoverCategoryContainer = document.querySelector(
  ".discover-categories"
);
const dealsContainer = document.querySelector(".dress-category");
const footerDropDownBtns = document.querySelectorAll(
  ".footer-shop-category .shop-btn"
);
const popularGiftImgContainer = ".popular-gifts-img";

const playSvg =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><polygon points="4 4 4 20 20 12 4 4"></polygon></svg>';
const wishlistSVG =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="true"><path d="M12,21C10.349,21,2,14.688,2,9,2,5.579,4.364,3,7.5,3A6.912,6.912,0,0,1,12,5.051,6.953,6.953,0,0,1,16.5,3C19.636,3,22,5.579,22,9,22,14.688,13.651,21,12,21ZM7.5,5C5.472,5,4,6.683,4,9c0,4.108,6.432,9.325,8,10,1.564-.657,8-5.832,8-10,0-2.317-1.472-4-3.5-4-1.979,0-3.7,2.105-3.721,2.127L11.991,8.1,11.216,7.12C11.186,7.083,9.5,5,7.5,5Z"></path></svg>';
const afterClickSVG =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M16.5,3A6.953,6.953,0,0,0,12,5.051,6.912,6.912,0,0,0,7.5,3C4.364,3,2,5.579,2,9c0,5.688,8.349,12,10,12S22,14.688,22,9C22,5.579,19.636,3,16.5,3Z"></path></svg>';

const categoriesObj = [
  { label: "Sellers' Sales Hub" },
  { label: "Jewellery & Accessories" },
  { label: "Clothing & Shoes" },
  { label: "Home & Living" },
  { label: "Wedding & Party" },
  { label: "Toys & Entertainment" },
  { label: "Art & Collectibles" },
  { label: "Craft Supplies" },
  {
    label: {
      gift_svg: categorySVG,
      gift_text: "Gifts",
    },
  },
];

function createCategoryList(cList, elemType) {
  for (let key in cList) {
    const liEl = document.createElement(elemType);
    if (typeof cList[key].label === "object") {
      liEl.innerHTML = `
      <a href = "" class = "gift-svg">${cList[key].label.gift_svg}</a>
      <a href = "" class = "gift-text">${cList[key].label.gift_text}</a>
      `;
    } else {
      liEl.innerHTML = `
      <a href = "">${categoriesObj[key].label}</a>
      `;
    }

    categoryList.appendChild(liEl);
  }
}
createCategoryList(categoriesObj, "li");

const discoverList = [
  {
    imgURL:
      "https://i.etsystatic.com/17600118/c/1000/1000/0/119/il/d077de/2325460652/il_300x300.2325460652_lhfz.jpg",
    listText: "Wedding",
  },
  {
    imgURL:
      "https://i.etsystatic.com/18077312/r/il/b10e09/2350226444/il_300x300.2350226444_odar.jpg",
    listText: "Jewellery",
  },
  {
    imgURL:
      "https://i.etsystatic.com/32501528/c/1518/1518/253/562/il/4bdfa0/3702738409/il_300x300.3702738409_qfmi.jpg",
    listText: "Clothing",
  },
  {
    imgURL:
      "https://i.etsystatic.com/16676438/c/2002/2002/449/0/il/89ea5d/1467855817/il_300x300.1467855817_ksv4.jpg",
    listText: "Home & Living",
  },
  {
    imgURL:
      "https://i.etsystatic.com/30725321/r/il/a22d35/4016941798/il_300x300.4016941798_bruv.jpg",
    listText: "Wall Art",
  },
  {
    imgURL:
      "https://i.etsystatic.com/19220794/r/il/28ced3/2951466885/il_300x300.2951466885_1ly4.jpg",
    listText: "Kitchen & Dining",
  },
];

for (let list of discoverList) {
  const discoverCard = document.createElement("div");
  discoverCard.classList.add("discover-categories-card");

  const imgContainer = document.createElement("div");
  imgContainer.classList.add("card-img");

  const cardImg = document.createElement("img");
  cardImg.src = `${list.imgURL}`;
  imgContainer.appendChild(cardImg);
  discoverCard.appendChild(imgContainer);

  const cardText = document.createElement("div");
  cardText.classList.add("card-text");
  cardText.innerHTML = list.listText;
  discoverCard.appendChild(cardText);

  discoverCategoryContainer.appendChild(discoverCard);
}

const dealsData = [
  {
    imgURL:
      "https://i.etsystatic.com/22368382/r/il/006d21/4245808662/il_300x300.4245808662_a3x4.jpg",
    discountText: "Up to 40% off on",
    dressType: "Women's Ethnic Clothing",
  },
  {
    imgURL:
      "https://i.etsystatic.com/32501528/c/1488/1488/0/0/il/23a5b4/3700725057/il_300x300.3700725057_szgj.jpg",
    discountText: "Up to 40% off on",
    dressType: "Women's Western Clothing",
  },
  {
    imgURL:
      "https://i.etsystatic.com/25566015/c/2003/2003/0/274/il/5b71e2/3196479462/il_300x300.3196479462_20xh.jpg",
    discountText: "Up to 40% off on",
    dressType: "Men's Clothing",
  },
  {
    imgURL:
      "https://i.etsystatic.com/38026977/r/il/f2c1ad/4277525816/il_300x300.4277525816_f4wp.jpg",
    discountText: "Up to 40% off on",
    dressType: "Fashion Jewellery",
  },
  {
    imgURL:
      "https://i.etsystatic.com/32501528/c/1757/1757/247/180/il/67dc01/4248212322/il_300x300.4248212322_psvv.jpg",
    discountText: "Up to 40% off on",
    dressType: "Winter Clothing",
  },
  {
    imgURL:
      "https://i.etsystatic.com/23528878/r/il/625e23/2589827894/il_300x300.2589827894_bi5a.jpg",
    discountText: "Up to 40% off on",
    dressType: "Wedding Clothing",
  },
];

function createDealsCards(data) {
  for (let item of data) {
    const dealsCard = document.createElement("div");
    dealsCard.classList.add("dress-card");

    const dealsImgContainer = document.createElement("div");
    dealsImgContainer.classList.add("dress-card-img");
    const dealsImg = document.createElement("img");
    dealsImg.src = item.imgURL;
    dealsImgContainer.appendChild(dealsImg);
    dealsCard.appendChild(dealsImgContainer);

    const dealsTextContainer = document.createElement("div");
    dealsTextContainer.classList.add("dress-card-text");

    const dealsCardText = document.createElement("div");
    dealsCardText.classList.add("dress-card-text-off");
    dealsCardText.innerHTML = item.discountText;
    dealsTextContainer.appendChild(dealsCardText);

    const dealsCardDressType = document.createElement("div");
    dealsCardDressType.classList.add("dress-card-type");
    dealsCardDressType.innerHTML = item.dressType;
    dealsTextContainer.appendChild(dealsCardDressType);

    dealsCard.appendChild(dealsTextContainer);
    dealsContainer.appendChild(dealsCard);
  }
}
createDealsCards(dealsData);

const popularGiftData = [
  {
    mediaURL:
      "https://i.etsystatic.com/35966576/c/1614/1283/669/351/il/e1510f/4033777789/il_340x270.4033777789_dqlw.jpg",
    // videoURL: "",
    urlFormat: "picture",
    textHeading:
      "Birth Flower Jewelry Travel Case, Birth Month Flower Gift, Personalized Birthday Gift, Leather Jewelry Travel Case, Custom Jewelry Case",
    customerRating: 9480,
    currencySymbol: "₹",
    actualPrice: 1710,
    discount: 50,
    freeDelivery: "",
    rating: 4.5,
  },
  {
    mediaURL:
      "https://i.etsystatic.com/32477306/c/2000/1589/0/256/il/0bcd64/3491080620/il_340x270.3491080620_oh18.jpg",
    // videoURL: "",
    urlFormat: "picture",
    textHeading:
      "Dainty Name Necklace with Birth Flower, Personalized Name Necklace, Custom Gold Name Jewelry, Birthday Gift for Her, Bridesmaid Gift",
    customerRating: 13553,
    currencySymbol: "₹",
    actualPrice: 3607,
    discount: 50,
    rating: 4,
  },
  {
    mediaURL:
      "https://i.etsystatic.com/25168585/c/2500/1987/0/181/il/214e7e/4589233930/il_340x270.4589233930_dg79.jpg",
    urlFormat: "video",
    videoURL:
      "https://v-cg.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/PAINT_PORTRAIT_ETSY_VIDEO_vo9waf.mp4",
    textHeading:
      "Custom Pet Portraits Using Pet Photo Personalized Digital Dog Portraits Cat Portraits Custom Dog Portraits Custom Pet Art Pet Drawing",
    customerRating: 11075,
    currencySymbol: "₹",
    actualPrice: 1274,
    discount: 40,
    rating: 2.5,
  },
  {
    mediaURL:
      "https://i.etsystatic.com/28045281/r/il/3f41fa/3897994052/il_340x270.3897994052_l8xd.jpg",
    urlFormat: "video",
    videoURL:
      "https://v-cg.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/Purple1_aal8ie.mp4",
    textHeading:
      "Sun catcher/ Crystal suncatcher/ Crystal Rainbow maker/ Aurora gemstone suncatcher/ crystal prism/ wall hanging/ Home decor/ Gift 4 women",
    customerRating: 6823,
    currencySymbol: "₹",
    actualPrice: 2652,
    discount: 10,
    rating: 5,
  },
  {
    mediaURL:
      "https://i.etsystatic.com/27890741/c/2343/1862/320/560/il/31a0dd/4028709894/il_340x270.4028709894_i6tr.jpg",
    videoURL:
      "https://v-cg.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/Purple1_aal8ie.mp4",
    urlFormat: "video",
    textHeading:
      "Heart Keychain Set - Made with Authentic LEGO® Bricks, Matching keychains, Gift Set for Couples, Best Friends - Very High Quality & DURABLE",
    customerRating: 12338,
    currencySymbol: "₹",
    actualPrice: 1452,
    discount: 50,
    rating: 4.5,
  },
  {
    mediaURL:
      "https://i.etsystatic.com/26694795/c/2445/1943/282/0/il/035b01/3254592822/il_340x270.3254592822_5dss.jpg",
    videoURL:
      "https://v-cg.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/HFF_Hearts_Video_m6nj4t.mp4",
    urlFormat: "video",
    textHeading:
      "Handmade Damascus Pocket Knife Rose Wood Handle Birthday Gift Folding Knife Groomsmen Gift Anniversary Wedding Personalized Gift for Men",
    customerRating: 6218,
    currencySymbol: "₹",
    actualPrice: 8216,
    discount: 70,
  },
];

function createGiftCards(giftContainer, data) {
  const mainContainer = document.querySelector(giftContainer);

  data.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("popular-gift-card");

    const tooltipCard = document.createElement("div");
    tooltipCard.classList.add("tool-tip");
    tooltipCard.innerHTML = item.textHeading;
    card.appendChild(tooltipCard);

    card.addEventListener("mouseover", (e) => {
      x = e.pageX - card.offsetLeft;
      y = e.pageY - card.offsetTop + 20;
      tooltipCard.style.top = `${y}px`;
      tooltipCard.style.left = `${x}px`;
    });

    const giftsImgContainer = document.createElement("div");
    giftsImgContainer.classList.add("popular-gifts-img");

    const imgTag = document.createElement("img");
    const videoTag = document.createElement("video");
    if (item.urlFormat === "picture") {
      imgTag.src = item.mediaURL;
      giftsImgContainer.appendChild(imgTag);
    } else {
      videoTag.src = item.videoURL;
      videoTag.poster = item.mediaURL;
      // videoTag.muted = "muted";
      giftsImgContainer.appendChild(videoTag);
    }
    const wishlistBtn = document.createElement("div");
    wishlistBtn.classList.add("wishlist-btn");
    wishlistBtn.innerHTML = wishlistSVG;
    giftsImgContainer.appendChild(wishlistBtn);
    card.appendChild(giftsImgContainer);

    const playBtn = document.createElement("div");
    playBtn.classList.add("play-btn");
    item.urlFormat === "video" ? playBtn.classList.add("active") : "";
    playBtn.innerHTML = playSvg;
    giftsImgContainer.appendChild(playBtn);

    card.appendChild(giftsImgContainer);

    const giftTextContainer = document.createElement("div");
    giftTextContainer.classList.add("popular-gifts-text");

    const heading = document.createElement("p");
    heading.classList.add("popular-gifts-text-heading");
    heading.innerHTML = item.textHeading;
    giftTextContainer.appendChild(heading);

    const ratingContainer = document.createElement("div");
    ratingContainer.classList.add("rating");
    const star = printStar(item.rating);
    ratingContainer.innerHTML = `${star.outerHTML}`;

    const customerRating = document.createElement("span");
    customerRating.classList.add("customer-rating");
    customerRating.innerHTML = item.customerRating.toLocaleString();
    ratingContainer.appendChild(customerRating);

    giftTextContainer.appendChild(ratingContainer);

    const priceContainer = document.createElement("div");
    priceContainer.classList.add("popular-gifts-price");
    const currSymbol = document.createElement("span");
    currSymbol.classList.add("currency-symbol");
    currSymbol.innerHTML = item.currencySymbol;
    priceContainer.appendChild(currSymbol);

    const priceafterDiscount = document.createElement("span");
    priceafterDiscount.classList.add("actual-price");
    priceafterDiscount.innerHTML = calculatePrice(
      item.actualPrice,
      item.discount
    ).toLocaleString();
    priceContainer.appendChild(priceafterDiscount);

    giftTextContainer.appendChild(priceContainer);

    const discountSection = document.createElement("div");
    discountSection.classList.add("popular-gifts-discount-section");
    const strikeoutSpan = document.createElement("span");
    strikeoutSpan.classList.add("popular-gift-strikeout");
    strikeoutSpan.innerHTML = `${item.currencySymbol} ${item.actualPrice}`;
    discountSection.appendChild(strikeoutSpan);

    const discountPerc = document.createElement("span");
    discountPerc.classList.add("discount");
    discountPerc.innerHTML = `${item.discount}% off`;
    discountSection.appendChild(discountPerc);

    giftTextContainer.appendChild(discountSection);

    const deliverySection = document.createElement("div");
    deliverySection.classList.add("free-delivery");
    deliverySection.innerHTML = "FREE delivery";

    if (calculatePrice(item.actualPrice, item.discount) > 1000) {
      deliverySection.classList.add("active");
    }

    giftTextContainer.appendChild(deliverySection);

    card.appendChild(giftTextContainer);

    mainContainer.appendChild(card);
  });
}
createGiftCards(popularGift, popularGiftData);

function playVideoOnHover(imgContainer) {
  const container = document.querySelectorAll(imgContainer);
  container.forEach((item) => {
    if (item.children[0].tagName === "VIDEO") {
      item.addEventListener("mouseover", () => {
        item.children[0].play();
        item.children[2].classList.remove("active");
      });

      item.addEventListener("mouseleave", () => {
        item.children[0].pause();
        item.children[0].load();
        item.children[2].classList.add("active");
      });
    }
  });
}
playVideoOnHover(popularGiftImgContainer);

function clickWishlist() {
  const items = document.querySelectorAll(".wishlist-btn");
  items.forEach((item) => {
    item.addEventListener("click", () => {
      if (item.classList.contains("add-wishlist")) {
        item.classList.remove("add-wishlist");
        item.innerHTML = wishlistSVG;
      } else {
        item.classList.add("add-wishlist");
        item.innerHTML = afterClickSVG;
      }
    });
  });
}
clickWishlist();

// function createRatingStar() {
//   const starContainer = document.createElement("div");
//   starContainer.classList.add("star-rating");
//   for (let i = 0; i < 5; i++) {
//     const star = document.createElement("span");
//     star.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false"><path d="M19.985,10.36a0.5,0.5,0,0,0-.477-0.352H14.157L12.488,4.366a0.5,0.5,0,0,0-.962,0l-1.67,5.642H4.5a0.5,0.5,0,0,0-.279.911L8.53,13.991l-1.5,5.328a0.5,0.5,0,0,0,.741.6l4.231-2.935,4.215,2.935a0.5,0.5,0,0,0,.743-0.6l-1.484-5.328,4.306-3.074A0.5,0.5,0,0,0,19.985,10.36Z"></path></svg>
//     `;

//     starContainer.appendChild(star);
//   }
//   return starContainer;
// }

const halfStar = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false"><path class="foreground" d="M12 4c-.224 0-.42.15-.48.366l-1.67 5.642H4.5c-.218.002-.41.145-.472.354-.064.208.014.433.193.557l4.307 3.07-1.5 5.33c-.08.202-.02.433.15.57.17.14.41.15.59.03L12 16.98V4z"></path></svg>`;
const fullStar = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false"><path d="M19.985,10.36a0.5,0.5,0,0,0-.477-0.352H14.157L12.488,4.366a0.5,0.5,0,0,0-.962,0l-1.67,5.642H4.5a0.5,0.5,0,0,0-.279.911L8.53,13.991l-1.5,5.328a0.5,0.5,0,0,0,.741.6l4.231-2.935,4.215,2.935a0.5,0.5,0,0,0,.743-0.6l-1.484-5.328,4.306-3.074A0.5,0.5,0,0,0,19.985,10.36Z"></path></svg>`;

function printStar(n) {
  const starContainer = document.createElement("div");
  starContainer.classList.add("star-rating");

  if (n > 5) {
    n = 5;
  }

  for (let i = 1; i <= Math.floor(n); i++) {
    const star = document.createElement("span");
    star.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false"><path d="M19.985,10.36a0.5,0.5,0,0,0-.477-0.352H14.157L12.488,4.366a0.5,0.5,0,0,0-.962,0l-1.67,5.642H4.5a0.5,0.5,0,0,0-.279.911L8.53,13.991l-1.5,5.328a0.5,0.5,0,0,0,.741.6l4.231-2.935,4.215,2.935a0.5,0.5,0,0,0,.743-0.6l-1.484-5.328,4.306-3.074A0.5,0.5,0,0,0,19.985,10.36Z"></path></svg>`;
    // console.log(i)
    starContainer.appendChild(star);
  }

  if (n - Math.floor(n) !== 0) {
    const star = document.createElement("span");
    star.innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false"><path class="foreground" d="M12 4c-.224 0-.42.15-.48.366l-1.67 5.642H4.5c-.218.002-.41.145-.472.354-.064.208.014.433.193.557l4.307 3.07-1.5 5.33c-.08.202-.02.433.15.57.17.14.41.15.59.03L12 16.98V4z"></path></svg>`;

    starContainer.appendChild(star);
  }

  return starContainer;
}
// console.log(printStar(5))

function calculatePrice(price, disc) {
  return Math.round(price * (1 - disc / 100));
}

footerDropDownBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    btn.parentNode.classList.toggle("show");
  });
});

// console.log(footerDropDownBtns)

// card.innerHTML = `
// <div class="popular-gifts-img">
// <img src="${item.mediaURL}" alt="">
// <div class="play-btn ${item.urlFormat === "video" ? "active" : ""}">
//   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><polygon points="4 4 4 20 20 12 4 4"></polygon></svg>
// </div>
// </div>
// <div class="popular-gifts-text">
// <p class="popular-gifts-text-heading">
//   ${item.textHeading}
// </p>
// <div class="rating">
//   <div class="star-rating">
//     <span>
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false"><path d="M19.985,10.36a0.5,0.5,0,0,0-.477-0.352H14.157L12.488,4.366a0.5,0.5,0,0,0-.962,0l-1.67,5.642H4.5a0.5,0.5,0,0,0-.279.911L8.53,13.991l-1.5,5.328a0.5,0.5,0,0,0,.741.6l4.231-2.935,4.215,2.935a0.5,0.5,0,0,0,.743-0.6l-1.484-5.328,4.306-3.074A0.5,0.5,0,0,0,19.985,10.36Z"></path></svg>
//     </span>
//     <span>
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false"><path d="M19.985,10.36a0.5,0.5,0,0,0-.477-0.352H14.157L12.488,4.366a0.5,0.5,0,0,0-.962,0l-1.67,5.642H4.5a0.5,0.5,0,0,0-.279.911L8.53,13.991l-1.5,5.328a0.5,0.5,0,0,0,.741.6l4.231-2.935,4.215,2.935a0.5,0.5,0,0,0,.743-0.6l-1.484-5.328,4.306-3.074A0.5,0.5,0,0,0,19.985,10.36Z"></path></svg>
//     </span>
//     <span>
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false"><path d="M19.985,10.36a0.5,0.5,0,0,0-.477-0.352H14.157L12.488,4.366a0.5,0.5,0,0,0-.962,0l-1.67,5.642H4.5a0.5,0.5,0,0,0-.279.911L8.53,13.991l-1.5,5.328a0.5,0.5,0,0,0,.741.6l4.231-2.935,4.215,2.935a0.5,0.5,0,0,0,.743-0.6l-1.484-5.328,4.306-3.074A0.5,0.5,0,0,0,19.985,10.36Z"></path></svg>
//     </span>
//     <span>
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false"><path d="M19.985,10.36a0.5,0.5,0,0,0-.477-0.352H14.157L12.488,4.366a0.5,0.5,0,0,0-.962,0l-1.67,5.642H4.5a0.5,0.5,0,0,0-.279.911L8.53,13.991l-1.5,5.328a0.5,0.5,0,0,0,.741.6l4.231-2.935,4.215,2.935a0.5,0.5,0,0,0,.743-0.6l-1.484-5.328,4.306-3.074A0.5,0.5,0,0,0,19.985,10.36Z"></path></svg>
//     </span>
//     <span>
//     <svg xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false"><path d="M19.985,10.36a0.5,0.5,0,0,0-.477-0.352H14.157L12.488,4.366a0.5,0.5,0,0,0-.962,0l-1.67,5.642H4.5a0.5,0.5,0,0,0-.279.911L8.53,13.991l-1.5,5.328a0.5,0.5,0,0,0,.741.6l4.231-2.935,4.215,2.935a0.5,0.5,0,0,0,.743-0.6l-1.484-5.328,4.306-3.074A0.5,0.5,0,0,0,19.985,10.36Z"></path></svg>
//     </span>
//   </div>
//   <span class="customer-rating">
//       (${item.customerRating.toLocaleString()})
//   </span>
// </div>
// <div class="popular-gifts-price">
//   <span class="currency-symbol">${item.currencySymbol}</span>
//   <span class="actual-price">${calculatePrice(
//     item.actualPrice,
//     item.discount
//   ).toLocaleString()}</span>
// </div>
// <div class="popular-gifts-discount-section">
//   <span class="popular-gift-strikeout">
//       ${item.currencySymbol} ${item.actualPrice}
//   </span>
//   <span class="discount">
//       (${item.discount}% off)
//   </span>
// </div>
// <div class="free-delivery ${
//   calculatePrice(item.actualPrice, item.discount) > 1000 ? "active" : ""
// }">
//     FREE delivery
// </div>
// </div>
// `;
