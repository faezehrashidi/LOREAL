const fetchsimilaritem = async () => {
  try {
    let data = await fetch("https://github.com/faezehrashidi/db.json/similaritem");
    let res = await data.json();
    let similarItem = res.map((elem) => {
      return `
          <div class="swiper-slide">
            <div class="similarcard">
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
      .querySelector(".similaritem-swiper .swiper-wrapper")
      .insertAdjacentHTML("afterbegin", similarItem.join(""));
    var swiper = new Swiper(".similaritem-swiper", {
      spaceBetween: 20,
      freeMode: true,
      breakpoints: {
        300: { slidesPerView: 1.5 },
        450: { slidesPerView: 1.5 },
        550: { slidesPerView: 2.5 },
        800: { slidesPerView: 2.5 },
        900: { slidesPerView: 2.5 },
        1120: { slidesPerView: 4.5 },
      },
    });
  } catch (err) {
    console.log(err.message);
  }

}
export default fetchsimilaritem