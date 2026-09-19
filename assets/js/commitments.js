const fetchcommitments = async () => {
    try {
        let data = await fetch("https://github.com/faezehrashidi/db.json/commitments");
        let res = await data.json();
        let commitmentsItem = res.map((elem) => {
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
        console.log(err.message);
    }
};
export default fetchcommitments;
