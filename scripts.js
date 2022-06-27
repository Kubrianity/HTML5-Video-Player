// Get the elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

const togglePlay = () => {
    video.paused ? video.play() : video.pause();
};
function updateBtn() {
    const icon = this.paused ? '►' : '❚ ❚'; 
    toggle.textContent = icon;
}
function skip() {
    video.currentTime += parseFloat(this.dataset.skip); //Set current time
}
function handleRange() {
    video[this.name] = this.value; //Set volume and playback rate
}

video.addEventListener("click", togglePlay);
video.addEventListener("play", updateBtn)
video.addEventListener("pause", updateBtn)
toggle.addEventListener("click", togglePlay);
skipButtons.forEach(button => button.addEventListener("click", skip))
ranges.forEach(range => range.addEventListener("input", handleRange))