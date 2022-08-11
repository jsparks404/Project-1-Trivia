const startBtn = document.querySelector('.startBtn');

startBtn.addEventListener('mouseover', function (e) {
    e.target.style.background = 'linear-gradient(blue, black, blue)';
});

startBtn.addEventListener('mouseout', function (e) {
    e.target.style.background = 'linear-gradient(black, blue, black)';
});