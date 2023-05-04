function paintYellow() {
  const companyLogo = document.getElementById("company-logo");
  if (!!companyLogo) companyLogo.style.display = "none";
  const umbrellaImg = document.getElementById("umb");
  umbrellaImg.style.display = "none";
  const bigLoader = document.getElementById("big-loader");
  bigLoader.style.display = "inline-flex";
  bigLoader.querySelector("path").setAttribute("fill", "yellow");

  setTimeout(() => {
    const umbrella = document.getElementById("umb");
    umbrella.style.display = "inline-flex";
    const bigLoader = document.getElementById("big-loader");
    bigLoader.style.display = "none";
    const companyLogo = document.getElementById("company-logo");
    if (!!companyLogo) companyLogo.style.display = "inline-flex";

    umbrella.src = "./assets/Yello umbrella.png";

    const inputElement = document.getElementById("label-back");
    inputElement.style.backgroundColor = " #ffff4d";
    const bodyElement = document.querySelector("body");
    bodyElement.style.backgroundColor = " #ffffb3";
  }, 500);
}
function paintPink() {
  const umbrellaImg = document.getElementById("umb");
  umbrellaImg.style.display = "none";
  const bigLoader = document.getElementById("big-loader");
  bigLoader.style.display = "inline-flex";
  bigLoader.querySelector("path").setAttribute("fill", "pink");
  const companyLogo = document.getElementById("company-logo");
  if (!!companyLogo) companyLogo.style.display = "none";
  setTimeout(() => {
    const umbrella = document.getElementById("umb");
    umbrella.style.display = "inline-flex";
    const bigLoader = document.getElementById("big-loader");
    bigLoader.style.display = "none";
    const companyLogo = document.getElementById("company-logo");
    if (!!companyLogo) companyLogo.style.display = "inline-flex";
    umbrella.src = "./assets/Pink umbrella.png";
    const inputElement = document.getElementById("label-back");
    inputElement.style.backgroundColor = "Hotpink";
    const bodyElement = document.querySelector("body");
    bodyElement.style.backgroundColor = "#ffe6ee";
  }, 500);
}
function paintBlue() {
  const umbrellaImg = document.getElementById("umb");
  umbrellaImg.style.display = "none";
  const bigLoader = document.getElementById("big-loader");
  bigLoader.style.display = "inline-flex";
  bigLoader.querySelector("path").setAttribute("fill", "blue");
  const companyLogo = document.getElementById("company-logo");
  if (!!companyLogo) companyLogo.style.display = "none";

  setTimeout(() => {
    const umbrella = document.getElementById("umb");
    umbrella.style.display = "inline-flex";
    const bigLoader = document.getElementById("big-loader");
    bigLoader.style.display = "none";
    const companyLogo = document.getElementById("company-logo");
    if (!!companyLogo) companyLogo.style.display = "inline-flex";
    umbrella.src = "./assets/Blue umbrella.png";
    const inputElement = document.getElementById("label-back");
    inputElement.style.backgroundColor = "rgba(8, 114, 201, 0.758)";
    const bodyElement = document.querySelector("body");
    bodyElement.style.backgroundColor = " #ccf5ff";
  }, 500);
}

const displayFilename = () => {
  setTimeout(() => {
    const input = document.getElementById("input-back");
    const span = document.getElementById("span-text");
    if (input.files.length > 0) {
      span.textContent = input.files[0].name;
    }
    console.log("preloader wait for 2 seconds");
  }, 2000);
};
const attachLogo = () => {
  setTimeout(() => {
    const input = document.getElementById("input-back");
    const selectedFile = input.files[0];
    const selectedFileElement = document.getElementById("umbrella-back");
    var labelIcon = document.getElementById("label-icon");
    const reader = new FileReader();
    reader.onload = function () {
      // Create a new image element and set its source to the loaded file
      const image = new Image();
      image.src = reader.result;
      image.id = "company-logo";
      selectedFileElement.appendChild(image);
      image.classList.add("logo-back");
      image.style = "position: absolute; top: 0; left: 0; z-index: 1";
    };
    labelIcon.src = "./assets/upload_icon.svg";
    reader.readAsDataURL(selectedFile);
  }, 6000);
};
const showLoader = () => {
  setTimeout(() => {
    const umbrellaImg = document.getElementById("umb");
    umbrellaImg.style.display = "none";
    const bigLoader = document.getElementById("big-loader");
    bigLoader.style.display = "inline-flex";
    console.log("Inside showLoader ");
  }, 4000);

  setTimeout(() => {
    // const bigLoader = document.getElementById("big-loader");
    const umbrellaImg = document.getElementById("umb");
    umbrellaImg.style.display = "inline-flex";
    const bigLoader = document.getElementById("big-loader");
    bigLoader.style.display = "none";
    console.log("Onload function call");

    console.log("Inside showLoader setTimeout");
  }, 6000);
};

const displayPreloader = async () => {
  // const input = document.getElementById("input-back");
  const label = document.getElementById("label-back");
  //const labelClass = document.getElementsByClassName("custom-file-upload");
  var labelIcon = document.getElementById("label-icon");
  var umbrellaImg = document.getElementById("umb");

  label.style.height = "50px";
  labelIcon.src = "./assets/loader_icon.svg";
  labelIcon.alt = "New Image";

  displayFilename();
  showLoader();
  attachLogo();
};
