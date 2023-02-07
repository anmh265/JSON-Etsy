const categoryList = document.getElementById("categories-list");

const categorySVG = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 5 22 12' width='16' height='12' aria-hidden='true' focusable='false'><path d='M5,6A1,1,0,0,0,4,7v3H5v9a1,1,0,0,0,1,1h5V6H5Z'></path><path d='M19,6H13.007A4.245,4.245,0,0,0,14.97,3.744a1.614,1.614,0,0,0-2.65-1.375,1.757,1.757,0,0,0-.315.324,1.753,1.753,0,0,0-.315-0.324A1.615,1.615,0,0,0,9.042,3.746,4.257,4.257,0,0,0,11.006,6H13V20h5a1,1,0,0,0,1-1V10h1V7A1,1,0,0,0,19,6Z'></path></svg>`;

const discoverCategoryContainer = document.querySelector(
  ".discover-categories"
);
const dealsContainer = document.querySelector(".dress-category");

const categoriesObj = [
  { label: "Sellers' Sales Hub" },
  { label: "Jewellery & Accessories" },
  { label: "Clothing & Shoes" },
  { label: "Home & Living" },
  { label: "Wedding & Party" },
  { label: "Toys & Entertainment" },
  { label: "Art & Collectibles" },
  { label: "Craft Supplies" },
  { label: {
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
  const cardImg = document.createElement('img')
  cardImg.src = `${list.imgURL}`

  discoverCard.innerHTML = `
  <div class="card-img">
    <img src=${list.imgURL}
      alt="">
  </div>
  <div class="card-text">
    ${list.listText}
  </div>
  `;
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

for (let item of dealsData) {
  const dealsCard = document.createElement("div");
  dealsCard.classList.add("dress-card");
  dealsCard.innerHTML = `
  <div class="dress-card-img">
    <img src=${item.imgURL} alt="">
  </div>
  <div class="dress-card-text">
    <div class="dress-card-text-off">
        ${item.discountText}
    </div>
    <div class="dress-card-type">
        ${item.dressType}
    </div>
  </div>
  `;

  dealsContainer.appendChild(dealsCard);
}
