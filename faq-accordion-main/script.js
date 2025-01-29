const questions = document.querySelectorAll('.accordion-question');

questions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;

        // Toggle the active class for the corresponding answer
        answer.classList.toggle('active');

        // Change the button icon (optional)
        const buttonIcon = question.querySelector('img');
        buttonIcon.src = answer.classList.contains('active')
            ? './assets/images/icon-minus.svg'
            : './assets/images/icon-plus.svg';
    });
});
