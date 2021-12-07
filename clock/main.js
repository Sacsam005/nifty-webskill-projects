// clock

let a;
let date;
let time;

setInterval(() => {
  a = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const date = a.toLocaleDateString(undefined, options);
  const time =
    a.getHours("hi-IN") +
    ":" +
    a.getMinutes("hi-IN") +
    ":" +
    a.getSeconds("hi-IN");

  document.getElementById("time").innerHTML = time + " <br>On " + date;
}, 1000);

setInterval(() => {
  a = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const str = a.toGMTString("en-US", { timeZone: "America/New_York" });
  const time =
    a.getHours("hi-IN") +
    ":" +
    a.getMinutes("hi-IN") +
    ":" +
    a.getSeconds("hi-IN");

  document.querySelector(".card-body").innerHTML = " <br>On " + str;
}, 1000);
