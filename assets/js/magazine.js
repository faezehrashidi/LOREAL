const fetchmagazine = async () => {
  try {
    let data = await fetch("https://faezehrashidi.github.io/LOREAL/db.json");
    let res = await data.json();
    let magazineItem = res.magazine.map((elem) => {
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
    console.log(error.message);
  }
};

export default fetchmagazine;
