document.addEventListener("DOMContentLoaded", () => {
  const revealBtn = document.getElementById("revealTeamBtn");
  const presidentSection = document.querySelector(".president");
  const coreSection = document.querySelector(".core-committee");
  const otherSection = document.querySelector(".other-members");
  const heroImage = document.querySelector(".hero-image");
  let isRevealed = false;

  // Enhanced Parallax effect on hero image with mouse movement
  window.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 25;
    const y = (e.clientY / window.innerHeight - 0.5) * 25;
    heroImage.style.transform = `scale(1.05) translate(${x}px, ${y}px)`;
  });

  // Smooth reveal with staggered animations
  revealBtn.addEventListener("click", (e) => {
    if (isRevealed) return;
    isRevealed = true;

    // Animate button out
    revealBtn.style.opacity = '0';
    revealBtn.style.transform = 'translateY(-20px) scale(0.9)';
    revealBtn.style.pointerEvents = 'none';

    // Staggered reveal with smooth timing
    setTimeout(() => {
      presidentSection.classList.add("section-visible");
      presidentSection.style.animation = 'slideUp 0.8s ease-out forwards';
    }, 200);

    setTimeout(() => {
      coreSection.classList.add("section-visible");
      coreSection.style.animation = 'slideUp 0.8s ease-out 0.3s forwards';
    }, 700);

    setTimeout(() => {
      otherSection.classList.add("section-visible");
      otherSection.style.animation = 'slideUp 0.8s ease-out 0.6s forwards';
    }, 1200);

    // Scroll to president section smoothly
    setTimeout(() => {
      presidentSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 300);
  });

  // Lazy reveal on scroll for other sections (fallback)
  const hiddenSections = document.querySelectorAll(".section-hidden");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting && !entry.target.classList.contains("section-visible")) {
        setTimeout(() => {
          entry.target.classList.add("section-visible");
        }, index * 300);
      }
    });
  }, { threshold: 0.1 });

  hiddenSections.forEach(section => observer.observe(section));

  // Add staggered animation to committee member cards
  const memberCards = document.querySelectorAll(".member-card");
  const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.animation = `slideUp 0.6s ease-out forwards`;
          entry.target.style.opacity = '0';
        }, 0);
        
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.animation = `slideUp 0.6s ease-out ${index * 0.1}s forwards`;
        }, 50);
      }
    });
  }, { threshold: 0.2 });

  memberCards.forEach(card => {
    observer2.observe(card);
  });

  // Add smooth hover effects to social links
  const socialLinks = document.querySelectorAll(".social-link");
  socialLinks.forEach(link => {
    link.addEventListener("mouseenter", function() {
      this.style.transform = 'translateY(-4px) scale(1.15) rotate(5deg)';
    });
    link.addEventListener("mouseleave", function() {
      this.style.transform = 'translateY(0) scale(1) rotate(0)';
    });
  });
});