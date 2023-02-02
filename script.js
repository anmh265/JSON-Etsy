const categoryList = document.getElementById("categories-list");

const categoriesObj = {
  sellers: "Sellers' Sales Hub",
  Jewellery: "Jewellery & Accessories",
  Clothing: "Clothing & Shoes",
  Home: "Home & Living",
  Wedding: "Wedding & Party",
  Toys: "Toys & Entertainment",
  Art: "Art & Collectibles",
  Craft: "Craft Supplies",
  Gifts: {
    gift_svg:
      "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 5 22 12' width='16' height='12' aria-hidden='true' focusable='false'><path d='M5,6A1,1,0,0,0,4,7v3H5v9a1,1,0,0,0,1,1h5V6H5Z'></path><path d='M19,6H13.007A4.245,4.245,0,0,0,14.97,3.744a1.614,1.614,0,0,0-2.65-1.375,1.757,1.757,0,0,0-.315.324,1.753,1.753,0,0,0-.315-0.324A1.615,1.615,0,0,0,9.042,3.746,4.257,4.257,0,0,0,11.006,6H13V20h5a1,1,0,0,0,1-1V10h1V7A1,1,0,0,0,19,6Z'></path></svg>",
    gift_text: "Gifts",
  },
};

const discoverContainer = [
    {
        imgURL: 'https://i.etsystatic.com/17600118/c/1000/1000/0/119/il/d077de/2325460652/il_300x300.2325460652_lhfz.jpg',
        text: 'Wedding'
    },
    {
        imgURL: 'https://i.etsystatic.com/18077312/r/il/b10e09/2350226444/il_300x300.2350226444_odar.jpg',
        text: 'Jewellery'
    },
    
]

for (let key in categoriesObj) {
  const liEl = document.createElement("li");
  if (typeof categoriesObj[key] === "object") {
    liEl.innerHTML = `
        <a href = "" class = "gift-svg">${categoriesObj[key].gift_svg}</a>
        <a href = "" class = "gift-text">${categoriesObj[key].gift_text}</a>
    `;
  } else {
    liEl.innerHTML = `
            <a href = "">${categoriesObj[key]}</a>
        `;
  }

  categoryList.appendChild(liEl);
}


