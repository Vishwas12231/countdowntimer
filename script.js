// let days = document.getElementById('days');
// let hours = document.getElementById('hours');
// let minutes = document.getElementById('minutes');
// let seconds = document.getElementById('seconds');

// let endDate = new Date('01/01/2024 00:00:00').getTime();

// let x = setInterval(function () {
//  let now = new Date().getTime();
//  let distance = endDate - now;

//  // time calculations of days, hours, minutes, and seconds
//  let d = Math.floor(distance / (1000 * 60 * 60 * 24));
//  let h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//  let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//  let s = Math.floor((distance % (1000 * 60)) / 1000);

//  // output the result in elements with id
//  days.innerHTML = d + "<br><span>Days</span>";
//  hours.innerHTML = h + "<br><span>Hours</span>";
//  minutes.innerHTML = m + "<br><span>Minutes</span>";
//  seconds.innerHTML = s + "<br><span>Seconds</span>";

// //animated stroke
// dd.style.strokeDashoffset = 440 - (440 * d) / 365;
// hh.style.strokeDashoffset = 440 - (440 * h) / 24;
// mm.style.strokeDashoffset = 440 - (440 * m) / 60;
// ss.style.strokeDashoffset = 440 - (440 * s) / 60;


//  // if the countdown is over, display a message
//  if (distance < 0) {
//   clearInterval(x);
//   days.innerHTML = hours.innerHTML = minutes.innerHTML = seconds.innerHTML = "EXPIRED";
//  }
// }, 1000);

//new javascript file for second code
// const countdownDate = new Date("2024-02-14T00:00:00").getTime();
// const countdownElement = document.getElementById("countdown");

// const updateCountdown = () => {
//  const now = new Date().getTime();
//  const distance = countdownDate - now;

//  if (distance < 0) {
//   clearInterval(countdownInterval);
//   countdownElement.innerHTML = "EXPIRED";
//  } else {
//   const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   const seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   document.getElementById("days-unit").innerHTML = formatTime(days) + "<br><span>Days</span>";
//   document.getElementById("hours-unit").innerHTML = formatTime(hours) + "<br><span>Hours</span>";
//   document.getElementById("minutes-unit").innerHTML = formatTime(minutes) + "<br><span>Minutes</span>";
//   document.getElementById("seconds-unit").innerHTML = formatTime(seconds) + "<br><span>Seconds</span>";
//  }
// };

// const formatTime = (time) => {
//  return time < 10 ? `0${time}` : time;
// };

// // Initial call to set the initial countdown
// updateCountdown();

// // Update the countdown every second
// const countdownInterval = setInterval(updateCountdown, 1000);




const countdownDate = new Date("2024-02-14T00:00:00").getTime();
const countdownElement = document.getElementById("countdown");

const updateCountdown = () => {
 const now = new Date().getTime();
 const distance = countdownDate - now;

 if (distance < 0) {
  clearInterval(countdownInterval);
  countdownElement.innerHTML = "EXPIRED";
 } else {
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days-unit").innerHTML = formatTime(days) + "<br><span>Days</span>";
  document.getElementById("hours-unit").innerHTML = formatTime(hours) + "<br><span>Hours</span>";
  document.getElementById("minutes-unit").innerHTML = formatTime(minutes) + "<br><span>Minutes</span>";
  document.getElementById("seconds-unit").innerHTML = formatTime(seconds) + "<br><span>Seconds</span>";

  // Animated stroke
  document.getElementById("dd").style.strokeDashoffset = 440 - (440 * days) / 365;
  document.getElementById("hh").style.strokeDashoffset = 440 - (440 * hours) / 24;
  document.getElementById("mm").style.strokeDashoffset = 440 - (440 * minutes) / 60;
  document.getElementById("ss").style.strokeDashoffset = 440 - (440 * seconds) / 60;
 }
};

const formatTime = (time) => {
 return time < 10 ? `0${time}` : time;
};

// Initial call to set the initial countdown
updateCountdown();

// Update the countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);







//new javaascript files code
// const countdownDate = new Date("2024-02-14T00:00:00").getTime();
// const countdownElement = document.getElementById("countdown");

// const updateCountdown = () => {
//  const now = new Date().getTime();
//  const distance = countdownDate - now;

//  if (distance < 0) {
//   clearInterval(countdownInterval);
//   countdownElement.innerHTML = "EXPIRED";
//  } else {
//   const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   const seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   document.getElementById("days-unit").innerHTML = formatTime(days) + "<br><span>Days</span>";
//   document.getElementById("hours-unit").innerHTML = formatTime(hours) + "<br><span>Hours</span>";
//   document.getElementById("minutes-unit").innerHTML = formatTime(minutes) + "<br><span>Minutes</span>";
//   document.getElementById("seconds-unit").innerHTML = formatTime(seconds) + "<br><span>Seconds</span>";
//  }
// };

// const formatTime = (time) => {
//  return time < 10 ? `0${time}` : time;
// };

// // Initial call to set the initial countdown
// updateCountdown();

// // Update the countdown every second
// const countdownInterval = setInterval(updateCountdown, 1000);
