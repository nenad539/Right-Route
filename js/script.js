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