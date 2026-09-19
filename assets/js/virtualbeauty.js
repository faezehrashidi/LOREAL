const fetchvirtualbeauty = async () => {
    try {
        let data = await fetch("https://github.com/faezehrashidi/db.json/virtualbeauty");
        let res = await data.json();
        let virtualbeautyItem = res.map((elem) => {
            return `
            <div class="swiper-slide">
                <div class="virtualbeautycard">
                <div class="image">
                <img src="${elem.images[0].src}" alt="${elem.images[0].alt}" />
                 </div>
                <div class="logo">
                <img src="${elem.images[1].src}" alt="${elem.images[1].alt}" />
                </div>
              <div class="body">
                <div class="up-card">
                  <p>${elem.text}</p>
                </div>
                <div class="down-card">
                  <h2>${elem.title}</h2>
                </div>
              </div>
             <a href="#">${elem.detail}</a>
            </div>
          </div>
            `;
        });
        document.querySelector(".virtualbeauty-swiper .swiper-wrapper")
            .insertAdjacentHTML("afterbegin", virtualbeautyItem.join(""))
        var swiper = new Swiper(".virtualbeauty-swiper", {
            spaceBetween: 15,
            freeMode: true,
            breakpoints: {
                300: { slidesPerView: 2 },
                450: { slidesPerView: 2.1 },
                550: { slidesPerView: 2.5 },
                800: { slidesPerView: 2 },
                900: { slidesPerView: 2 },
                1120: { slidesPerView: 4.5 },
            },
        });
    } catch (error) {
        console.log(err.message);
    }
};

export default fetchvirtualbeauty;
