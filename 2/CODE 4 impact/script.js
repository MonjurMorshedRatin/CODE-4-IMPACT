// Tabs with animation
const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {

    // Remove active from all tabs
    tabs.forEach(t => t.classList.remove("active"));

    // Animate hiding old content
    contents.forEach(c => {
      if(c.classList.contains("active")){
        c.style.opacity = 0;
        c.style.transform = "translateY(15px)";
        setTimeout(() => c.classList.remove("active"), 300);
      }
    });

    // Activate clicked tab
    tab.classList.add("active");
    const target = document.getElementById(tab.dataset.tab);

    // Wait for old content to fade out
    setTimeout(() => {
      target.classList.add("active");
      target.style.opacity = 0;
      target.style.transform = "translateY(15px)";

      // Trigger transition
      requestAnimationFrame(() => {
        target.style.transition = "all 0.3s ease";
        target.style.opacity = 1;
        target.style.transform = "translateY(0)";
      });

      // Reset transition after animation
      setTimeout(() => target.style.transition = "", 300);

      // Initialize counters inside the new tab (if any)
      const counters = target.querySelectorAll(".counter");
      counters.forEach(counter => startCounter(counter));

    }, 300); // match old content fade duration

  });
});

// Counter function
function startCounter(counter){
  const update = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText.replace("+", "");

    const speed = 200;
    const increment = target / speed;

    if(count < target){
      counter.innerText = Math.ceil(count + increment);
      setTimeout(update, 10);
    } else {
      counter.innerText = target + "+";
    }
  };

  update();
}

// Initialize counters in the default active tab
document.querySelectorAll(".tab-content.active .counter").forEach(counter => startCounter(counter));



// Team member hover effect