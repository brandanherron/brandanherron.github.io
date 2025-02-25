/* 2025.js */

// Wait until the DOM is fully loaded before executing scripts
document.addEventListener('DOMContentLoaded', function() {
    
    // Set the header title if it is not already set
    const titleElement = document.getElementById('text');
    if (titleElement && titleElement.textContent.trim() === "") {
        titleElement.textContent = "Brandan Herron"; // Update text content with the default title
    }
    
    // Select all navigation links within the element with id 'navigation'
    const navLinks = document.querySelectorAll('#navigation a');
    
    // Add smooth scrolling behavior for internal navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Check if the link contains a hash for internal navigation
            if (this.hash !== "") {
                e.preventDefault(); // Prevent the default jump-to behavior
                const target = document.querySelector(this.hash); // Find the target element based on the hash
                if (target) {
                    // Smoothly scroll to the target element's top position
                    window.scrollTo({
                        top: target.offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
  });
  