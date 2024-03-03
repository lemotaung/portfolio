export function controlLetterSpacing() {
    const inputBoxes = document.querySelectorAll('.input-box')
    
    document.addEventListener('click', (e) => {
        inputBoxes.forEach((input) => {
            input.value ? input.classList.add('spaced') : input.classList.remove('spaced')
        })
    });
}