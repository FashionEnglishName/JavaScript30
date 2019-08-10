const player = document.querySelector(".player");
const video = document.querySelector(".viewer");
const progress = document.querySelector(".progress");
const progressBar = document.querySelector(".progress__filled");
const toggle = document.querySelector(".toggle");
const skipButtons = document.querySelectorAll("[data-skip]");
const ranges = document.querySelectorAll(".player__slider");
const full = document.querySelector(".player__fullScreen");

function togglePlay() {
    // if(video.paused) video.play();
    // else video.pause();
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}

function updateButton() {
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
}

function skip() {
    // console.log(this.dataset.skip);
    const newTime = video.currentTime + parseFloat(this.dataset.skip);
    video.currentTime = newTime;
}

function handleRangeUpdate() {
    video[this.name] = this.value;
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
    console.log(e);
}

function handlerFullScreen() {
    video.requestFullscreen();
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => {
    button.addEventListener("click", skip);
});
ranges.forEach(range => {
    range.addEventListener('change', handleRangeUpdate);
    range.addEventListener('mousemove', handleRangeUpdate);
});

let mouseDown = false;
progress.addEventListener('click', scrub);
progress.addEventListener("mousemove", e => mouseDown && scrub(e));
progress.addEventListener("mousedown", () => mouseDown = true);
progress.addEventListener("mouseup", () => mouseDown = false);

full.addEventListener("click", handlerFullScreen);