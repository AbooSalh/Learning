// local color check
let mainColors = localStorage.getItem("color_option");
if (mainColors) {
  document.documentElement.style.setProperty("--main--color", mainColors);
  // active class check
  document.querySelectorAll(".option-box ul li").forEach((ele) => {
    ele.classList.remove("active");
    // add active class
    if (ele.dataset.color === mainColors) {
      ele.classList.add("active");
    }
  });
}
// toggle spin
let icon = document.querySelector(".toggle-settings");
icon.onclick = function () {
  document.querySelector(".toggle-settings i").classList.toggle("fa-spin");
  document.querySelector(".toggle-settings").classList.toggle("active");
  document.querySelector(".settings-box").classList.toggle("open");
};
// local randBack check
let randomBack = localStorage.getItem("random_back");

// switch colors
const colorList = document.querySelectorAll(".settings-box .option-box ul li");

colorList.forEach((li) => {
  li.addEventListener("click", (e) => {
    // root
    document.documentElement.style.setProperty(
      "--main--color",
      e.target.dataset.color
    );
    // set local color
    localStorage.setItem("color_option", e.target.dataset.color);
    // remove active class
    e.target.parentElement.querySelectorAll(".active").forEach((ele) => {
      ele.classList.remove("active");
    });
    // add active class
    e.target.classList.add("active");
  });
});
// landing
let landingPage = document.querySelector(".landing");
// imges
let imgsCount = 5;
let imgsArray = [];
for (let i = 0; i < imgsCount; i++) {
  imgsArray.push("img" + (i + 1));
}
function randomNum(num) {
  let randomnum = Math.floor(Math.random() * num);
  return randomnum;
}
setInterval(() => {
  landingPage.style.backgroundImage = `url("imgs/${
    imgsArray[randomNum(imgsArray.length)]
  }.jpg")`;
}, 10000);
//end landing
