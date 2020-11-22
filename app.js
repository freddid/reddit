let words = ["ГОНДЖУБАС", "СИГАРА", "ШПАК"];
let letters = document.querySelectorAll(".letter");
let wordHTML = document.querySelectorAll(".letter-cont");
let wordHTML2 = document.querySelector('.word');
let keyboard = document.querySelector('.gallows__keyboard');
let key_buttons = document.querySelectorAll(".key");
let b;
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

let word;

function GetWord() {
  word = words[getRandomInt(0, words.length)];
  for (let i = 0; i < word.length; i++) {
    wordHTML[i].classList.remove("none");
    letters[i].textContent = word[i]
  }
  b = word.split("");

}


key_buttons.forEach((element) => {
  element.addEventListener("click", function (e) {
    if (countMistakes == 5) {
      
    }
    else {
      if (b.includes(e.target.textContent)) {
        e.target.classList.add("delete");
        for (let i in b) {
          if (b[i] === e.target.textContent) {
            letters[i].style.opacity = "1";
          }
        }
      } else {
        e.target.classList.add("vibration");
        countMistakes++;
      }
    }
  });
});
GetWord();
let countMistakes = 0;


let start = document.querySelector('.start');
let reset = document.querySelector('.reset');



start.addEventListener("click", () => {
  start.classList.remove('start');
  start.textContent = 'RESET';
  wordHTML2.style.opacity = 1;
  keyboard.style.opacity = 1;
})

reset.addEventListener('click', () => {
  GetWord();
  wordHTML2.style.opacity = 1;

  letters.forEach((element) => {
    // element.classList.add('none');
    element.style.opacity = 0;
  })
  key_buttons.forEach((element) => {
    element.classList.remove('delete');
    element.classList.remove('vibration');
  })


})
