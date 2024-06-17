const headings = document.querySelectorAll(".exp h1");

headings.forEach((heading) => {
  heading.addEventListener("click", () => {
    headings.forEach((h) => h.classList.remove("font-bold"));
    heading.classList.add("font-bold");
  });
});

document.getElementById("search-input").addEventListener("focus", function () {
  document.getElementById("border-div").style.borderRight = "none";
});

document.getElementById("search-input").addEventListener("blur", function () {
  document.getElementById("border-div").style.borderRight = "2px solid #cbd5e1"; // Adjust to match your border color
});
