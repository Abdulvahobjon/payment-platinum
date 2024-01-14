let form = document.querySelector("#form");
let btns = document.querySelectorAll("#button");
let overlay = document.querySelector("#overlay");
let close = document.querySelector("#close");
let request = document.querySelector("#request");
let formInfo = document.querySelector("#openForm");

overlay.addEventListener("click", function () {
  form.classList.remove("flex");
  form.classList.add("hidden");
  document.body.classList.remove("overflow-hidden");
  document.body.classList.remove("h-screen");
});

btns.forEach(function (item, index) {
  item.addEventListener("click", function () {
    form.style.opacity = "1";
    form.classList.add("flex");
    form.classList.remove("hidden");
    document.body.classList.add("overflow-hidden");
    document.body.classList.add("h-screen");
    request.classList.remove("flex");
    request.classList.add("hidden");
    formInfo.classList.remove("hidden");
    formInfo.classList.add("black");
  });
});

close.addEventListener("click", function () {
  form.classList.remove("flex");
  form.classList.add("hidden");
  document.body.classList.remove("overflow-hidden");
  document.body.classList.remove("h-screen");
});

document.querySelector("form").addEventListener("submit", function (e) {
  // Formadagi malumotlarni olish
  e.preventDefault();
  let email = document.querySelectorAll("input")[0].value;
  let firstName = document.querySelectorAll("input")[1].value;
  let lastName = document.querySelectorAll("input")[2].value;
  let phoneNumber = document.querySelectorAll("input")[3].value;
  // Malumotlarni JSON formatida tayyorlash
  let data = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    phoneNumber: phoneNumber,
  };
  request.classList.add("flex");
  request.classList.remove("hidden");
  formInfo.classList.add("hidden");
  formInfo.classList.remove("flex");
  request.innerHTML = ` <h2 class="text-3xl text-[#333] font-bold text-center">Loading...</h2>`
  // Fetch API orqali POST so'rov yuborish
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      request.innerHTML = `  <button id="closeTwo" class="absolute right-6 md:right-12 top-6 md:top-9 flex">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M22 22L2 2M22 2L2 22" stroke="#023047" stroke-width="3" stroke-linecap="round"
          stroke-linejoin="round" />
      </svg>
    </button>  <img src="./img/check.svg" width="60" alt="check svg">
      <h2 class="md:text-3xl text-2xl text-[#333] font-bold text-center">Thank you!!! We will get back to you soon.</h2>`
      console.log("Yuborilgan malumotlar:", data);
      document.querySelector("form").reset();
      document.querySelector('#closeTwo').addEventListener("click", function () {
        form.classList.remove("flex");
        form.classList.add("hidden");
        document.body.classList.remove("overflow-hidden");
        document.body.classList.remove("h-screen");
      });
      
    })
    .catch((error) => {
      request.innerHTML = ` <h2 class="text-3xl text-[#333] font-bold text-center">ERROR :(</h2>`
      console.error("Xatolik:", error);
    });
});
