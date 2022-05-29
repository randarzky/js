var audio = document.getElementById("audio");
var playpause = document.getElementById("playpause");
var count = 0;

function myFunction() {
  var x = document.getElementById("sawer");
  {
    x.style.display = "block";
  }
  var x = document.getElementById("buka");
  {
    x.style.display = "none";
  }
  var x = document.getElementById("nikah");
  {
    x.style.display = "block";
  }
  var x = document.getElementById("playpause");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
  if (count == 0) {
    count = 1;
    audio.play();
    playpause.innerHTML = "<i class='bx bx-music' ></i>";
  }
}

//--//

  //countdown//
  const countdown = () => {
    const countDate = new Date ("June 5, 2022 00:00:00").getTime()
    const now = new Date().getTime();
    const gap = countDate - now;

  //time work
  const detik = 1000;
  const menit = detik * 60;
  const jam = menit * 60;
  const hari = jam * 24;

  //calculate
  const textDay = Math.floor(gap / hari);
  const textHour = Math.floor((gap % hari) / jam);
  const textMinute = Math.floor((gap % jam) / menit);
  const textSecond = Math.floor((gap % menit) / detik);

  document.querySelector(".hari").innerText = textDay;
  document.querySelector(".jam").innerText = textHour;
  document.querySelector(".menit").innerText = textMinute;
  document.querySelector(".detik").innerText = textSecond;
  };

  setInterval(countdown, 1000)

//--//

function playPause() {
  if (count == 0) {
    count = 1;
    audio.play();
    playpause.innerHTML = "<i class='bx bx-music' ></i>";
  } else {
    count = 0;
    audio.pause();
    playpause.innerHTML = "<i class='bx bx-pause' ></i>";
  }
}
