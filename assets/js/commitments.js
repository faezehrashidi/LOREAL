const fetchcommitments = async () => {
    try {
        let data = await fetch("https://faezehrashidi.github.io/LOREAL/db.json");
        let res = await data.json();
        let commitmentsItem = res.commitments.map((elem) => {
            return `
        <div class="compro">
            <img src="${elem.src}" alt="${elem.alt}"/>
            <h3>${elem.title}</h3>
        </div>
            `;
        });
        document
            .querySelector(".commitments")
            .insertAdjacentHTML("beforeend", commitmentsItem.join(""));
    } catch (error) {
        console.log(error.message);
    }
};
export default fetchcommitments;
