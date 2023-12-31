// https://github.com/tameemsafi/typewriterjs?tab=readme-ov-file
const noLaVen = [
  "los que la ven",
  "los que la observan",
  "los que la perciben",
  "los que la divisan",
  "los que la miran",
  "los que la contemplan",
  "los que la avistan",
  "los que la atisban",
  "los que la descubren",
  "los que en ella posan <br /> sus ojos",
];

const greetings = document.getElementById("greetings");

const typewriter = new Typewriter(greetings, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(1500)
  .typeString(noLaVen[0])
  .pauseFor(2500)
  .deleteChars(noLaVen[0].length)
  .typeString(noLaVen[1])
  .pauseFor(2500)
  .deleteChars(noLaVen[1].length)
  .typeString(noLaVen[2])
  .pauseFor(2500)
  .deleteChars(noLaVen[2].length)
  .typeString(noLaVen[3])
  .pauseFor(2500)
  .deleteChars(noLaVen[3].length)
  .typeString(noLaVen[4])
  .pauseFor(2500)
  .deleteChars(noLaVen[4].length)
  .typeString(noLaVen[5])
  .pauseFor(2500)
  .deleteChars(noLaVen[5].length)
  .typeString(noLaVen[6])
  .pauseFor(2500)
  .deleteChars(noLaVen[6].length)
  .typeString(noLaVen[7])
  .pauseFor(2500)
  .deleteChars(noLaVen[7].length)
  .typeString(noLaVen[8])
  .pauseFor(2500)
  .deleteChars(noLaVen[8].length)
  .typeString(noLaVen[9])
  .pauseFor(2500)
  .deleteChars(noLaVen[9].length)
  .start();

let navOption = "";

const mistica = document.getElementById("mistica");
const comercial = document.getElementById("comercial");
const legal = document.getElementById("legal");
const dialog = document.getElementById("dialog");
const nav = document.getElementById("nav");

function toogleNavOption(ev) {
  // target all 3 options and blur background
  const mistica = document.getElementById("block-mistica");
  const comercial = document.getElementById("block-comercial");
  const legal = document.getElementById("block-legal");
  const dialog = document.getElementById("dialog");
  const nav = document.getElementById("nav");

  // if blur bg is opened and option is the same than current, close all.
  if (navOption === ev.target.id) {
    dialog.style.display = dialog.style.display == "none" ? "flex" : "none";
  } else {
    nav.style.background = "#000";
    nav.style.opacity = "1";
    dialog.style.display = "flex";

    // if blur bg is opened and option is different than current, leave blur opened and change option.
    // if blur bg is not opened, open blur with option selected.
    switch (ev.target.id) {
      case "mistica":
        mistica.style.display = "flex";
        comercial.style.display = "none";
        legal.style.display = "none";
        break;
      case "comercial":
        comercial.style.display = "flex";
        mistica.style.display = "none";
        legal.style.display = "none";
        break;
      case "legal":
        legal.style.display = "flex";
        comercial.style.display = "none";
        mistica.style.display = "none";
        break;
    }
    navOption = ev.target.id;
  }
}

function clickAway() {
  dialog.style.display = "none";
  navOption = "";
}

// defer script so this check works
mistica.addEventListener("click", toogleNavOption);
comercial.addEventListener("click", toogleNavOption);
legal.addEventListener("click", toogleNavOption);
dialog.addEventListener("click", clickAway);
