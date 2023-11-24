window.addEventListener("scroll", function () {
  let nav = document.querySelector("nav");
  let scrollPosition = document.documentElement.scrollTop;
  if (scrollPosition > 350) {
    nav.style.backgroundColor = "white";
  } else {
    nav.style.backgroundColor = "";
  }
});

window.addEventListener("scroll", function () {
  let nav = document.querySelector("#GetStarted");
  let scrollPosition = document.documentElement.scrollTop;
  if (scrollPosition > 350) {
    nav.style.backgroundColor = "green";
  } else {
    nav.style.backgroundColor = "";
  }
});
