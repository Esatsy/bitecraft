// ============================================
// INITIALIZATION
// ============================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  initParticles();
  initAOS();
  initGSAP();
  initThemeToggle();
  initMobileMenu();
  initScrollToTop();
  initContactForm();
  initTiltEffects();
  setCurrentYear();
  initSmoothScroll();
  initLazyLoading();
  initProjectImages();
  initAdvancedFormValidation();
});

// ============================================
// PARTICLES.JS CONFIGURATION
// ============================================
function initParticles() {
  if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: ['#06b6d4', '#8b5cf6', '#f59e0b']
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#000000'
          }
        },
        opacity: {
          value: 0.5,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: true,
            speed: 2,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#06b6d4',
          opacity: 0.2,
          width: 1
        },
        move: {
          enable: true,
          speed: 1,
          direction: 'none',
          random: true,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'grab'
          },
          onclick: {
            enable: true,
            mode: 'push'
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: {
              opacity: 0.5
            }
          },
          push: {
            particles_nb: 4
          }
        }
      },
      retina_detect: true
    });
  }
}

// ============================================
// AOS (ANIMATE ON SCROLL) INITIALIZATION
// ============================================
function initAOS() {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: false, // Changed to false so animations can repeat
      offset: 50,
      delay: 0,
      disable: false,
      startEvent: 'DOMContentLoaded',
      initClassName: 'aos-init',
      animatedClassName: 'aos-animate'
    });
    
    // Force refresh after init
    setTimeout(() => {
      AOS.refresh();
    }, 100);
  } else {
    // Fallback: Show all AOS elements immediately if library not loaded
    console.warn('AOS library not loaded, showing all elements');
  }
}

// ============================================
// GSAP ANIMATIONS
// ============================================
function initGSAP() {
  if (typeof gsap !== 'undefined') {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Hero Title Animation
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroCta = document.querySelector('.hero-cta');

    if (heroTitle && heroSubtitle && heroCta) {
      const tl = gsap.timeline();
      
      tl.to(heroTitle, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out'
      })
      .to(heroSubtitle, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out'
      }, '-=0.5')
      .to(heroCta, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out'
      }, '-=0.4');
    }

    // Navbar scroll effect
    const nav = document.querySelector('.glass-nav');
    if (nav) {
      ScrollTrigger.create({
        start: 'top -80',
        end: 99999,
        toggleClass: {
          className: 'scrolled',
          targets: nav
        },
        onUpdate: (self) => {
          if (self.direction === -1) {
            gsap.to(nav, {
              y: 0,
              duration: 0.3,
              ease: 'power2.out'
            });
          } else if (self.progress > 0.1) {
            gsap.to(nav, {
              y: 0,
              duration: 0.3,
              ease: 'power2.out'
            });
          }
        }
      });
    }

    // Section animations
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out'
      });
    });

    // Skill cards stagger animation
    const skillCards = document.querySelectorAll('.skill-card');
    if (skillCards.length > 0) {
      gsap.from(skillCards, {
        scrollTrigger: {
          trigger: skillCards[0],
          start: 'top 80%'
        },
        opacity: 0,
        y: 50,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power3.out'
      });
    }

    // Project cards animation
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 85%'
        },
        opacity: 0,
        x: index % 2 === 0 ? -100 : 100,
        duration: 1,
        ease: 'power3.out'
      });
    });
  }
}

// ============================================
// THEME TOGGLE (DARK/LIGHT MODE)
// ============================================
function initThemeToggle() {
  const themeToggles = document.querySelectorAll('#themeToggle');
  const body = document.body;
  
  // Check for saved theme preference or default to dark
  const currentTheme = localStorage.getItem('theme') || 'dark';
  
  if (currentTheme === 'light') {
    body.classList.add('light-mode');
    themeToggles.forEach(toggle => {
      const icon = toggle.querySelector('.theme-icon');
      if (icon) icon.textContent = '☀️';
    });
  }
  
  // Toggle theme on button click
  themeToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      body.classList.toggle('light-mode');
      const isLight = body.classList.contains('light-mode');
      
      // Update icon
      themeToggles.forEach(btn => {
        const icon = btn.querySelector('.theme-icon');
        if (icon) icon.textContent = isLight ? '☀️' : '🌙';
      });
      
      // Save preference
      localStorage.setItem('theme', isLight ? 'light' : 'dark');
      
      // Update particles color in light mode
      if (typeof pJSDom !== 'undefined' && pJSDom.length > 0) {
        const particleColor = isLight ? '#0f172a' : '#06b6d4';
        pJSDom[0].pJS.particles.line_linked.color = particleColor;
      }
      
      // Add transition effect
      body.style.transition = 'background-color 0.5s ease, color 0.5s ease';
    });
  });
}

// ============================================
// MOBILE MENU
// ============================================
function initMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  
  if (mobileMenuBtn && mobileMenu) {
    // Toggle menu
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenuBtn.classList.toggle('active');
      mobileMenu.classList.toggle('active');
    });
    
    // Close menu when clicking a link
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        mobileMenu.classList.remove('active');
      });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenuBtn.classList.remove('active');
        mobileMenu.classList.remove('active');
      }
    });
  }
}

// ============================================
// SCROLL TO TOP BUTTON
// ============================================
function initScrollToTop() {
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  
  if (scrollTopBtn) {
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    });
    
    // Scroll to top on click
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}

// ============================================
// CONTACT FORM
// ============================================
function initContactForm() {
  const form = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');
  
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const submitBtn = form.querySelector('button[type="submit"]');
      const btnText = submitBtn.querySelector('.btn-text');
      const btnLoader = submitBtn.querySelector('.btn-loader');
      
      // Show loading state
      btnText.classList.add('hidden');
      btnLoader.classList.remove('hidden');
      submitBtn.disabled = true;
      
      try {
        const formData = new FormData(form);
        const response = await fetch(form.action, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });
        
        if (response.ok) {
          // Success
          formMessage.textContent = '✓ Message sent successfully! I\'ll get back to you soon.';
          formMessage.classList.remove('hidden', 'error');
          formMessage.classList.add('success');
          form.reset();
          
          // Hide success message after 5 seconds
          setTimeout(() => {
            formMessage.classList.add('hidden');
          }, 5000);
        } else {
          throw new Error('Form submission failed');
        }
      } catch (error) {
        // Error
        formMessage.textContent = '✗ Oops! Something went wrong. Please try again.';
        formMessage.classList.remove('hidden', 'success');
        formMessage.classList.add('error');
      } finally {
        // Reset button state
        btnText.classList.remove('hidden');
        btnLoader.classList.add('hidden');
        submitBtn.disabled = false;
      }
    });
    
    // Add focus/blur animations to form inputs
    const formInputs = form.querySelectorAll('.form-input');
    formInputs.forEach(input => {
      input.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
        
        if (typeof gsap !== 'undefined') {
          gsap.to(this, {
            scale: 1.02,
            duration: 0.3,
            ease: 'power2.out'
          });
        }
      });
      
      input.addEventListener('blur', function() {
        this.parentElement.classList.remove('focused');
        
        if (typeof gsap !== 'undefined') {
          gsap.to(this, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
          });
        }
      });
    });
  }
}

// ============================================
// 3D TILT EFFECTS
// ============================================
function initTiltEffects() {
  if (typeof VanillaTilt !== 'undefined') {
    // Apply tilt to project cards
    const projectCards = document.querySelectorAll('.project-card');
    VanillaTilt.init(projectCards, {
      max: 5,
      speed: 400,
      glare: true,
      'max-glare': 0.2,
      scale: 1.02
    });
    
    // Apply tilt to skill cards
    const skillCards = document.querySelectorAll('.skill-card');
    VanillaTilt.init(skillCards, {
      max: 15,
      speed: 400,
      glare: true,
      'max-glare': 0.3,
      scale: 1.05
    });
    
    // Apply tilt to glass cards
    const glassCards = document.querySelectorAll('.glass-card');
    VanillaTilt.init(glassCards, {
      max: 3,
      speed: 400,
      glare: true,
      'max-glare': 0.1,
      scale: 1.01
    });
  }
}

// ============================================
// SMOOTH SCROLL FOR NAVIGATION LINKS
// ============================================
function initSmoothScroll() {
  const navLinks = document.querySelectorAll('a[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      
      // Skip if it's just "#"
      if (href === '#') {
        e.preventDefault();
        return;
      }
      
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        e.preventDefault();
        
        const navHeight = document.querySelector('.glass-nav').offsetHeight;
        const targetPosition = targetElement.offsetTop - navHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// ============================================
// SET CURRENT YEAR IN FOOTER
// ============================================
function setCurrentYear() {
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}

// ============================================
// PARALLAX EFFECT FOR HERO SECTION
// ============================================
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const heroContent = document.querySelector('.hero-content');
  
  if (heroContent && scrolled < window.innerHeight) {
    heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
    heroContent.style.opacity = 1 - (scrolled / (window.innerHeight * 0.8));
  }
});

// ============================================
// NAVIGATION ACTIVE STATE
// ============================================
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
  
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (window.pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// ============================================
// LAZY LOADING FOR PROJECT IMAGES
// ============================================
function initLazyLoading() {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          loadProjectImage(img);
          observer.unobserve(img);
        }
      });
    }, {
      rootMargin: '50px'
    });
    
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => imageObserver.observe(img));
  } else {
    // Fallback for browsers that don't support IntersectionObserver
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => loadProjectImage(img));
  }
}

// ============================================
// PROJECT IMAGE LOADING WITH FALLBACK
// ============================================
function loadProjectImage(img) {
  const src = img.dataset.src;
  const fallback = img.dataset.fallback;
  
  // Show loading spinner
  const wrapper = img.closest('.project-image-wrapper');
  if (wrapper && !wrapper.querySelector('.loading-spinner')) {
    const spinner = document.createElement('div');
    spinner.className = 'loading-spinner';
    spinner.innerHTML = '<div class="spinner"></div>';
    wrapper.appendChild(spinner);
  }
  
  // Try to load the screenshot API image first
  const tempImg = new Image();
  
  tempImg.onload = function() {
    img.src = src;
    img.classList.add('loaded');
    removeSpinner(wrapper);
  };
  
  tempImg.onerror = function() {
    // If screenshot API fails, try fallback
    if (fallback) {
      const fallbackImg = new Image();
      
      fallbackImg.onload = function() {
        img.src = fallback;
        img.classList.add('loaded');
        removeSpinner(wrapper);
      };
      
      fallbackImg.onerror = function() {
        // If fallback also fails, show placeholder
        removeSpinner(wrapper);
        showImagePlaceholder(wrapper);
      };
      
      fallbackImg.src = fallback;
    } else {
      removeSpinner(wrapper);
      showImagePlaceholder(wrapper);
    }
  };
  
  tempImg.src = src;
}

function removeSpinner(wrapper) {
  if (wrapper) {
    const spinner = wrapper.querySelector('.loading-spinner');
    if (spinner) {
      spinner.remove();
    }
  }
}

function showImagePlaceholder(wrapper) {
  if (!wrapper || wrapper.querySelector('.project-image-placeholder')) return;
  
  const img = wrapper.querySelector('img');
  if (img) {
    img.style.display = 'none';
  }
  
  // Placeholder is already in HTML, just make it visible
  const overlay = wrapper.querySelector('.project-image-overlay');
  if (overlay) {
    overlay.style.opacity = '0.5';
  }
}

// ============================================
// INITIALIZE PROJECT IMAGES (Free Screenshot Service)
// ============================================
function initProjectImages() {
  // Update screenshot URLs to use free screenshot service
  const projectImages = document.querySelectorAll('.project-image[data-src]');
  
  projectImages.forEach(img => {
    const url = img.dataset.src;
    // Replace with free screenshot service (screenshotone.com has a free tier)
    if (url.includes('YOUR_KEY')) {
      // Extract the actual URL from the data-src
      const urlMatch = url.match(/url=([^&]+)/);
      if (urlMatch) {
        const targetUrl = decodeURIComponent(urlMatch[1]);
        // Use a free service like screenshotone or keep as fallback only
        img.dataset.src = img.dataset.fallback; // Use fallback directly for now
      }
    }
  });
}

// ============================================
// ADVANCED FORM VALIDATION
// ============================================
function initAdvancedFormValidation() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  
  const inputs = form.querySelectorAll('.form-input');
  
  inputs.forEach(input => {
    // Real-time validation on blur
    input.addEventListener('blur', function() {
      validateField(this);
    });
    
    // Clear error on input
    input.addEventListener('input', function() {
      if (this.classList.contains('error')) {
        this.classList.remove('error');
        const errorMsg = this.parentElement.querySelector('.form-error-message');
        if (errorMsg) errorMsg.remove();
      }
    });
  });
  
  // Validate on submit
  form.addEventListener('submit', function(e) {
    let isValid = true;
    
    inputs.forEach(input => {
      if (!validateField(input)) {
        isValid = false;
      }
    });
    
    if (!isValid) {
      e.preventDefault();
      e.stopPropagation();
    }
  });
}

function validateField(field) {
  const value = field.value.trim();
  const type = field.type;
  const name = field.name;
  let isValid = true;
  let errorMessage = '';
  
  // Remove existing error
  field.classList.remove('error');
  const existingError = field.parentElement.querySelector('.form-error-message');
  if (existingError) existingError.remove();
  
  // Required check
  if (field.hasAttribute('required') && !value) {
    isValid = false;
    errorMessage = `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
  }
  
  // Email validation
  if (type === 'email' && value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      isValid = false;
      errorMessage = 'Please enter a valid email address';
    }
  }
  
  // Message length validation
  if (name === 'message' && value && value.length < 10) {
    isValid = false;
    errorMessage = 'Message must be at least 10 characters long';
  }
  
  // Name validation
  if (name === 'name' && value && value.length < 2) {
    isValid = false;
    errorMessage = 'Name must be at least 2 characters long';
  }
  
  if (!isValid) {
    field.classList.add('error');
    field.parentElement.classList.add('error');
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'form-error-message';
    errorDiv.textContent = errorMessage;
    field.parentElement.appendChild(errorDiv);
    
    // Scroll to first error
    if (document.querySelector('.form-input.error') === field) {
      field.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  } else {
    field.parentElement.classList.remove('error');
  }
  
  return isValid;
}

// ============================================
// EASTER EGG: KONAMI CODE
// ============================================
(function() {
  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  let konamiIndex = 0;
  
  document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
      konamiIndex++;
      if (konamiIndex === konamiCode.length) {
        activateEasterEgg();
        konamiIndex = 0;
      }
    } else {
      konamiIndex = 0;
    }
  });
  
  function activateEasterEgg() {
    // Fun animation when konami code is entered
    if (typeof gsap !== 'undefined') {
      const logo = document.querySelector('.logo');
      if (logo) {
        gsap.to(logo, {
          rotation: 360,
          scale: 1.5,
          duration: 1,
          ease: 'elastic.out(1, 0.5)',
          onComplete: () => {
            gsap.to(logo, {
              scale: 1,
              duration: 0.5
            });
          }
        });
      }
    }
    
    // Change particle colors temporarily
    if (typeof pJSDom !== 'undefined' && pJSDom.length > 0) {
      const originalColor = pJSDom[0].pJS.particles.color.value;
      pJSDom[0].pJS.particles.color.value = ['#ff0000', '#00ff00', '#0000ff'];
      
      setTimeout(() => {
        pJSDom[0].pJS.particles.color.value = originalColor;
      }, 3000);
    }
    
    console.log('🎉 You found the easter egg! Welcome, fellow developer!');
  }
})();

// ============================================
// CONSOLE MESSAGE
// ============================================
console.log('%c👋 Hello Developer!', 'color: #06b6d4; font-size: 24px; font-weight: bold;');
console.log('%cLike what you see? Let\'s work together!', 'color: #8b5cf6; font-size: 16px;');
console.log('%cContact: www.bitecraft.dev', 'color: #f59e0b; font-size: 14px;');
