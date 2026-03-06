// document.addEventListener("DOMContentLoaded", function () {
//   let items = document.querySelectorAll(".slider .item");
//   let next = document.getElementById("next");
//   let prev = document.getElementById("prev");

//   let active = 0;

//   function loadShow() {
//     let stt = 0;

//     items[active].style.transform = "none";
//     items[active].style.zIndex = 1;
//     items[active].style.filter = "none";
//     items[active].style.opacity = 1;

//     for (let i = active + 1; i < items.length; i++) {
//       stt++;
//       items[i].style.transform =
//         `translateX(${120 * stt}px) scale(${1 - 0.2 * stt})`;
//       items[i].style.zIndex = -stt;
//       items[i].style.filter = "blur(5px)";
//       items[i].style.opacity = stt > 1 ? 0 : 0.3;
//     }

//     stt = 0;
//     for (let i = active - 1; i >= 0; i--) {
//       stt++;
//       items[i].style.transform =
//         `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt})`;
//       items[i].style.zIndex = -stt;
//       items[i].style.filter = "blur(5px)";
//       items[i].style.opacity = stt > 1 ? 0 : 0.3;
//     }
//   }

//   loadShow(); // ← Must run immediately

//   function nextSlide() {
//     active = (active + 1) % items.length;
//     loadShow();
//   }

//   let autoSlide = setInterval(nextSlide, 2000);
// });

document.addEventListener("DOMContentLoaded", function () {
  let items = document.querySelectorAll(".slider .item");
  let slider = document.querySelector(".slider"); // get slider container
  let next = document.getElementById("next");
  let prev = document.getElementById("prev");

  let active = 0;
  let autoSlide;

  function loadShow() {
    let stt = 0;

    items[active].style.transform = "none";
    items[active].style.zIndex = 1;
    items[active].style.filter = "none";
    items[active].style.opacity = 1;

    for (let i = active + 1; i < items.length; i++) {
      stt++;
      items[i].style.transform =
        `translateX(${120 * stt}px) scale(${1 - 0.2 * stt})`;
      items[i].style.zIndex = -stt;
      items[i].style.filter = "blur(5px)";
      items[i].style.opacity = stt > 1 ? 0 : 0.3;
    }

    stt = 0;
    for (let i = active - 1; i >= 0; i--) {
      stt++;
      items[i].style.transform =
        `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt})`;
      items[i].style.zIndex = -stt;
      items[i].style.filter = "blur(5px)";
      items[i].style.opacity = stt > 1 ? 0 : 0.3;
    }
  }

  function startAutoSlide() {
    autoSlide = setInterval(nextSlide, 2000);
  }

  function stopAutoSlide() {
    clearInterval(autoSlide);
  }

  function nextSlide() {
    active = (active + 1) % items.length;
    loadShow();
  }

  loadShow();
  startAutoSlide();

  // 🔥 HOVER EFFECT
  slider.addEventListener("mouseenter", stopAutoSlide);
  slider.addEventListener("mouseleave", startAutoSlide);
});
