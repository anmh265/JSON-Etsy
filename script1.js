(function () {
    const categoryListIdName = "categories-list";
    const categoryGiftSVG = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 5 22 12' width='16' height='12' aria-hidden='true' focusable='false'><path d='M5,6A1,1,0,0,0,4,7v3H5v9a1,1,0,0,0,1,1h5V6H5Z'></path><path d='M19,6H13.007A4.245,4.245,0,0,0,14.97,3.744a1.614,1.614,0,0,0-2.65-1.375,1.757,1.757,0,0,0-.315.324,1.753,1.753,0,0,0-.315-0.324A1.615,1.615,0,0,0,9.042,3.746,4.257,4.257,0,0,0,11.006,6H13V20h5a1,1,0,0,0,1-1V10h1V7A1,1,0,0,0,19,6Z'></path></svg>`;
  
    const popularGiftCardClassName = ".popular-gift-card-container";
  
    const discoverCategoryContainerClassName = ".discover-categories";
  
    const dealsContainerClassName = ".dress-category";
  
    const footerDropDownBtns = document.querySelectorAll(
      ".footer-shop-category .shop-btn"
    );
  
    const popularGiftImgContainerClassName = ".popular-gifts-img";
  
    const playSvg =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><polygon points="4 4 4 20 20 12 4 4"></polygon></svg>';
  
    const wishlistSVG =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="true"><path d="M12,21C10.349,21,2,14.688,2,9,2,5.579,4.364,3,7.5,3A6.912,6.912,0,0,1,12,5.051,6.953,6.953,0,0,1,16.5,3C19.636,3,22,5.579,22,9,22,14.688,13.651,21,12,21ZM7.5,5C5.472,5,4,6.683,4,9c0,4.108,6.432,9.325,8,10,1.564-.657,8-5.832,8-10,0-2.317-1.472-4-3.5-4-1.979,0-3.7,2.105-3.721,2.127L11.991,8.1,11.216,7.12C11.186,7.083,9.5,5,7.5,5Z"></path></svg>';
  
    const afterClickSVG =
      '<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" width="24" height="24"><path d="M16.5,3A6.953,6.953,0,0,0,12,5.051,6.912,6.912,0,0,0,7.5,3C4.364,3,2,5.579,2,9c0,5.688,8.349,12,10,12S22,14.688,22,9C22,5.579,19.636,3,16.5,3Z" fill="#A61A2E"></path></svg>';
  
    const halfStar = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false"><path class="foreground" d="M12 4c-.224 0-.42.15-.48.366l-1.67 5.642H4.5c-.218.002-.41.145-.472.354-.064.208.014.433.193.557l4.307 3.07-1.5 5.33c-.08.202-.02.433.15.57.17.14.41.15.59.03L12 16.98V4z"></path></svg>`;
  
    const fullStar = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false"><path d="M19.985,10.36a0.5,0.5,0,0,0-.477-0.352H14.157L12.488,4.366a0.5,0.5,0,0,0-.962,0l-1.67,5.642H4.5a0.5,0.5,0,0,0-.279.911L8.53,13.991l-1.5,5.328a0.5,0.5,0,0,0,.741.6l4.231-2.935,4.215,2.935a0.5,0.5,0,0,0,.743-0.6l-1.484-5.328,4.306-3.074A0.5,0.5,0,0,0,19.985,10.36Z"></path></svg>`;
  
    const URL =
      "https://raw.githubusercontent.com/anmh265/JSON-Etsy/main/Data.json";
  
    async function jsonDataToObj(dataURL) {
      const res = await fetch(dataURL);
      const data = await res.json();
  
      callFunctions(data);
    }
  
    function callFunctions(data) {
      createCategoryList(data.categoriesData, categoryListIdName, "li");
      createDealsCards(data.dealsData, dealsContainerClassName);
      createDiscoverListSection(data.discoverListData);
      createGiftCards(popularGiftCardClassName, data.popularGiftData);
  
      popularGiftFilter(data.popularGiftData);
    }
  
    jsonDataToObj(URL);
  
    function createCategoryList(cList, listItemIdName, elemType) {
      container = document.getElementById(listItemIdName);
  
      for (let key of cList) {
        const category = `
          <li>
          ${createATag(key)}
          </li>
        `;
  
        container.innerHTML += category;
      }
    }
  
    function createATag(key) {
      if (typeof key.label === "object") {
        return `
          <a href = "" class = "gift-svg">${key.label.gift_svg}</a>
          <a href = "" class = "gift-text">${key.label.gift_text}</a>`;
      } else {
        return `
        <a href = "">${key.label}</a>
        `;
      }
    }
  
    function createDiscoverListSection(items) {
      const container = document.querySelector(
        discoverCategoryContainerClassName
      );
  
      for (let list of items) {
        const category = `
          <div class = 'discover-categories-card'>
            <div class = 'card-img'>
              <img src = "${list.imgURL}" alt = "">
            </div>
            <div class = 'card-text'>
              ${list.listText}
            </div>  
          </div>
        `;
        container.innerHTML += category;
      }
    }
  
    function createDealsCards(data, containerClassName) {
      const dealsContainer = document.querySelector(containerClassName);
  
      const dealsCardArray = data.map((item) => {
        return `
        <div class = 'dress-card'>
          <div class = 'dress-card-img'>
            <img src = '${item.imgURL}' alt = ''>
          </div>
          <div class = 'dress-card-text'>
            <div class = 'dress-card-text-off'>
              ${item.discountText}
            </div>
            <div class = 'dress-card-type'>
              ${item.dressType}
            </div>
          </div>
        </div>
      `;
      });
      dealsContainer.innerHTML = dealsCardArray.join("");
    }
  
    function createGiftCards(giftContainer, data) {
      let mainContainer = document.querySelector(giftContainer);
  
      removeChildren(mainContainer);
  
      data.forEach((item) => {
        const container = `
          <div class = 'popular-gift-card' on>
            <div class = 'tool-tip'>
              ${item.textHeading}
            </div>
            <div class = 'popular-gifts-img'>
              ${
                item.urlFormat === "picture"
                  ? `<img src = '${item.mediaURL}'>`
                  : `<video src = '${item.videoURL}' poster = '${item.mediaURL}' muted = "muted"></video>`
              }
              <div class = 'wishlist-btn'>
                ${wishlistSVG}
              </div>
              <div class = 'play-btn ${
                item.urlFormat === "video" ? "active" : ""
              }'>
                ${playSvg}
              </div>
            </div>
            <div class = 'popular-gifts-text'>
              <p class = 'popular-gifts-text-heading'>
                ${item.textHeading}
              </p>
              <div class = 'rating'>
                  ${printStar(item.rating).outerHTML}
                  <span class = 'customer-rating'>(${item.customerRating.toLocaleString()})
              </div>
              <div class = 'popular-gifts-price'>
                <span class = 'currency-symbol'>
                  ${item.currencySymbol}
                </span>
                <span class = 'actual-price'>
                  ${calculatePrice(
                    item.actualPrice,
                    item.discount
                  ).toLocaleString()}
                </span>
              </div>
              <div class = 'popular-gifts-discount-section'>
                <span class = 'popular-gift-strikeout'>
                  ${item.currencySymbol} ${item.actualPrice}
                </span>
                <span class = 'discount'>
                  ${item.discount}% off
                </span>
                <div class = 'free-delivery ${
                  calculatePrice(item.actualPrice, item.discount) > 1000
                    ? "active"
                    : ""
                }'>
                FREE delivery
                </div>
                </div>
              </div>
            </div>
          </div>
        `;
        mainContainer.innerHTML += container;
      });
      playVideoOnHover(popularGiftImgContainerClassName);
      clickWishlist();
      tooltipDisplay();
    }
  
    function popularGiftFilter(data) {
      const formFilter = document.getElementById("filter-form");
      const popolarSectionPriceFilter = document.getElementById(
        "popular-gift-filter"
      );
      const filterBtn = document.querySelector(".submit-btn");
  
      formFilter.addEventListener("submit", (e) => {
        e.preventDefault();
        let filterValue = +popolarSectionPriceFilter.value;
        const filterData = data.filter(
          (item) => calculatePrice(item.actualPrice, item.discount) > filterValue
        );
        createGiftCards(popularGiftCardClassName, filterData);
      });
    }
  
    function removeChildren(mainContainer) {
      let child = mainContainer.lastElementChild;
      while (child) {
        mainContainer.removeChild(child);
        child = mainContainer.lastElementChild;
      }
    }
  
    function playVideoOnHover(imgClassName) {
      const container = document.querySelectorAll(imgClassName);
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
  
    function tooltipDisplay() {
      const cards = document.querySelectorAll(".popular-gift-card");
      cards.forEach((card) => {
        card.addEventListener("mouseover", (e) => {
          x = e.pageX - card.offsetLeft;
          y = e.pageY - card.offsetTop + 20;
          card.firstElementChild.style.top = `${y}px`;
          card.firstElementChild.style.left = `${x}px`;
        });
      });
    }
  
    function printStar(n) {
      const starContainer = document.createElement("div");
      starContainer.classList.add("star-rating");
  
      if (n > 5) {
        n = 5;
      }
  
      for (let i = 1; i <= Math.floor(n); i++) {
        const star = document.createElement("span");
        star.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false"><path d="M19.985,10.36a0.5,0.5,0,0,0-.477-0.352H14.157L12.488,4.366a0.5,0.5,0,0,0-.962,0l-1.67,5.642H4.5a0.5,0.5,0,0,0-.279.911L8.53,13.991l-1.5,5.328a0.5,0.5,0,0,0,.741.6l4.231-2.935,4.215,2.935a0.5,0.5,0,0,0,.743-0.6l-1.484-5.328,4.306-3.074A0.5,0.5,0,0,0,19.985,10.36Z"></path></svg>`;
  
        starContainer.appendChild(star);
      }
  
      if (n - Math.floor(n) !== 0) {
        const star = document.createElement("span");
        star.innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false"><path class="foreground" d="M12 4c-.224 0-.42.15-.48.366l-1.67 5.642H4.5c-.218.002-.41.145-.472.354-.064.208.014.433.193.557l4.307 3.07-1.5 5.33c-.08.202-.02.433.15.57.17.14.41.15.59.03L12 16.98V4z"></path></svg>`;
  
        starContainer.appendChild(star);
      }
      return starContainer;
    }
  
    function calculatePrice(price, disc) {
      return Math.round(price * (1 - disc / 100));
    }
  
    footerDropDownBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        btn.parentNode.classList.toggle("show");
      });
    });
  })();