<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/ScrollTrigger.min.js"></script>

<script>
document.addEventListener('DOMContentLoaded', function () {
  gsap.registerPlugin(ScrollTrigger);

  // Function to split text into spans
  function splitTextIntoSpans(selector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
      const text = element.innerText;
      element.innerHTML = ""; // Clear existing content
      text.split("").forEach(char => {
        const span = document.createElement("span");
        span.style.display = "inline-block";
        span.style.opacity = "0";
        span.style.filter = "blur(8px)";
        span.style.transform = "translateX(-100px)";
        span.innerText = char === " " ? "\u00A0" : char; // Non-breaking space for spaces
        element.appendChild(span);
      });
    });
  }

  splitTextIntoSpans("h2" );

  document.querySelectorAll("h2").forEach(h2 =>{
    gsap.fromTo(h2.querySelectorAll("span"), {
      x: '-100%',
      filter: 'blur(8px)',
      opacity: 0,
    }, {
      x: '0%',
      filter: 'blur(0)',
      opacity: 1,
      duration: 1.5,
      ease: "power4.out",
      stagger: 0.05,
      scrollTrigger: {
        trigger: h2,
        start: "top 90%", // Adjust if necessary
        end: "top 20%", // Ensures animation completes
        toggleActions: "restart none none reset",
        scrub: 1,
        markers: false
      },
    });
  });
});


      splitTextIntoSpans("p" );

  document.querySelectorAll("p").forEach(p =>{
    gsap.fromTo(h2.querySelectorAll("span"), {
      x: '-100%',
      filter: 'blur(8px)',
      opacity: 0,
    }, {
      x: '0%',
      filter: 'blur(0)',
      opacity: 1,
      duration: 1.5,
      ease: "power4.out",
      stagger: 0.05,
      scrollTrigger: {
        trigger: p,
        start: "top 90%", // Adjust if necessary
        end: "top 20%", // Ensures animation completes
        toggleActions: "restart none none reset",
        scrub: 1,
        markers: false
      },
    });
  });
});

</script>