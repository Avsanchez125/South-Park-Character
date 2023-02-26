const images = [
  {
    id: 1,
    name: "cartman",
    img: "./character-imgs/cartman.png",
  },
  {
    id: 2,
    name: "stan",
    img: "./character-imgs/stan.png",
  },
  {
    id: 3,
    name: "kyle",
    img: "./character-imgs/kyle.png",
  },
  {
    id: 4,
    name: "kenny",
    img: "./character-imgs/kenny.png",
  },
  {
    id: 5,
    name: "butters",
    img: "./character-imgs/butters.png",
  },
  {
    id: 6,
    name: "tweek",
    img: "./character-imgs/tweek.png",
  },
  {
    id: 7,
    name: "craig",
    img: "./character-imgs/craig.png",
  },
  {
    id: 8,
    name: "wendy",
    img: "./character-imgs/wendy.png",
  },
  {
    id: 9,
    name: "bebe",
    img: "./character-imgs/bebe.png",
  },
  {
    id: 10,
    name: "clyde",
    img: "./character-imgs/clyde.png",
  },
  {
    id: 11,
    name: "ike",
    img: "./character-imgs/ike.png",
  },
  {
    id: 12,
    name: "tolkien",
    img: "./character-imgs/tolkien.png",
  },
  {
    id: 13,
    name: "shelley",
    img: "./character-imgs/shelley.png",
  },
  {
    id: 14,
    name: "jimmy",
    img: "./character-imgs/jimmy.png",
  },
  {
    id: 15,
    name: "timmy",
    img: "./character-imgs/timmy.png",
  },
  {
    id: 16,
    name: "heidi",
    img: "./character-imgs/heidi.png",
  },
  {
    id: 17,
    name: "henrietta",
    img: "./character-imgs/henrietta.png",
  },
  {
    id: 18,
    name: "michael",
    img: "./character-imgs/michael.png",
  },
  {
    id: 19,
    name: "pete",
    img: "./character-imgs/pete.png",
  },
  {
    id: 20,
    name: "firkle",
    img: "./character-imgs/firkle.png",
  },
];

const img = document.getElementById("charImg");
const heading = document.getElementById("heading");

const charBtn = document.querySelector(".char-btn");

// setting current item
let currentItem = 0;

function showChar() {
  const item = images[currentItem];
  img.src = item.img;
  heading.textContent = `you got ${item.name}`;
  charBtn.textContent = `try again?`;
}

// random number generator
function getRandomNumber() {
  return Math.floor(Math.random() * images.length);
}

charBtn.addEventListener("click", function () {
  currentItem = getRandomNumber();
  showChar();
});
