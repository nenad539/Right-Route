// Mobile Nav
function openNav() {
  document.getElementById("mySidepanel").style.width = "270px";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

// Scroll-to-Top Button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  const myBtn = document.getElementById("myBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myBtn.style.display = "block";
  } else {
    myBtn.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Back to top button functionality
  const myButton = document.getElementById('myBtn');
  
  window.onscroll = function() {
    scrollFunction();
  };
  
  function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      myButton.style.display = "block";
    } else {
      myButton.style.display = "none";
    }
  }
  
  // Mobile navigation
  window.openNav = function() {
    document.getElementById("mySidepanel").style.width = "250px";
  }
  
  window.closeNav = function() {
    document.getElementById("mySidepanel").style.width = "0";
  }
  
  // Scroll to top function
  window.topFunction = function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    
    // Add a smooth animation
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  // Add smooth scrolling to all links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const target = document.querySelector(this.getAttribute('href'));
      
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
        
        // Close the mobile menu if it's open
        closeNav();
      }
    });
  });
});


// Animate buttons on hover
const buttons = document.querySelectorAll('.btn, .service-btn');
buttons.forEach(button => {
  button.addEventListener('mouseenter', () => {
      button.style.transform = 'translateY(-3px)';
      button.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
  });
  button.addEventListener('mouseleave', () => {
      button.style.transform = 'translateY(0)';
      button.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
  });
});
// Optional: Add floating particles on hover
document.querySelector('.hero-button').addEventListener('mouseenter', function(e) {
  const button = e.target;
  const particles = 15;
  
  for (let i = 0; i < particles; i++) {
    const particle = document.createElement('span');
    particle.classList.add('particle');
    
    // Random properties
    const size = Math.random() * 10 + 5;
    const posX = Math.random() * button.offsetWidth;
    const posY = Math.random() * button.offsetHeight;
    const duration = Math.random() * 3 + 2;
    
    // Apply styles
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${posX}px`;
    particle.style.top = `${posY}px`;
    particle.style.animation = `float-up ${duration}s ease-out forwards`;
    
    button.appendChild(particle);
    
    // Remove particle after animation
    setTimeout(() => {
      particle.remove();
    }, duration * 1000);
  }
});

// Add CSS for particles
const style = document.createElement('style');
style.textContent = `
  @keyframes float-up {
    0% { transform: translate(0, 0) scale(1); opacity: 1; }
    100% { transform: translate(${Math.random() > 0.5 ? '-' : ''}${Math.random() * 30 + 10}px, -${Math.random() * 50 + 30}px) scale(0); opacity: 0; }
  }
`;
document.head.appendChild(style);
// Intersection Observer for scroll animations
document.addEventListener('DOMContentLoaded', function() {
  const vehicles = document.querySelectorAll('.vehicle-card');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
      }
    });
  }, { threshold: 0.1 });
  
  vehicles.forEach(vehicle => {
    observer.observe(vehicle);
  });
});
document.addEventListener('DOMContentLoaded', function() {
  const loadingScreen = document.querySelector('.loading-screen');
  const startTime = Date.now();
  const minDisplayTime = 2000; // 2 seconds minimum

  function hideLoader() {
    const elapsed = Date.now() - startTime;
    const remainingTime = Math.max(0, minDisplayTime - elapsed);
    
    setTimeout(() => {
      document.body.classList.add('loaded');
      setTimeout(() => loadingScreen.remove(), 500);
    }, remainingTime);
  }

  if (document.readyState === 'complete') {
    hideLoader();
  } else {
    window.addEventListener('load', hideLoader);
    setTimeout(hideLoader, minDisplayTime + 1000); // Fallback
  }
});