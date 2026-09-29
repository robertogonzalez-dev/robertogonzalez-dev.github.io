// Progressive enhancement only: the page is fully readable without JavaScript
// (the "js" class that hides .reveal elements is set inline in <head>).

document.getElementById("year").textContent = new Date().getFullYear();

// Fade sections in as they scroll into view.
const reveals = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      }
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
  );
  reveals.forEach((el) => io.observe(el));
} else {
  reveals.forEach((el) => el.classList.add("in"));
}

// Hairline under the nav once the page scrolls.
const nav = document.querySelector(".nav-wrap");
const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 8);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();
