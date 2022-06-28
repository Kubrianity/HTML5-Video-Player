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
}
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
const handleProgress = () => {
    const percent = (video.currentTime / video.duration) * 100 ;
    progressBar.style.flexBasis = `${percent}%`;
}
const scrub = (e) => {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateBtn)
video.addEventListener("pause", updateBtn)
video.addEventListener("timeupdate", handleProgress) //Change progressbar as current time is updated
toggle.addEventListener("click", togglePlay);
skipButtons.forEach(button => button.addEventListener("click", skip));
ranges.forEach(range => range.addEventListener("input", handleRange));

let mousedown = false;
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (e) => mousedown && scrub(e)); //Works only mouse is down
progress.addEventListener("mousedown", () => mousedown = true);
progress.addEventListener("mouseup", () => mousedown = false);