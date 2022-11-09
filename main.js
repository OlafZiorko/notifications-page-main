let activeDivs = document.querySelectorAll(".active");
let mark = document.querySelector(".mark");
let counter = document.getElementById("notification-count");

let count = 3;

let div = activeDivs.forEach((div) => {
  div.addEventListener("click", () => {
    if (div.classList.contains("active")) {
      count--;
      div.classList.remove("active");
      div.querySelector(".dot").style.display = "none";
      if (count < 0) {
        count = 0;
      }
      counter.textContent = count;
    } else {
      div.classList.add("active");
      div.querySelector(".dot").style.display = "inline-block";
      count++;
      counter.textContent = count;
    }
  });
});

mark.addEventListener("click", () => {
  count = 0;
  counter.textContent = count;
  activeDivs.forEach((div) => {
    div.classList.remove("active");
    div.querySelector(".dot").style.display = "none";
  });
});
