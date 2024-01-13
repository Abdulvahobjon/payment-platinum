let form = document.querySelector("#form");
let btns = document.querySelectorAll("#button");
let overlay = document.querySelector("#overlay");
let close = document.querySelector("#close");

overlay.addEventListener("click", function () {
  form.classList.remove("flex");
  form.classList.add("hidden");
  document.body.classList.remove("overflow-hidden");
  document.body.classList.remove("h-screen");
});

btns.forEach(function (item, index) {
  item.addEventListener("click", function () {
    form.style.opacity = "1"
    form.classList.add("flex");
    form.classList.remove("hidden");
    document.body.classList.add("overflow-hidden");
    document.body.classList.add("h-screen");
  });
});

close.addEventListener('click' , function(){

  form.classList.remove("flex");
  form.classList.add("hidden");
  document.body.classList.remove("overflow-hidden");
  document.body.classList.remove("h-screen");
})
