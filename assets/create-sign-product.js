// theme copy
"use strict";
const ballantineLetterWidths = {
  ">": 0,
  "<": 0,
  "\n": 0,
  0: 6.1,
  1: 5.2,
  2: 7,
  3: 6.7,
  4: 6.7,
  5: 6.5,
  6: 5.7,
  7: 6.3,
  8: 6,
  9: 5.7,
  ",": 2.1,
  ".": 1.4,
  A: 11.7,
  a: 6.2,
  "'": 2.1,
  B: 11.1,
  b: 4.6,
  C: 7.4,
  c: 4.3,
  D: 10.7,
  d: 7.4,
  "-": 3.5,
  E: 8,
  e: 4.5,
  F: 11.1,
  f: 11,
  G: 10,
  g: 7.3,
  H: 14.4,
  h: 6.7,
  I: 10,
  i: 4,
  J: 11.7,
  j: 8.5,
  K: 12.7,
  k: 6.8,
  L: 10.1,
  l: 5,
  M: 14.1,
  m: 9.5,
  N: 13.5,
  n: 6.8,
  O: 7.4,
  o: 4.6,
  P: 10.7,
  p: 7.4,
  Q: 8.5,
  q: 5.6,
  R: 11,
  r: 3.4,
  S: 8,
  s: 3.4,
  " ": 5,
  T: 11.2,
  t: 4.4,
  U: 10,
  u: 6.2,
  V: 8.7,
  v: 4.4,
  W: 10.5,
  w: 7,
  X: 11.3,
  x: 5.8,
  Y: 11,
  y: 7.4,
  Z: 11.3,
  z: 5.6,
};
const letterHeights = {
  0: 6.5,
  1: 6.4,
  2: 6.5,
  3: 6.5,
  4: 6.6,
  5: 6.7,
  6: 6.7,
  7: 6.5,
  8: 6.6,
  9: 6.7,
  ",": 2.4,
  ".": 1.4,
  A: 7.6,
  a: 3.8,
  "'": 2.4,
  B: 7.5,
  b: 6.6,
  C: 7.6,
  c: 3.8,
  D: 7.3,
  d: 6.6,
  "-": 1,
  E: 7.6,
  e: 3.9,
  F: 7.5,
  f: 9.3,
  G: 10,
  g: 9.3,
  H: 7.5,
  h: 6.6,
  I: 7.4,
  i: 6,
  J: 9.1,
  j: 9.3,
  K: 7.5,
  k: 6.6,
  L: 7.5,
  l: 6.6,
  M: 7.7,
  m: 3.8,
  N: 8.1,
  n: 6.8,
  O: 7.6,
  o: 3.9,
  P: 7.6,
  p: 9.3,
  Q: 9,
  q: 9.3,
  R: 7.8,
  r: 3.8,
  S: 7.6,
  s: 3.9,
  " ": 1,
  T: 7.5,
  t: 5.4,
  U: 7.5,
  u: 3.8,
  V: 7.5,
  v: 3.9,
  W: 7.5,
  w: 3.8,
  X: 7.5,
  x: 3.8,
  Y: 10,
  y: 9.3,
  Z: 7.6,
  z: 3.9,
};
const designBox = document.querySelector("#csp-design-box");
const displayDesignText = document.querySelector("#sign-text-overlay");
const measurementTexBox = document.querySelector(".measurement-text-box");
const textInput = document.querySelector("#textInput");
const fontSelector = document.querySelector("#csp-font-option");
const fontInput = document.querySelector(".csp-font-input");
const iconCarat = document.querySelector(".icon-carat-box");
const fontDropdownGrid = document.querySelector(".csp-grid-dropdown");
const fontGrid = document.querySelector(".csp-font-grid");
const fontGridItem = document.querySelectorAll(".csp-font-item");
const iconLeftA = document.querySelector(".icon-left-align");
const iconCenterA = document.querySelector(".icon-center-align");
const iconRightA = document.querySelector(".icon-right-align");
const alignIcons = document.querySelectorAll(".align-icon");
const leftAlignBox = document.querySelector(".left-align-box");
const centerAlignBox = document.querySelector(".center-align-box");
const rightAlignBox = document.querySelector(".right-align-box");
const alignBoxes = document.querySelectorAll(".csp-text-align-box");

const rulerBtn = document.querySelector("#csp-ruler-btn");
const rateBox = document.querySelector("#rate");
const alertBox = document.querySelector("#alert");

const currentProduct = document.querySelector("#current-product");
const currentAddress = document.querySelector("#current-address");
const currentFont = document.querySelector("#current-font");
const currentAlign = document.querySelector("#current-align");
const currentColor = document.querySelector("#current-color");
const currentMaterial = document.querySelector("#current-material");
const currentCSize = document.querySelector("#current-size");

const radioColorBlack = document.querySelector("#color-radio-black");
const radioColorWhite = document.querySelector("#color-radio-white");
const radioMaterialMatte = document.querySelector("#material-radio-matte");
const radioMaterialGlossy = document.querySelector("#material-radio-glossy");

iconLeftA.parentNode.parentNode.style.backgroundColor = "#353eac";
iconLeftA.style.fill = "#68ffa8";

const breakTag = `<br>`;

let fontSizes = {
  ballantine: 130,
  seashore: 80,
  "brush-scri": 100,
  commercial: 110,
  parsley: 100,
  "petit-form": 80,
  vivace: 110,
  scriptmtbo: 100,
};
let currencyStatus = 0;

/*********************************ROMEO'S WORK**********************************/
var preModal = document.querySelector("#cart-pre-notification");
document.querySelector("#done-btn").addEventListener("click", () => {
  const text = textInput.value;
  if (text === "") {
    alertBox.style.display = "block";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  } else {
    const imageElement = document.querySelector("#cart-pre-img");
    const divToCapture = document.querySelector("#csp-design-box");

    html2canvas(divToCapture).then((canvas) => {
      canvas.toBlob((blob) => {
        imageElement.src = blob.toDataURL("image/png");
      });
    });
    preModal.style.display = "block";
  }
});
document
  .querySelector("#cancel-prev-modal-btn")
  .addEventListener("click", () => {
    preModal.style.display = "none";
    const comment = document.querySelector("#cart-pre-comment");
    const addToCartBtn = document.querySelector("#add-to-cart-btn");
    const viewCartbtn = document.querySelector("#view-cart-btn");

    comment.innerHTML = "";
    addToCartBtn.style.display = "block";
    viewCartbtn.style.display = "none";
  });
document.querySelector("#alert-closebtn").addEventListener("click", () => {
  alertBox.style.display = "none";
});

setInterval(function () {
  let currency = document.querySelector("#currency_status");
  let priceStr = currency.textContent.trim();
  const newStatus = priceStr.slice(1, priceStr.length - 4);
  if (currencyStatus !== newStatus) {
    currencyStatus = newStatus;
    countValue();
  }
}, 100);

rulerBtn.addEventListener("click", (event) => {
  const horizontalRuler = document.querySelector(".measure-height-cont");
  const verticalRuler = document.querySelector(".measure-width-cont");
  const viewStatus = horizontalRuler.style.display;

  if (viewStatus !== "none") {
    horizontalRuler.style.display = "none";
    verticalRuler.style.display = "none";
  } else {
    horizontalRuler.style.display = "flex";
    verticalRuler.style.display = "block";
  }
});

window.addEventListener("resize", () => {
  countValue();
});

// Function to handle keyup events
function countValue() {
  alertBox.style.display = "none";

  // Display Width/Height
  var inlineStrings = textInput.value.split("\n");
  var maxWidth = Math.max(
    ...inlineStrings.map((s) =>
      s.split("").reduce((save, item) => {
        return save + ballantineLetterWidths[item];
      }, 0)
    )
  );

  var maxEachHeights = inlineStrings.map((s) =>
    Math.max(...s.split("").map((val) => letterHeights[val]))
  );
  var maxHeight = maxEachHeights.reduce((save, item) => {
    if (item !== -Infinity) return save + item;
    return save;
  }, 0.0);
  var lineCnt = maxEachHeights.filter((height) => height !== -Infinity).length;
  maxHeight += lineCnt ? (lineCnt - 1) * 3 : 0;

  var textWidthDislay = document.getElementById("widthDisplay");
  var textHeightDislay = document.getElementById("heightDisplay");

  var rate = +rateBox.innerHTML;
  if (window.innerWidth > 990) {
    textWidthDislay.textContent = (maxWidth * rate).toFixed(1);
    textHeightDislay.textContent = (maxHeight * rate).toFixed(1);
  } else {
    if (maxWidth !== 0 && maxHeight !== 0) {
      textWidthDislay.textContent = `${(maxHeight * rate).toFixed(1)}×${(
        maxWidth * rate
      ).toFixed(1)}`;
    } else {
      textWidthDislay.textContent = "0.0×0.0";
    }
  }

  // Show Price
  var totalPrice = document.querySelector("#csp-design-static-currency");
  var strlength = textInput.value
    .split("")
    .filter((str) => str !== "\n" && str !== " ").length;

  if (strlength > 4)
    totalPrice.textContent = (
      4 * currencyStatus +
      (strlength - 4) * 0.7 * currencyStatus
    ).toFixed(1);
  else totalPrice.textContent = (strlength * currencyStatus).toFixed(1);

  var quantityDisplay = document.getElementsByClassName("quantity__input")[0];
  quantityDisplay.value = 1;

  currentAddress.innerHTML = textInput.value;
  currentProduct.innerHTML = `${strlength} letter`;

  // Control Font Size
  var container = document.getElementsByClassName("height-text-box")[0];
  var fontStr = displayDesignText.style.fontFamily;
  let modifiedStr = fontStr.split(",")[0].split("").slice(0, 10).join("");
  let fontSize = fontSizes[modifiedStr];

  displayDesignText.style.fontSize = fontSize + "px";
  while (
    displayDesignText.scrollWidth > container.clientWidth &&
    fontSize > 0
  ) {
    fontSize--;
    displayDesignText.style.fontSize = fontSize + "px";
  }
  if (fontSize > fontSizes[modifiedStr]) {
    fontSize = fontSizes[modifiedStr];
    displayDesignText.style.fontSize = fontSize + "px";
  }
}

[radioColorBlack, radioColorWhite].forEach((color) =>
  color.addEventListener("change", (e) => {
    if (e.target.checked) {
      currentColor.innerHTML = e.target.value;
      const valueLowCase = e.target.value.toLowerCase();
      displayDesignText.style.color = valueLowCase;
      if (valueLowCase === "white")
        displayDesignText.style.textShadow = "3px 1px 1px #000";
      else displayDesignText.style.textShadow = "3px 1px 1px #fff";
    }
  })
);

[radioMaterialMatte, radioMaterialGlossy].forEach((material) =>
  material.addEventListener("change", (e) => {
    if (e.target.checked) {
      currentMaterial.innerHTML = e.target.value;
    }
  })
);
/*******************************************************************************/

function filterInput() {
  var textInput = document.getElementById("textInput");
  var value = textInput.value;

  var filteredValue = "";
  for (var i = 0; i < value.length; i++) {
    // Check for character in ballantineLetterWidths or newline
    if (ballantineLetterWidths.hasOwnProperty(value[i]) || value[i] === "\n") {
      filteredValue += value[i];
    }
  }

  //filteredValue = filteredValue.replace(/\n/g, breakTag);
  if (filteredValue === "") {
    measurementTexBox.style.display = "none";
  } else {
    measurementTexBox.style.display = "flex";
    textInput.value = filteredValue;
    displayDesignText.innerHTML = filteredValue;
    //calcWidth = displayDesignText.offsetWidth;
  }
}

// Add event listeners to the text input
document.getElementById("textInput").addEventListener("input", filterInput);
document.getElementById("textInput").addEventListener("keyup", countValue);

// BACKGROUND CHANGE ON SWATCH CLICK FUNCTIONALITY
const backgroundSwatches = document.querySelectorAll(".csp-swatch-box");
const backgroundContainer = document.querySelector("#csp-background-img");
const backgroundImage = backgroundContainer.querySelector("img");

backgroundSwatches.forEach((swatch) => {
  swatch.addEventListener("click", (e) => {
    backgroundImage.src = e.currentTarget.querySelector(".csp-swatch-img").src;
  });
});

fontGrid.style.display = "none";
fontSelector.addEventListener("click", function () {
  if (fontDropdownGrid.style.gridTemplateRows === "0fr") {
    fontGrid.style.display = "grid";
    fontDropdownGrid.style.gridTemplateRows = "1fr";
    iconCarat.style.transform = "rotate(180deg)";
    for (let i = 0; i < fontGridItem.length; i++) {
      if (i === 0) {
        fontGridItem[i].style.color = "#68ffa8";
        fontGridItem[i].style.backgroundColor = "#353eac";
      }
      fontGridItem[i].addEventListener("click", function (e) {
        for (let x = 0; x < fontGridItem.length; x++) {
          fontGridItem[x].style.color = "rgb(53, 62, 172)";
          fontGridItem[x].style.backgroundColor = "transparent";
        }
        e.currentTarget.style.color = "#68ffa8";
        e.currentTarget.style.backgroundColor = "#353eac";
        let fontStr = e.currentTarget.style.fontFamily;
        let modifiedStr = fontStr.split(",")[0].split("").slice(0, 10).join("");
        fontSelector.textContent =
          modifiedStr.charAt(0).toUpperCase() + modifiedStr.slice(1);
        fontInput.setAttribute("value", modifiedStr);
        displayDesignText.style.fontFamily = e.currentTarget.style.fontFamily;
        displayDesignText.style.fontSize = fontSizes[modifiedStr] + "px";
        if (modifiedStr === "brush-scri" || modifiedStr === "parsley")
          displayDesignText.style.fontWeight = 500;
        else displayDesignText.style.fontWeight = 700;

        // THIS WORKS BUT NEED THE fontSizes TO BE THE CORRECT NAMES
        currentFont.innerHTML = modifiedStr;
        console.log("Modified String: " + modifiedStr);

        /**********************ROMEO'S WORK*************************/
        countValue();
        /***********************************************************/
      });
    }
  } else {
    iconCarat.style.transform = "rotate(0deg)";
    fontGrid.style.overflow = "hidden";
    fontDropdownGrid.style.gridTemplateRows = "0fr";
    fontGrid.style.display = "none";
  }
});

// FUNCTION DETECTS WHEN A NUMBER IS 60% OF SCREEN WIDTH
// function checkScreenPercentage(num, percent) {
//   let screenWidth = designBox.offsetWidth;
//   let decimalPercent = percent / 100;
//   let limit = screenWidth * decimalPercent;
//   if (num >= limit) {
//     // Execute your code here
//     console.log(num + " has reached " + percent + "% of the design width.");
//   } else {
//     console.log(num + " has NOT reached " + percent + "% of the design width.");
//   }
// }

// SELECT ALIGNMENT FUNCTIONALITY
leftAlignBox.addEventListener("click", function () {
  removeAlignBoxStyle(alignBoxes);
  displayDesignText.style.textAlign = "left";
  alignBoxes[0].style.backgroundColor = "#353eac";
  iconLeftA.style.fill = "#68ffa8";
  currentAlign.innerHTML = "Left";
  console.log("box clicked");
});
centerAlignBox.addEventListener("click", function () {
  removeAlignBoxStyle(alignBoxes);
  displayDesignText.style.textAlign = "center";
  alignBoxes[1].style.backgroundColor = "#353eac";
  iconCenterA.style.fill = "#68ffa8";
  currentAlign.innerHTML = "Center";
  console.log("box clicked");
});
rightAlignBox.addEventListener("click", function () {
  removeAlignBoxStyle(alignBoxes);
  displayDesignText.style.textAlign = "right";
  alignBoxes[2].style.backgroundColor = "#353eac";
  iconRightA.style.fill = "#68ffa8";
  currentAlign.innerHTML = "Right";
  console.log("box clicked");
});

const removeAlignBoxStyle = function (alignBoxes) {
  alignBoxes.forEach((box) => {
    box.style.backgroundColor = "transparent";
    //box.style.color = '#353eac';
    box.querySelector(".align-icon").style.fill = "#353eac";
  });
};
