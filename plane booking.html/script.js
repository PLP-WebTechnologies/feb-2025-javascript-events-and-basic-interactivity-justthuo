// Switch between tabs
function openTab(tabName) {
  let contents = document.querySelectorAll('.tab-content');
  contents.forEach(content => {
    content.style.display = 'none';
  });
  document.getElementById(tabName).style.display = 'block';
}

// Form Validation for Password (Real-time feedback)
document.getElementById("password").addEventListener("input", () => {
  let password = document.getElementById("password").value;
  let feedback = document.getElementById("passwordFeedback");

  if (password.length < 8) {
    feedback.textContent = "Password must be at least 8 characters long.";
  } else {
    feedback.textContent = "";
  }
});

// Handle booking form submission
document.getElementById("bookingForm").addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent actual form submission
  let name = document.getElementById("fullName").value;
  let email = document.getElementById("email").value;
  let date = document.getElementById("flightDate").value;

  if (!name || !email || !date) {
    alert("All fields are required!");
    return;
  }

  alert(`Thank you, ${name}! Your flight is booked for ${date}. A confirmation email will be sent to ${email}.`);
});

// Image Gallery Hover Effect
let galleryImages = document.querySelectorAll('.image-gallery img');
galleryImages.forEach(image => {
  image.addEventListener("mouseenter", () => {
    image.style.transform = "scale(1.1)";
    image.style.transition = "transform 0.3s ease";
  });
  image.addEventListener("mouseleave", () => {
    image.style.transform = "scale(1)";
  });
});
