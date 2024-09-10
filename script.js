(function () {
    const form = document.querySelector('form');
    const submit = document.querySelector('.submit');
    const startGameBtn = document.querySelector('.start-game');
    const userInput = document.querySelector('.user-input');
    const result = document.querySelector('.result');
    const allGusses = document.querySelector('.all-gusses');

    const allGussesArray = [];
    let randomNumber = Math.round(Math.random() * 100);

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const userInputValue = parseInt(userInput.value);
        if (userInputValue < randomNumber) {
            result.textContent = 'Too low!';
        } else if (userInputValue > randomNumber) {
            result.textContent = 'Too high!';
        } else {
            result.textContent = '🥳 Congrats!!! 🏆';
            submit.disabled = true;
            submit.style = 'cursor: not-allowed;'
            startGameBtn.disabled = false;
        }

        allGussesArray.push(userInputValue);
        allGusses.textContent = 'Your Gussses: ' + allGussesArray.join(', ');
        form.reset();
    });

    startGameBtn.addEventListener('click', () => {
        result.textContent = '';
        allGusses.textContent = '';
        submit.disabled = false;
        submit.style = 'cursor: pointer;'
        startGameBtn.disabled = true;
        randomNumber = Math.round(Math.random() * 100);
    });
})()