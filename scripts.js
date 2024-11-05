// Search for books
function searchBooks() {
  const searchTerm = document.getElementById("searchTerm").value;
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = `<p>Searching for "${searchTerm}"...</p>`;
  setTimeout(() => {
    resultsDiv.innerHTML = `<p>Results for "${searchTerm}": Book 1, Book 2</p>`;
  }, 1000);
}

// Login function
function loginUser() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;
  
  if (email === "test@example.com" && password === "password") {
    alert("Login successful!");
    window.location.href = "#home";
  } else {
    alert("Invalid login credentials.");
  }
}

// Register function
function registerUser() {
  const name = document.getElementById("registerName").value;
  const email = document.getElementById("registerEmail").value;
  const password = document.getElementById("registerPassword").value;
  alert(`Registered successfully! Name: ${name}, Email: ${email}`);
}

// Display cart items
function displayCartItems() {
  const cartItemsDiv = document.getElementById("cartItems");
  cartItemsDiv.innerHTML = "<p>Your cart is currently empty.</p>";
}

// Checkout function
function checkout() {
  alert("Proceeding to checkout!");
}

// Display order history
function displayOrderHistory() {
  const orderHistoryDiv = document.getElementById("orderHistory");
  orderHistoryDiv.innerHTML = "<p>No orders found.</p>";
}

// Generate reports
function generateReport() {
  const reportOutput = document.getElementById("reportOutput");
  reportOutput.innerHTML = "<p>Generating report...</p>";
  setTimeout(() => {
    reportOutput.innerHTML = "<p>Best-selling books: Book A, Book B</p>";
  }, 1000);
}

// Edit Profile function
function editProfile() {
  const newName = prompt("Enter your new name:", "John Doe");
  if (newName) {
    document.getElementById("profileName").textContent = newName;
  }
}

// Initialize display functions
document.addEventListener("DOMContentLoaded", function() {
  displayCartItems();
  displayOrderHistory();
});
