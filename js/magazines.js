// ========== MAGAZINE DATA ==========
const magazineData = {
  1: {
    title: 'Issue #1: The Future of Technology',
    cover: 'images/mag-cover-1.jpg',
    month: 'March 2026',
    articles: 24,
    description: 'Welcome to the inaugural issue of CODE 4 IMPACT Magazine! In this issue, we explore the cutting-edge technologies and innovations that are shaping the future. From artificial intelligence to web development, discover groundbreaking insights from our talented student writers and industry experts.',
    pdfLink: 'magazines/issue1.pdf',
    articles: [
      {
        id: 1,
        title: 'The Rise of Artificial Intelligence',
        category: 'AI & Machine Learning',
        author: 'Sarah Johnson',
        date: '2026-03-15',
        image: 'images/article1.jpg',
        description: 'Explore how AI is revolutionizing industries and what students need to know about machine learning.',
        pdf: 'magazines/articles/issue1-article1.pdf'
      },
      {
        id: 2,
        title: 'Web Development Best Practices 2026',
        category: 'Web Development',
        author: 'Mike Chen',
        date: '2026-03-12',
        image: 'images/article2.jpg',
        description: 'Master the latest frameworks and tools for building modern, scalable web applications.',
        pdf: 'magazines/articles/issue1-article2.pdf'
      },
      {
        id: 3,
        title: 'Sustainable Tech Solutions',
        category: 'Innovation',
        author: 'Emma Davis',
        date: '2026-03-10',
        image: 'images/article3.jpg',
        description: 'How technology is being used to combat climate change and create sustainable futures.',
        pdf: 'magazines/articles/issue1-article3.pdf'
      },
      {
        id: 4,
        title: 'Mobile App Security',
        category: 'Security',
        author: 'David Lee',
        date: '2026-03-08',
        image: 'images/article4.jpg',
        description: 'Essential security practices every mobile developer should know and implement.',
        pdf: 'magazines/articles/issue1-article4.pdf'
      },
      {
        id: 5,
        title: 'Cloud Computing Guide',
        category: 'Cloud Technology',
        author: 'Lisa Wong',
        date: '2026-03-05',
        image: 'images/article5.jpg',
        description: 'Understanding AWS, Azure, and Google Cloud for modern application deployment.',
        pdf: 'magazines/articles/issue1-article5.pdf'
      },
      {
        id: 6,
        title: 'The Future of Blockchain',
        category: 'Blockchain',
        author: 'James Park',
        date: '2026-03-01',
        image: 'images/article6.jpg',
        description: 'Beyond cryptocurrency: Real-world applications of blockchain technology.',
        pdf: 'magazines/articles/issue1-article6.pdf'
      }
    ]
  },
  2: {
    title: 'Issue #2: Web Development Revolution',
    cover: 'images/mag-cover-2.jpg',
    month: 'February 2026',
    articles: 20,
    description: 'Dive deep into the world of modern web development. This issue covers the latest frameworks, tools, and methodologies that are transforming how we build web applications. Learn from industry experts and fellow student developers.',
    pdfLink: 'magazines/issue2.pdf',
    articles: [
      {
        id: 7,
        title: 'React vs Vue: A Detailed Comparison',
        category: 'Frontend',
        author: 'Tom Wilson',
        date: '2026-02-20',
        image: 'images/article7.jpg',
        description: 'Understanding the differences between popular JavaScript frameworks.',
        pdf: 'magazines/articles/issue2-article1.pdf'
      },
      {
        id: 8,
        title: 'Backend Development with Node.js',
        category: 'Backend',
        author: 'Nina Patel',
        date: '2026-02-18',
        image: 'images/article8.jpg',
        description: 'Build scalable backend systems using Node.js and Express.',
        pdf: 'magazines/articles/issue2-article2.pdf'
      },
      {
        id: 9,
        title: 'Web Performance Optimization',
        category: 'Performance',
        author: 'Chris Garcia',
        date: '2026-02-15',
        image: 'images/article9.jpg',
        description: 'Techniques to make your websites faster and more efficient.',
        pdf: 'magazines/articles/issue2-article3.pdf'
      },
      {
        id: 10,
        title: 'CSS Grid and Flexbox Mastery',
        category: 'Frontend',
        author: 'Rachel Martinez',
        date: '2026-02-12',
        image: 'images/article10.jpg',
        description: 'Create beautiful, responsive layouts with modern CSS techniques.',
        pdf: 'magazines/articles/issue2-article4.pdf'
      }
    ]
  },
  3: {
    title: 'Issue #3: Innovation & Entrepreneurship',
    cover: 'images/mag-cover-3.jpg',
    month: 'January 2026',
    articles: 18,
    description: 'Discover how CODE 4 IMPACT members are building startups and launching innovative projects. This issue focuses on entrepreneurship, project management, and turning ideas into reality.',
    pdfLink: 'magazines/issue3.pdf',
    articles: [
      {
        id: 11,
        title: 'From Idea to Launch: Building Your First App',
        category: 'Entrepreneurship',
        author: 'Kevin Brown',
        date: '2026-01-25',
        image: 'images/article11.jpg',
        description: 'A step-by-step guide to launching your own tech startup.',
        pdf: 'magazines/articles/issue3-article1.pdf'
      },
      {
        id: 12,
        title: 'Project Management for Developers',
        category: 'Management',
        author: 'Angela Robinson',
        date: '2026-01-20',
        image: 'images/article12.jpg',
        description: 'Tools and techniques for managing complex development projects.',
        pdf: 'magazines/articles/issue3-article2.pdf'
      },
      {
        id: 13,
        title: 'Case Studies: Successful Student Projects',
        category: 'Success Stories',
        author: 'Priya Singh',
        date: '2026-01-15',
        image: 'images/article13.jpg',
        description: 'Real stories of CODE 4 IMPACT members and their achievements.',
        pdf: 'magazines/articles/issue3-article3.pdf'
      }
    ]
  }
};

// ========== CAROUSEL VARIABLES ==========
let currentSlide = 0;
let autoSlideTimer;

// ========== CAROUSEL INITIALIZATION ==========
function initCarousel() {
  const slides = document.querySelectorAll('.carousel-slide');
  const totalSlides = slides.length;
  
  if (totalSlides === 0) return;

  // Initialize carousel dots
  const dotsContainer = document.getElementById('carousel-dots');
  if (dotsContainer) {
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement('div');
      dot.className = 'dot' + (i === 0 ? ' active' : '');
      dot.onclick = () => goToSlide(i);
      dotsContainer.appendChild(dot);
    }
  }

  startAutoSlide(totalSlides);
}

// ========== CAROUSEL FUNCTIONS ==========
function showSlide(n, totalSlides) {
  const slides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.dot');
  
  // Normalize the slide number
  n = n % totalSlides;
  
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));
  
  if (slides[n]) slides[n].classList.add('active');
  if (dots[n]) dots[n].classList.add('active');
}

function nextSlide() {
  const totalSlides = document.querySelectorAll('.carousel-slide').length;
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide, totalSlides);
  resetAutoSlide(totalSlides);
}

function prevSlide() {
  const totalSlides = document.querySelectorAll('.carousel-slide').length;
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide, totalSlides);
  resetAutoSlide(totalSlides);
}

function goToSlide(n) {
  const totalSlides = document.querySelectorAll('.carousel-slide').length;
  currentSlide = n;
  showSlide(currentSlide, totalSlides);
  resetAutoSlide(totalSlides);
}

function startAutoSlide(totalSlides) {
  autoSlideTimer = setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide, totalSlides);
  }, 5000);
}

function resetAutoSlide(totalSlides) {
  clearInterval(autoSlideTimer);
  startAutoSlide(totalSlides);
}

// ========== MAGAZINE SELECTION ==========
function selectMagazine(issueNumber) {
  const mag = magazineData[issueNumber];
  
  if (!mag) return;
  
  // Update magazine info
  const titleEl = document.getElementById('mag-detail-title');
  const coverEl = document.getElementById('mag-detail-cover');
  const descEl = document.getElementById('mag-detail-desc');
  const articlesTitleEl = document.getElementById('articles-mag-title');
  
  if (titleEl) titleEl.textContent = mag.title;
  if (coverEl) coverEl.src = mag.cover;
  if (descEl) descEl.textContent = mag.description;
  if (articlesTitleEl) articlesTitleEl.textContent = `Issue #${issueNumber}`;
  
  // Load articles
  loadArticles(issueNumber);
  
  // Smooth scroll to articles
  setTimeout(() => {
    const articlesSection = document.getElementById('articles');
    if (articlesSection) {
      articlesSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, 300);
}

// ========== LOAD ARTICLES ==========
function loadArticles(issueNumber) {
  const mag = magazineData[issueNumber];
  if (!mag || !mag.articles) return;
  
  const articlesGrid = document.getElementById('articles-grid');
  if (!articlesGrid) return;
  
  articlesGrid.innerHTML = '';

  mag.articles.forEach(article => {
    const articleCard = document.createElement('div');
    articleCard.className = 'article-card';
    articleCard.innerHTML = `
      <div class="article-image">
        <img src="${article.image}" alt="${article.title}" loading="lazy">
      </div>
      <div class="article-content">
        <span class="article-tag">${article.category}</span>
        <h3>${article.title}</h3>
        <p>${article.description}</p>
        <div class="article-meta">
          <span><i class="fas fa-user"></i> ${article.author}</span>
          <span><i class="fas fa-calendar"></i> ${new Date(article.date).toLocaleDateString()}</span>
        </div>
        <button class="article-read-btn" onclick="openPdfModal('${article.title.replace(/'/g, "\\'")}', '${article.author.replace(/'/g, "\\'")}', '${article.pdf}')">
          <i class="fas fa-file-pdf"></i> Read Article
        </button>
      </div>
    `;
    articlesGrid.appendChild(articleCard);
  });
}

// ========== PDF MODAL FUNCTIONS ==========
function openPdfModal(title, author, pdfLink) {
  const modal = document.getElementById('pdf-modal');
  const titleEl = document.getElementById('pdf-article-title');
  const authorEl = document.getElementById('pdf-article-author');
  const iframeEl = document.getElementById('pdf-iframe');
  const downloadBtn = document.getElementById('pdf-download-btn');
  
  if (titleEl) titleEl.textContent = title;
  if (authorEl) authorEl.textContent = `By ${author}`;
  if (iframeEl) iframeEl.src = pdfLink;
  if (downloadBtn) {
    downloadBtn.href = pdfLink;
    downloadBtn.download = title + '.pdf';
  }
  
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closePdfModal() {
  const modal = document.getElementById('pdf-modal');
  if (modal) {
    modal.classList.remove('active');
  }
  document.body.style.overflow = 'auto';
}

// ========== EVENT LISTENERS ==========
document.addEventListener('DOMContentLoaded', function() {
  // Close modal on outside click
  const modal = document.getElementById('pdf-modal');
  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === this) {
        closePdfModal();
      }
    });
  }

  // Close modal on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closePdfModal();
    }
  });

  // Initialize carousel and load first issue
  initCarousel();
  loadArticles(1);
});
