const loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get the email and password inputs from the form
  const emailInput = document.getElementById("email-input");
  const passwordInput = document.getElementById("password-input");
  const email = emailInput.value;
  const password = passwordInput.value;

  // Store the email and password in local storage
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);

  // Redirect to the dashboard or home page
  window.location.href = "homePage.html";
});
