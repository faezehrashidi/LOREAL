const fetchmagazine = async () => {
  try {
    let data = await fetch("https://github.com/faezehrashidi/db.json/magazine");
    let res = await data.json();
    let magazineItem = res.map((elem) => {
      return `
        <div class="magazinecard">
         <div class="row">
          <div class="col">
            <img src="${elem.src}" alt="${elem.alt}" />
          </div>
          <div class="card-body">
            <h1>${elem.title}</h1>
            <div class="card-text">
              <p>${elem.detail}</p>
              <span>${elem.date}</span>
            </div>
          </div>
        </div>
      </div>
            `;
    });
    document
      .querySelector(".magazine")
      .insertAdjacentHTML("beforeend", magazineItem.join(""));
  } catch (error) {
    console.log(err.message);
  }
};

export default fetchmagazine;
