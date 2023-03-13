const allQuestions = document.querySelectorAll('.questionContainer');

allQuestions.forEach((individualQuestion) => {
    const button = individualQuestion.querySelector(".questionToggle");
    const answer = individualQuestion.querySelector(".answer");
    button.addEventListener("click", () => {
        allQuestions.forEach((item) => {
            if (item !== individualQuestion) {
                item.classList.remove("show-text");
            }
        });
        individualQuestion.classList.toggle("show-text");
    });
    answer.addEventListener("click", () => {
        allQuestions.forEach((item) => {
            if (item !== individualQuestion) {
                item.classList.remove("show-text");
            }
        });
        individualQuestion.classList.toggle("show-text");
    });
});
