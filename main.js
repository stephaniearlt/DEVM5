const bubble = document.querySelector(".mouse-bubble");

document.addEventListener("mousemove", (e) => {
  bubble.style.left = e.pageX + "px";
  bubble.style.top = e.pageY + "px";
});

document.querySelectorAll(".custom-cursor-link").forEach((link) => {
  link.addEventListener("mouseenter", () => {
    bubble.style.display = "none";
  });
  link.addEventListener("mouseleave", () => {
    bubble.style.display = "block";
  });
});
