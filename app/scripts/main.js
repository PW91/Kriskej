document.addEventListener('DOMContentLoaded', init);


function init() {
    var scroll = new SmoothScroll('a[href*="#"]');

    const caseEls = document.querySelectorAll('.case');
    const closeBtnEl = document.querySelector('.scene__close-button');
    window.menuEl = document.querySelector('.menu');

    caseEls.forEach(el => {
        el.addEventListener('click', handleCaseClick.bind(null, el));
    })

    closeBtnEl.addEventListener('click', handleCloseClick);
}

function handleCaseClick(el) {
    const sceneEl = document.querySelector('.scene');
    const iframeEl = sceneEl.querySelector('iframe');
    sceneEl.classList.add('visible');

    setTimeout(() => {
        iframeEl.setAttribute('src', el.dataset.source);
    }, 300);

}

function handleCloseClick() {
    const sceneEl = document.querySelector('.scene');
    sceneEl.classList.remove('visible');
    const iframeEl = sceneEl.querySelector('iframe');

    setTimeout(() => {
        iframeEl.setAttribute('src', '');
    }, 300);
}