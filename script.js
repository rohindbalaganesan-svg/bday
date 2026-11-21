const passwordInput = document.querySelector("#password");
const visibilityToggle = document.querySelector("#visibility-toggle");
const loginForm = document.querySelector("#login-form");
const formMessage = document.querySelector("#form-message");
const loginCard = document.querySelector(".login-card");
const birthdayCard = document.querySelector("#birthday-card");
const memoriesCard = document.querySelector("#memories-card");
const videoCard = document.querySelector("#video-card");
const pageNote = document.querySelector("#page-note");
const replayButton = document.querySelector("#replay-button");
const nextPageButton = document.querySelector("#next-page-button");
const previousPageButton = document.querySelector("#previous-page-button");
const videoPageButton = document.querySelector("#video-page-button");
const previousVideoPageButton = document.querySelector("#previous-video-page-button");
const themesPageButton = document.querySelector("#themes-page-button");
const themesCard = document.querySelector("#themes-card");
const previousThemesPageButton = document.querySelector("#previous-themes-page-button");
const birthdayWishPageButton = document.querySelector("#birthday-wish-page-button");
const birthdayWishCard = document.querySelector("#birthday-wish-card");
const previousBirthdayWishPageButton = document.querySelector("#previous-birthday-wish-page-button");
const birthdayVideo = videoCard.querySelector("video");
const themesAudio = themesCard.querySelector("audio");
const birthdayWishAudio = birthdayWishCard.querySelector("audio");

visibilityToggle.addEventListener("click", () => {
  const isPasswordHidden = passwordInput.type === "password";
  passwordInput.type = isPasswordHidden ? "text" : "password";
  visibilityToggle.setAttribute("aria-pressed", String(isPasswordHidden));
  visibilityToggle.setAttribute(
    "aria-label",
    isPasswordHidden ? "Hide password" : "Show password",
  );
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.querySelector("#name").value.trim();
  const password = passwordInput.value;

  if (name.toLocaleLowerCase() !== "parini" || password !== "21112008") {
    formMessage.textContent = "That doesn't look right. Please check your name and password ♥";
    return;
  }

  formMessage.textContent = "";
  loginCard.hidden = true;
  birthdayCard.hidden = false;
  pageNote.hidden = true;
  document.querySelector("#birthday-title").focus();
});

nextPageButton.addEventListener("click", () => {
  birthdayCard.hidden = true;
  memoriesCard.hidden = false;
  document.querySelector("#memories-title").focus();
});

previousPageButton.addEventListener("click", () => {
  memoriesCard.hidden = true;
  birthdayCard.hidden = false;
  document.querySelector("#birthday-title").focus();
});

videoPageButton.addEventListener("click", () => {
  memoriesCard.hidden = true;
  videoCard.hidden = false;
  birthdayVideo.load();
  document.querySelector(".video-card").focus();
});

previousVideoPageButton.addEventListener("click", () => {
  birthdayVideo.pause();
  videoCard.hidden = true;
  memoriesCard.hidden = false;
  document.querySelector("#memories-title").focus();
});

themesPageButton.addEventListener("click", () => {
  birthdayVideo.pause();
  videoCard.hidden = true;
  themesCard.hidden = false;
  document.querySelector("#themes-title").focus();
});

previousThemesPageButton.addEventListener("click", () => {
  themesAudio.pause();
  themesCard.hidden = true;
  videoCard.hidden = false;
  document.querySelector(".video-card").focus();
});

birthdayWishPageButton.addEventListener("click", () => {
  themesAudio.pause();
  themesCard.hidden = true;
  birthdayWishCard.hidden = false;
  document.querySelector("#birthday-wish-title").focus();
});

previousBirthdayWishPageButton.addEventListener("click", () => {
  birthdayWishAudio.pause();
  birthdayWishCard.hidden = true;
  themesCard.hidden = false;
  document.querySelector("#themes-title").focus();
});

replayButton.addEventListener("click", () => {
  birthdayCard.hidden = true;
  loginCard.hidden = false;
  pageNote.hidden = false;
  loginForm.reset();
  document.querySelector("#name").focus();
});
