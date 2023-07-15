const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});
const hiddenElements = document.querySelectorAll(".visible");
hiddenElements.forEach((el) => {
  observer.observe(el);
});

var loader = document.getElementById("preloader");
loader.style.display = "none";
window.addEventListener("load", function () {
  setTimeout(function () {
    loader.style.opacity = "0";
    loader.style.transition = "opacity 2s";
    setTimeout(function () {
      loader.style.display = "none";
    }, 1000);
  }, 1000); // Delay of 2 seconds (2000 milliseconds)
});

// window.addEventListener("load", function () {
//   loader.style.display = "none";
// });
