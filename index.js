let stopButton = document.getElementById("stopButton");
let stopLight = document.getElementById("stopLight");
let slowButton = document.getElementById("slowButton");
let slowLight = document.getElementById("slowLight");
let goButton = document.getElementById("goButton");
let goLight = document.getElementById("goLight");
let controls = document.getElementById("controls");
let trafficLights = document.querySelectorAll("traffic-light");
console.log(controls);

stopButton.addEventListener("click", function () {
  stopLight.classList.toggle("stop");
  stopButton.classList.toggle("stop");
});

slowButton.addEventListener("click", function () {
  slowLight.classList.toggle("slow");
  slowButton.classList.toggle("slow");
});

goButton.addEventListener("click", function () {
  goLight.classList.toggle("go");
  goButton.classList.toggle("go");
});

stopButton.addEventListener("mouseenter", function () {
  console.log(`mouse entered ${stopButton.textContent} button`);
});
stopButton.addEventListener("mouseleave", function () {
  console.log(`mouse left ${stopButton.textContent} button`);
});

slowButton.addEventListener("mouseenter", function () {
  console.log(`mouse entered ${slowButton.textContent} button`);
});
slowButton.addEventListener("mouseleave", function () {
  console.log(`mouse left ${slowButton.textContent} button`);
});

goButton.addEventListener("mouseenter", function () {
  console.log(`mouse entered ${goButton.textContent} button`);
});
goButton.addEventListener("mouseleave", function () {
  console.log(`mouse left ${goButton.textContent} button`);
});

document.body.addEventListener("click", function (event) {
  if (event.target === stopButton) {
    if (stopLight.classList.contains("stop")) {
      console.log(`${event.target.textContent} is on`);
    } else {
      console.log(`${event.target.textContent} is off`);
    }
  } else if (event.target === slowButton) {
    if (slowLight.classList.contains("slow")) {
      console.log(`${event.target.textContent} is on`);
    } else {
      console.log(`${event.target.textContent} is off`);
    }
  } else if (event.target === goButton) {
    if (goLight.classList.contains("go")) {
      console.log(`${event.target.textContent} is on`);
    } else {
      console.log(`${event.target.textContent} is off`);
    }
  }
});

let betterBackground = body.style.backgroundColor("grey");
document.append(betterBackground);
