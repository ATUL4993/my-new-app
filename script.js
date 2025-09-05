// Search functionality
const searchInput = document.getElementById("searchInput");

function performSearch() {
  const query = searchInput.value.trim();
  if (query) {
    // Simulate Google search - in reality this would redirect to Google
    window.open(
      `https://www.google.com/search?q=${encodeURIComponent(query)}`,
      "_blank"
    );
  } else {
    searchInput.focus();
  }
}

function feelingLucky() {
  const query = searchInput.value.trim();
  if (query) {
    // Simulate "I'm Feeling Lucky" - opens first result
    window.open(
      `https://www.google.com/search?q=${encodeURIComponent(query)}&btnI=1`,
      "_blank"
    );
  } else {
    // Random search suggestions for demo
    const suggestions = [
      "cute cats",
      "latest technology",
      "beautiful landscapes",
      "interesting facts",
      "funny memes",
    ];
    const randomSuggestion =
      suggestions[Math.floor(Math.random() * suggestions.length)];
    searchInput.value = randomSuggestion;
    window.open(
      `https://www.google.com/search?q=${encodeURIComponent(
        randomSuggestion
      )}&btnI=1`,
      "_blank"
    );
  }
}

// Enter key functionality
searchInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    performSearch();
  }
});

// Voice search simulation
document.querySelector(".voice-icon").addEventListener("click", function () {
  alert(
    "Voice search would be activated here (requires microphone permissions in a real implementation)"
  );
});

// Camera search simulation
document.querySelector(".camera-icon").addEventListener("click", function () {
  alert("Visual search would be activated here (Google Lens functionality)");
});

// Apps button simulation
document.querySelector(".apps-btn").addEventListener("click", function () {
  alert("Google apps menu would appear here");
});

// Profile button simulation
document.querySelector(".profile-btn").addEventListener("click", function () {
  alert("Google account menu would appear here");
});

// Auto-focus search box when page loads
window.addEventListener("load", function () {
  searchInput.focus();
});

// Search suggestions simulation (basic)
searchInput.addEventListener("input", function () {
  // In a real implementation, this would show search suggestions
  // For demo purposes, we'll just show it's working
  console.log("Search suggestions would appear for:", this.value);
});
