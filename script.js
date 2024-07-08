var tikiDrinkIds = [
  "us",
  "reception",
  "ceremony",
  "bbq",
  "cake&magic",
  "gallery",
  "registry",
  "honeymoon",
];
var modalIds = [
  "myModal1",
  "myModal2",
  "myModal3",
  "myModal4",
  "myModal5",
  "myModal6",
  "myModal7",
  "myModal8",
];
var i = 0;
var audio1 = document.getElementById("aurthur");
var audio2 = document.getElementById("starship");
var audio3 = document.getElementById("zombies");
var audio4 = document.getElementById("type");
var audio5 = document.getElementById("wilder");
var audio6 = document.getElementById("watermelon");
var audio7 = document.getElementById("david");
var audio8 = document.getElementById("mike");
var registry_modal_showing = false;

// loop thru all menu elements and add eventListenrs with modal arguments
for (let i = 0; i < modalIds.length; i++) {
  document
    .getElementById(tikiDrinkIds[i])
    .addEventListener("click", function () {
      showModal(modalIds[i]);
    });
}

// choose which modal to show based on current click
function showModal(modalId) {
  document.body.style.overflow = "hidden";
  if (modalId == "myModal1") {
    document.getElementById("myModal1").style.display = "flex";
    //console.log("modal1");
    playAudio(audio1);
  } else if (modalId == "myModal2") {
    document.getElementById("myModal2").style.display = "flex";
    //console.log("modal2");
    playAudio(audio2);
  } else if (modalId == "myModal3") {
    document.getElementById("myModal3").style.display = "flex";
    //console.log("modal3");
    playAudio(audio3);
  } else if (modalId == "myModal4") {
    document.getElementById("myModal4").style.display = "flex";
    //console.log("modal4");
    playAudio(audio4);
  } else if (modalId == "myModal5") {
    document.getElementById("myModal5").style.display = "flex";
    //console.log("modal5");
    playAudio(audio5);
    console.log("audio playing...");
  } else if (modalId == "myModal6") {
    document.getElementById("myModal6").style.display = "flex";
    //console.log("modal6");
    playAudio(audio6);
  } else if (modalId == "myModal7") {
    document.getElementById("myModal7").style.display = "flex";
    registry_modal_showing = true;
    //document.getElementById("registry-iframe").src = "https://www.youtube.com/embed/q5xNseu0ffo?si=Z0zm6y_GDmHQSFGs&amp;start=13";
    //console.log("modal7");
    playAudio(audio7);
  } else if (modalId == "myModal8") {
    document.getElementById("myModal8").style.display = "flex";
    //console.log("modal8");
    playAudio(audio8);
  } else {
    console.error("Modal not found.");
  }
}

// parameterized function was causing problems with multiple modals
function hideModal1() {
  document.getElementById("myModal1").style.display = "none";
  document.body.style.overflow = "auto";
  stopAllAudio();
}
function hideModal2() {
  document.getElementById("myModal2").style.display = "none";
  document.body.style.overflow = "auto";
  stopAllAudio();
}
function hideModal3() {
  document.getElementById("myModal3").style.display = "none";
  document.body.style.overflow = "auto";
  stopAllAudio();
}
function hideModal4() {
  document.getElementById("myModal4").style.display = "none";
  document.body.style.overflow = "auto";
  stopAllAudio();
}
function hideModal5() {
  document.getElementById("myModal5").style.display = "none";
  document.body.style.overflow = "auto";
  stopAllAudio();
}
function hideModal6() {
  document.getElementById("myModal6").style.display = "none";
  document.body.style.overflow = "auto";
  stopAllAudio();
}
function hideModal7() {
  document.getElementById("myModal7").style.display = "none";
  document.body.style.overflow = "auto";
  registry_modal_showing = false;
  player.pauseVideo();
  stopAllAudio();
}
function hideModal8() {
  document.getElementById("myModal8").style.display = "none";
  document.body.style.overflow = "auto";
  stopAllAudio();
}

// pause audio in current position
function stopAllAudio() {
  audio1.pause();
  audio2.pause();
  audio3.pause();
  audio4.pause();
  audio5.pause();
  audio6.pause();
  audio7.pause();
  audio8.pause();
}

// play any audio file
function playAudio(audioFile) {
  audioFile.volume = 0.05;
  resetAudio(audioFile);
  audioFile.play();
}
// check if song is over and restart it
function resetAudio(audioFile) {
  if (audioFile.currentTime > 59) {
    audioFile.currentTime = 0;
  }
}

// https://developers.google.com/youtube/iframe_api_reference#Playback_controls
// This code loads the IFrame Player API code asynchronously.
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// This function creates an <iframe> (and YouTube player) after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "auto",
    width: "100%",
    videoId: "KBf8gzjxlro",
    events: {
      onStateChange: onPlayerStateChange,
    },
    playerVars: {
      start: 13,
    },
  });
}

var done = false;
function onPlayerStateChange(event) {
  if (
    event.data == YT.PlayerState.PLAYING &&
    !done &&
    registry_modal_showing == true
  ) {
    stopAllAudio();
  } else if (registry_modal_showing == false) {
    stopAllAudio();
  } else {
    playAudio(audio7);
  }
}
