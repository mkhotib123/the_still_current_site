
document.addEventListener("DOMContentLoaded", function() {
  const fileInput = document.querySelector('input[type="file"]');
  const audioTag = document.querySelector('audio');
  if (fileInput && audioTag) {
    fileInput.addEventListener("change", function(event) {
      const file = event.target.files[0];
      if (file) {
        audioTag.src = URL.createObjectURL(file);
        audioTag.play();
      }
    });
  }

  // Ocean loop sound
  const ocean = new Audio("assets/audio/ocean_loop.mp3");
  ocean.loop = true;
  ocean.volume = 0.2;
  ocean.play();

  // Mood slider
  const moodSlider = document.getElementById("moodSlider");
  const moodLabel = document.getElementById("moodLabel");
  if (moodSlider && moodLabel) {
    moodSlider.addEventListener("input", function() {
      const moods = ["Still", "Gentle", "Centered", "Patient", "Open"];
      moodLabel.textContent = moods[moodSlider.value];
    });
  }
});
