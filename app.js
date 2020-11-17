let words = ["НАСВАЙ", "ВЕЛОСИПЕД", "ГОНДЖУБАС"];
let letters = document.querySelectorAll(".letter");
let wordHTML = document.querySelectorAll(".letter-cont");
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
let word;
window.onload = () => {
  word = words[getRandomInt(0, words.length)];
  for (let i = 0; i < word.length; i++) {
    wordHTML[i].classList.remove("none");
    letters[i].textContent = word[i]
  }
};
document.querySelectorAll(".key").forEach((element) => {
  element.addEventListener("click", function (e) {
    letters.forEach((item) => {
      if (item.textContent === e.target.textContent) {
        e.target.classList.add("delete");
        item.style.opacity = "1";
      }
    });
  });
});
