// Select all the skill bars' spans
const spans = document.querySelectorAll('.skillbar span');

// Loop through each span and set its width and display percentage
spans.forEach((span) => {
    // Set the width of the span to the value of the 'data-width' attribute
    const width = span.dataset.width;
    span.style.width = width;

    // Optionally, you can add the percentage text inside the span
    span.textContent = width; // Use textContent to add the percentage text
});

let slideIndex = 1;
showSlides(slideIndex);

// Auto slide every 5 seconds
setInterval(function() {
  plusSlides(1); // Move to the next slide every 5 seconds
}, 5000);

// Function to go to the next or previous slide
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Function to display the slide
function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  // Loop through slides to ensure it stays within bounds
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }

  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  // Remove the 'active' class from all dots
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Display the current slide
  slides[slideIndex - 1].style.display = "block";  

  // Activate the current dot
  dots[slideIndex - 1].className += " active";
}
// Resume section
// Function to open the modal
function openModal(modalNumber) {
  const modal = document.getElementById(`educationModal${modalNumber}`);
  modal.style.display = "block"; // Show the modal
}

// Function to close the modal
function closeModal(modalNumber) {
  const modal = document.getElementById(`educationModal${modalNumber}`);
  modal.style.display = "none"; // Hide the modal
}

// Close modal if the user clicks outside of it
window.onclick = function(event) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
}
document.addEventListener('DOMContentLoaded', function () {
  
  // 1. Portfolio Filter Functionality
  const filterButtons = document.querySelectorAll('.btn[data-category]');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  filterButtons.forEach(button => {
      button.addEventListener('click', function () {
          const category = this.getAttribute('data-category');
          
          // Loop through all portfolio items
          portfolioItems.forEach(item => {
              const itemCategory = item.getAttribute('data-category');
              
              // Check if item matches the selected category
              if (category === 'all' || itemCategory === category) {
                  item.style.display = '';  // Show item
              } else {
                  item.style.display = 'none';  // Hide item
              }
          });

          // Add an active class to highlight the clicked filter button
          filterButtons.forEach(btn => btn.classList.remove('active'));
          this.classList.add('active');
      });
  }); 
});

// 2. Modal Display for Project Details
  // Function to open the modal
function openModal(modalNumber) {
    const modal = document.getElementById(`portfolioModal${modalNumber}`);
    modal.style.display = "block"; // Show the modal
  }
  
  // Function to close the modal
function closeModal(modalNumber) {
    const modal = document.getElementById(`portfolioModal${modalNumber}`);
    modal.style.display = "none"; // Hide the modal
  }
  
  // Close modal if the user clicks outside of it
  window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });


document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form from submitting normally

  // Display success message
  document.getElementById('successMessage').style.display = 'block';

  // Optionally, you can reset the form after submission
  setTimeout(function() {
      document.getElementById('contactForm').reset();
      document.getElementById('successMessage').style.display = 'none';
  }, 3000); // Success message disappears after 3 seconds
});
  }
