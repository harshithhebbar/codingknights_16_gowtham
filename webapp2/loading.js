document.addEventListener("DOMContentLoaded", function() {
    // Simulate loading delay (replace this with your actual loading logic)
    setTimeout(function() {
      // Hide loading page
      document.getElementById("loading-page").style.display = "none";
      
      // Show main content
      document.getElementById("main-content").style.display = "block";
    }, 2000); // Adjust the time as needed
  });