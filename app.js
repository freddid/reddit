function draw(timePassed) {
  train.style.le = timePassed / 5 + 'px';
}

let letters = document.querySelectorAll(".letter");
let b = ['Н', 'А', 'С', 'В', 'А', 'Й'];
let count = 0;
document.querySelectorAll(".key").forEach((element) => {
  element.addEventListener("click", function (e) {
    if (b.includes(e.target.textContent)) {
      console.log(b.includes(e.target.textContent));
      e.target.classList.add("delete");
      for (let i in b) {
        if (b[i] === e.target.textContent) {
          letters[i].style.opacity = "1";
        }
      }
    } else {
      e.target.classList.add("vibration");

    }
  });

});
// letters.item(0).textContent