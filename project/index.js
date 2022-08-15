var playButton = document.getElementById("play_button");
var video = document.getElementById("video");
// Event listener for the play/pause button
playButton.addEventListener("click", function() {
  if (video.paused == true) {
    // Play the video
    video.play();

    // Update the button text to 'Pause'
    playButton.innerHTML = "◼";
  } else {
    // Pause the video
    video.pause();

    // Update the button text to 'Play'
    playButton.innerHTML = "▶";
  }
});

       
const modal = document.querySelector(".popup");
const modal2 = document.querySelector(".popup2");
const body = document.querySelector("body");
const slide1 = document.querySelector(".slide-card-1");
const slide2 = document.querySelector(".slide-card-2");

const showModal = function (e) {
    modal.classList.toggle("hidden");

    if (!modal.classList.contains("hidden")) {
        body.style.overflow = "hidden";
    } else {
        body.style.overflow = "auto";
    }
};

const showModal2 = function (e) {
    modal2.classList.toggle("hidden");

    if (!modal2.classList.contains("hidden")) {
        body.style.overflow = "hidden";
    } else {
        body.style.overflow = "auto";
    }
};






