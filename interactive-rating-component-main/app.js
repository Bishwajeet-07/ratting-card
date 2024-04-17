const rating = document.querySelectorAll(".rating");
const ratting_value = document.querySelector(".ratting-data")
const btn = document.querySelector(".btn");
const card1 = document.querySelector(".card-container")
const card2 = document.querySelector(".card-container2")

let ratting_data;
rating.forEach((data) => {
    data.addEventListener("click", (e) => {
        e.preventDefault();

        rating.forEach((class_data)=>{
            class_data.classList.remove("selected")
            // console.log(class_data.classList);
        })
        // this.classList.add("selected")

        // console.log(e.target.classList);
        e.target.classList.add("selected")
        ratting_data = e.target.innerText;
    })
})

btn.addEventListener("click", () => {
    if (ratting_data) {
        card1.style.display = "none"
        card2.style.display = "flex"
        ratting_value.innerText = ratting_data;
    }
})