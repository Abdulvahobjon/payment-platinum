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

document.querySelector('form').addEventListener('submit', function() {
  // Formadagi malumotlarni olish
  var email = document.querySelectorAll('input')[0].value;
  var firstName = document.querySelectorAll('input')[1].value;
  var lastName = document.querySelectorAll('input')[2].value;
  var phoneNumber = document.querySelectorAll('input')[3].value;

  // Malumotlarni JSON formatida tayyorlash
  var data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber
  };

  // Fetch API orqali POST so'rov yuborish
  fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(data => {
      console.log('Yuborilgan malumotlar:', data);
      // Boshqa harakatlar ham qilishingiz mumkin, masalan, xabar chiqarish
      alert('Malumotlar muvaffaqiyatli yuborildi!');
      document.querySelector('form').reset()
  })
  .catch(error => {
      console.error('Xatolik:', error);
      // Boshqa harakatlar ham qilishingiz mumkin, masalan, xabar chiqarish
      alert('Malumotlarni yuborishda xatolik yuz berdi.');
  });
});