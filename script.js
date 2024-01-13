const buttonmodal = document.querySelectorAll(".show-modal");
const modal = document.querySelector(".modal");
const closemodal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");
for (let i = 0; i < buttonmodal.length; i++)
  buttonmodal[i].addEventListener("click", function () {
    console.log("clicked");
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
closemodal.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});
overlay.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});
