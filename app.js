let letters = document.querySelectorAll(".letter");

document.querySelectorAll(".key").forEach((element) => {
  element.addEventListener("click", function (e) {
    // *Написать проверку...
    //проверка
    letters.forEach((item) => {
      if (item.textContent === e.target.textContent) {
        e.target.classList.add("delete");
        item.style.opacity = "1";
      }
    });
  });
});
