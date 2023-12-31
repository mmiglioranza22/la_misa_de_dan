console.log("opa");
// Open dialog goes like this
// Click option
// nav background to 000 (no blur), blur appears -> toggle

let navOption = "";

const mistica = document.getElementById("mistica");
const comercial = document.getElementById("comercial");
const legal = document.getElementById("legal");
const dialog = document.getElementById("dialog");

function toogleNavOption(ev) {
  // target all 3 options and blur background
  const mistica = document.getElementById("block-mistica");
  const comercial = document.getElementById("block-comercial");
  const legal = document.getElementById("block-legal");
  const dialog = document.getElementById("dialog");

  // if blur bg is opened and option is the same than current, close all.
  if (navOption === ev.target.id) {
    dialog.style.display = dialog.style.display == "none" ? "flex" : "none";
  } else {
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
