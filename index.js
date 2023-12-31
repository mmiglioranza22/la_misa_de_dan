console.log("opa");
// Open dialog goes like this
// Click option
// nav background to 000 (no blur), blur appears -> toggle

let navOption = "";

const mistica = document.getElementById("mistica");
const comercial = document.getElementById("comercial");
const legal = document.getElementById("legal");
const dialog = document.getElementById("dialog");

// toggle nav options
// target all 3 options and blur background
// if blur bg is opened and option is different than current, leave blur opened and change option.
// if blur bg is opened and option is the same than current, close all.
// if blur bg is not opened, open blur with option selected.

function toogleNavOption(ev) {
  const mistica = document.getElementById("block-mistica");
  const comercial = document.getElementById("block-comercial");
  const legal = document.getElementById("block-legal");
  const dialog = document.getElementById("dialog");

  if (navOption === ev.target.id) {
    dialog.style.display = dialog.style.display == "none" ? "flex" : "none";
    return;
  } else {
    navOption = ev.target.id;
  }
  if (dialog.style.display !== "none") {
    switch (ev.target.id) {
      case "mistica":
        comercial.style.display = "none";
        legal.style.display = "none";
        mistica.style.display = "flex";
        break;
      case "comercial":
        mistica.style.display = "none";
        legal.style.display = "none";
        comercial.style.display = "flex";
        break;
      case "legal":
        comercial.style.display = "none";
        mistica.style.display = "none";
        legal.style.display = "flex";
        break;
    }
  }

  console.log(ev.target.id, navOption);
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
