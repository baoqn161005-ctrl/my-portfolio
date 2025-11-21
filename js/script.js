document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio của Nguyễn Quốc Bảo đã load xong!');
    const welcomeMessageElement = document.getElementById('welcome-message');
    if (welcomeMessageElement) {
        welcomeMessageElement.textContent = 'Chào mừng bạn đến với portfolio thật trên Internet của mình!';
        setTimeout(() => {
            welcomeMessageElement.style.opacity = 1;
        }, 500);
    }
});