let letterClass = "text-animate";
const headerTex = "THE eWatch with the newest microchip technology"
  .split(" ")
  .map((word) => word.split(""));

setTimeout(() => {
  letterClass = "text-animate-hover";
  header.innerHTML = animateLetter(headerTex);
}, 5000);

function animateLetter(words, idx = 15) {
  return words
    .map((word, wordIndex) => {
      return `
        <span class="word">
          ${word
            .map((char, charIndex) => {
              return `
                <span class="${letterClass} _${charIndex + idx}">
                  ${char}
                </span>`;
            })
            .join("")}
        </span>`;
    })
    .join(" ");
}

const header = document.querySelector(".header-text");
header.innerHTML = animateLetter(headerTex);
//
//
//
//
//
// gsap animation

gsap.from("#logo", {
  y: 15,
  duration: 1,
  delay: 2,
  opacity: 0,
  ease: "power2.out",
});
gsap.from(".nav-links", {
  y: 15,
  duration: 1,
  delay: 2,
  opacity: 0,
  ease: "power2.out",
});

gsap.from(".feature-item", {
  top: -50,
  opacity: 0,
  delay: 3,
  duration: 2,
  ease: "power2.out",
  stagger: 0.5,
});

gsap.from(".product-image", {
  opacity: 0,
  delay: 1,
  duration: 1,
  ease: "power2.out",
});

gsap.from(".tag-top", {
  opacity: 0,
  right: 20,
  duration: 1,
  delay: 2,
  ease: "power2.out",
});
gsap.from(".tag-bottom", {
  opacity: 0,
  left: 20,
  duration: 1,
  delay: 2,
  ease: "power2.out",
});

document.addEventListener("DOMContentLoaded", () => {
  // Create a GSAP timeline
  const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

  // Text animation: Slide up with a bounce
  tl.from(".logo span", {
    duration: 0.8,
    opacity: 0,
    ease: "bounce.out",
  });

  // Circle animation: Grow, spin, and hover
  tl.from(
    ".fas.fa-circle",
    {
      duration: 0.5,
      opacity: 0,
      scale: 0.5,
      y: 10,
      x: 0,
      rotation: 360, // Spin effect
    }
    // "-=0.4" // Overlap with text animation
  )
    .to(".fas.fa-circle", {
      duration: 1,
      x: 50, // Move up
      scale: 0.8,
      y: 15,

      ease: "power2.inOut",
    })
    .to(".fas.fa-circle", {
      duration: 1,
      x: 0, // Move back down
      scale: 0.8,
      y: 15,
      repeat: -1, // Infinite loop
      yoyo: true, // Gentle hover effect
      ease: "sine.inOut",
    });
});
