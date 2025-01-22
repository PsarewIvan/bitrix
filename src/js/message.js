(() => {
    const HIDDEN_CLASS = 'hidden';

    const showButton = document.querySelector('.js-message-button');
    const closeButton = document.querySelector('.js-close-message');
    const message = document.querySelector('.js-message');

    if (!showButton || !message) return;

    showButton.addEventListener('click', () => {
        message.classList.remove(HIDDEN_CLASS);
    });

    closeButton?.addEventListener('click', () => {
        message.classList.add(HIDDEN_CLASS);
    });
})();
