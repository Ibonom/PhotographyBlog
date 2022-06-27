const headerSection = document.querySelector(".header");
const aboutMeSection = document.querySelector(".aboutMe");
const gallerySection = document.querySelector(".gallery");
const followSection = document.querySelector(".followSection");
const formSection = document.querySelector(".formSection");

const navigationBar = document.querySelector(".navigation");
const headerArrow = document.querySelector(".header__arrow");
const footerArrow = document.querySelector(".footerSection__button");
const dots = document.querySelectorAll(".dot");
const commentDescription = document.querySelector(".commentSection__comments");
const commentAuthor = document.querySelector(".commentSection__author");

const propertyScroll = {
  behavior: "smooth",
  block: "nearest",
};

const scrollFunction = (triggerTxt) => {
  if (triggerTxt === "ABOUT" || triggerTxt === "#aboutme") {
    aboutMeSection.scrollIntoView(propertyScroll);
  } else if (triggerTxt === "WORKS" || triggerTxt === "#gallery") {
    gallerySection.scrollIntoView(propertyScroll);
  } else if (triggerTxt === "CONTACT ME" || triggerTxt === "#contactme") {
    formSection.scrollIntoView(propertyScroll);
  } else if (triggerTxt === "FOLLOW ME" || triggerTxt === "#followme") {
    followSection.scrollIntoView(propertyScroll);
  } else if (triggerTxt === "#header") {
    headerSection.scrollIntoView(propertyScroll);
  }
};

navigationBar.addEventListener("click", (e) => {
  scrollFunction(e.target.textContent);
});

headerArrow.addEventListener("click", () => {
  window.location.hash = "aboutme";
  aboutMeSection.scrollIntoView(propertyScroll);
});
footerArrow.addEventListener("click", () => {
  headerSection.scrollIntoView(propertyScroll);
  window.location.hash = "header";
  scrollFunction("header");
});
//Hash logic
scrollFunction(window.location.hash);

if (window.history) {
  window.addEventListener("hashchange", (e) => {
    e.preventDefault();
    scrollFunction(window.location.hash);
    window.history.pushState({}, null, window.location.hash);
  });
}

const quotes = {
  description: [
    "Photography is a way of feeling, of touching, of loving. What you have caught on film is captured forever… It remembers little things, long after you have forgotten everything.",
    "When you photograph people in color, you photograph their clothes. But when you photograph people in Black and white, you photograph their souls!",
    "I go and get the camera and do it. Photography is a medium in which if you don’t do it then, very often you don’t do it at all, because it doesn’t happen twice.”",
  ],
  author: ["Aaron Siskind", "Ted Grant", "Paul Strand"],
};
//quotes
setInterval(() => {
  dots.forEach((dot, index) => {
    setTimeout(() => {
      dot.classList.toggle("active");
      commentDescription.textContent = quotes.description[index];
      commentAuthor.textContent = quotes.author[index];
    }, 8000 + index * 8000);
    setTimeout(() => {
      if (dot.classList.contains("active")) {
        dot.classList.toggle("active");
      }
    }, 16000 + index * 8000);
  });
}, 24000);
