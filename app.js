// let items = document.querySelectorAll(".slider .item");
// let next = document.getElementById("next");
// let prev = document.getElementById("prev");

// let active = 3;
// function loadShow() {
//   let stt = 0;
//   for (var i = active + 1; i < items.length; i++) {
//     stt++;
//     items[i].style.transform = items[i].style.transform =
//       `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
//     items[i].style.zIndex = -stt;
//     items[i].style.filter = `blur(5px)`;
//     items[i].style.opacity = stt > 2 ? 0 : 0.6;
//   }
//   stt = 0;
//   for (var i = active - 1; i >= 0; i--) {
//     stt++;
//     items[i].style.transform = items[i].style.transform =
//       `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
//     items[i].style.zIndex = -stt;
//     items[i].style.filter = `blur(5px)`;
//     items[i].style.opacity = stt > 2 ? 0 : 0.6;
//   }
// }
// loadShow();

let items = document.querySelectorAll(".slider .item");
let next = document.getElementById("next");
let prev = document.getElementById("prev");

let active = 3; // Starting index

function loadShow() {
  let stt = 0;

  // 1. Style the active item (The one in the middle)
  items[active].style.transform = `none`;
  items[active].style.zIndex = 1;
  items[active].style.filter = "none";
  items[active].style.opacity = 1;

  // 2. Style items to the right of the active item
  for (var i = active + 1; i < items.length; i++) {
    stt++;
    items[i].style.transform =
      `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
    items[i].style.zIndex = -stt;
    items[i].style.filter = `blur(5px)`;
    items[i].style.opacity = stt > 2 ? 0 : 0.6;
  }

  // 3. Style items to the left of the active item
  stt = 0;
  for (var i = active - 1; i >= 0; i--) {
    stt++;
    items[i].style.transform =
      `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
    items[i].style.zIndex = -stt;
    items[i].style.filter = `blur(5px)`;
    items[i].style.opacity = stt > 2 ? 0 : 0.6;
  }
}

// Initial call to set positions
loadShow();

// --- THE MISSING PART: BUTTON LOGIC ---

next.onclick = function () {
  // Only increment if we aren't at the last item
  if (active + 1 < items.length) {
    active = active + 1;
    loadShow();
  }
};

prev.onclick = function () {
  // Only decrement if we aren't at the first item
  if (active - 1 >= 0) {
    active = active - 1;
    loadShow();
  }
};
