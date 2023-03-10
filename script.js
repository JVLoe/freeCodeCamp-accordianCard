const questions = document.querySelectorAll('.questionContainer');

questions.forEach((question) =>{
    const button = question.querySelector(".questionToggle");
    const answer = question.querySelector(".answer");
    button.addEventListener("click", () => {
        questions.forEach((item) => {
            if (item !== question) {
                item.classList.remove("show-text");
            }
        });
        question.classList.toggle("show-text");
    });
    answer.addEventListener("click", () => {
        questions.forEach((item) => {
            if (item !== question) {
                item.classList.remove("show-text");
            }
        });
        question.classList.toggle("show-text");
    });
});