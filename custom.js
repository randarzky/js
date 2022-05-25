var audio = document.getElementById('audio');
var playpause = document.getElementById('playpause');
var count = 0 ;



function myFunction() {
  var x = document.getElementById("buka");
  {x.style.display = "none";}
  var x = document.getElementById("nikah");
  {x.style.display = "block";}
  var x = document.getElementById("playpause");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
  if (count == 0) {
    count = 1;
    audio.play();
    playpause.innerHTML = "<i class='bx bx-music' ></i>"
  }
}

function playPause() {
  if (count == 0) {
    count = 1;
    audio.play();
    playpause.innerHTML = "<i class='bx bx-music' ></i>"
  } else {
    count = 0;
    audio.pause();
    playpause.innerHTML = "<i class='bx bx-pause' ></i>"
  }
}
