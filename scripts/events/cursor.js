const cursorOutline = document.querySelector('.cursor-outline');

export function followCursor() {

    document.addEventListener('mousemove', (e) => {
        const mousePosX = e.clientX;
        const mousePosY = e.clientY;

        cursorOutline.style.left = `${mousePosX}px`;
        cursorOutline.style.top = `${mousePosY}px`;
    });
}

export function expandCursorOutline() {
    document.addEventListener('click', (e) => {
        cursorOutline.classList.add('expand');

        setTimeout(() => {
            cursorOutline.classList.remove('expand');
        }, 450)
    });
}