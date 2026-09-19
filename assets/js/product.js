const fetchproduct = async () => {
  try {
    let data = await fetch("https://faezehrashidi.github.io/LOREAL/db.json");
    let res = await data.json();
    let productItem = res.product.map((elem) => {
      return `
          <div class="swiper-slide">
            <div class="productcard">
              <div class="image">
                <img src="${elem.src}" alt="${elem.alt}" />
              </div>
              <div class="body">
                <div class="up-card">
                  <h2>${elem.title}</h2>
                </div>
                <div class="down-card">
                  <h2>${elem.price}</h2>
                  <div class="rating">
                    <p>${elem.rating}</p>
                    <span>${elem.reviewCount}</span>
                  </div>
                </div>
              </div>
             <a href="#">${elem.button}</a>
            </div>
          </div>
    `;
    });
    document
      .querySelector(".pro-swiper .swiper-wrapper")
      .insertAdjacentHTML("afterbegin", productItem.join(""));
    var swiper = new Swiper(".pro-swiper", {
      spaceBetween: 30,
      freeMode: true,
      breakpoints: {
        300: { slidesPerView: 1.5 },
        450: { slidesPerView: 1.5 },
        550: { slidesPerView: 2.5 },
        800: { slidesPerView: 2 },
        900: { slidesPerView: 2.5 },
        1120: { slidesPerView: 4.5 },
      },
    });
  } catch (error) {
    console.log(error.message);
  }

}
export default fetchproduct