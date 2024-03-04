export function controlLetterSpacing() {
    const inputBoxes = document.querySelectorAll('.input-box')

    inputBoxes.forEach((input) => {
        input.addEventListener('focus', (e) => {
            input.classList.add('spaced');
        });
    });

    inputBoxes.forEach((input) => {
        input.addEventListener('blur', (e) => {
            !input.value && input.classList.remove('spaced');
        });
    });
}