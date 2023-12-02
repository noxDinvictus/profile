function validateLogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("error-message");

  // Simple validation
  if (username === "user" && password === "pass") {
    errorMessage.style.color = "green";
    errorMessage.textContent = "Login successful!";

    // Redirect to the About Me page after a short delay (for demonstration purposes)
    setTimeout(function () {
      window.location.href = "/about-me.html";
    }, 2000);
  } else {
    errorMessage.style.color = "red";
    errorMessage.textContent =
      "Invalid username or password. Please try again.";
  }
}

function primaryLoad() {
  const navigation = document.querySelector(".header-nav-wrapper");

  const navigationHeight = navigation.offsetHeight;

  document.documentElement.style.setProperty(
    "--scroll-padding",
    navigationHeight + "px"
  );

  // Update progress bar width based on scroll position
  document.addEventListener("scroll", function () {
    let scrollPosition = window.scrollY;
    let windowHeight = window.innerHeight;
    let documentHeight = document.documentElement.scrollHeight;

    let progress = (scrollPosition / (documentHeight - windowHeight)) * 100;
    document.getElementById("topProgressBar").style.width = progress + "%";

    const headerNav = document.querySelector(".header-nav");

    if (scrollPosition === 0) {
      headerNav.style.backgroundColor = "unset";
      headerNav.style.opacity = "1";
    } else {
      headerNav.style.backgroundColor = "black";
      headerNav.style.opacity = "0.6";
    }
  });
}

function calculateAge() {
  // Calculate age
  let today = new Date();
  let birthDate = new Date("24 June 1996");
  let age = today.getFullYear() - birthDate.getFullYear();

  // Adjust age if birthday hasn't occurred yet this year
  if (
    today.getMonth() < birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  let spanElement = document.getElementById("age");

  spanElement.textContent = Math.abs(age);
}

document.addEventListener("DOMContentLoaded", function () {
  calculateAge();
});
