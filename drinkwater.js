let smallcups = document.querySelectorAll(".smallcups");
let remained = document.querySelector(".remained");
let percentage = document.getElementById("percentage");
let liters = document.getElementById("litres");

smallcups.forEach((cup, idx) => {
  cup.onclick = () => {
    highlightcups(idx);
  };
});

function highlightcups(idx) {
  if (
    smallcups[idx].classList.contains("full") &&
    !smallcups[idx + 1].classList.contains("full")
  ) {
    idx--;
  }

  smallcups.forEach((cup, index2) => {
    if (index2 <= idx) {
      cup.classList.add("full");
    } else {
      // cup.classList.remove("full");
    }
  });
  updatebigcup();
}

function updatebigcup() {
  const filledcup = document.querySelectorAll(".smallcups.full").length;
  console.log(filledcup);

  let totallength = smallcups.length;
  console.log(totallength);
  if (filledcup === 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${(filledcup / totallength) * 300}px`;
    percentage.innerText = `${(filledcup / totallength) * 100}%`;
  }
  if (filledcup === totallength) {
    remained.style.display = "none";
  } else {
    remained.style.display = " block";
    liters.innerText = `${2 - (250 * filledcup) / 1000} L`;
  }
}
