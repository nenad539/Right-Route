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