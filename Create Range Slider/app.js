const process = document.querySelector('.process');
const range = document.querySelector('.range');
const value = document.querySelector('.range span');

function updateProcess(percent) {
    process.style.width = `${percent}%`;
    value.innerText = `${percent}%`;
    document.body.style.background = `rgba(0,0,0,${percent}%)`;
    document.querySelector('h1').style.color = `rgba(36, 58, 115,${percent + 50}%)`;
}
range.addEventListener('mousemove', function(e) {
    let processWith = e.pageX - this.offsetLeft;
    let percent = Math.round(processWith / this.offsetWidth * 100);
    updateProcess(percent);
})

updateProcess(50);