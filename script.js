document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".contact-left");
    const nameInput = form.querySelector('input[name="name"]');
    const emailInput = form.querySelector('input[name="email"]');
    const messageInput = form.querySelector('textarea[name="message"]');
  
    function validateName() {
      const name = nameInput.value.trim();
      // Allow only letters and spaces
      const regex = /^[a-zA-Z\s]+$/;
      if (name === "" || !regex.test(name)) {
        nameInput.classList.remove("valid");
        nameInput.classList.add("error");
        nameInput.setAttribute("data-error", "Please enter a valid name (letters and spaces only).");
        return false;
      } else {
        nameInput.classList.remove("error");
        nameInput.classList.add("valid");
        nameInput.removeAttribute("data-error");
        return true;
      }
    }
  
    function validateEmail() {
      const email = emailInput.value.trim();
      // Simple email pattern validation
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (email === "" || !regex.test(email)) {
        emailInput.classList.remove("valid");
        emailInput.classList.add("error");
        emailInput.setAttribute("data-error", "Please enter a valid email address.");
        return false;
      } else {
        emailInput.classList.remove("error");
        emailInput.classList.add("valid");
        emailInput.removeAttribute("data-error");
        return true;
      }
    }
  
    function validateMessage() {
      const message = messageInput.value.trim();
      if (message === "") {
        messageInput.classList.remove("valid");
        messageInput.classList.add("error");
        messageInput.setAttribute("data-error", "Please enter your message.");
        return false;
      } else {
        messageInput.classList.remove("error");
        messageInput.classList.add("valid");
        messageInput.removeAttribute("data-error");
        return true;
      }
    }
  
    // Real-time validation as user types
    nameInput.addEventListener("input", validateName);
    emailInput.addEventListener("input", validateEmail);
    messageInput.addEventListener("input", validateMessage);
  
    form.addEventListener("submit", function(e) {
      e.preventDefault(); // Prevent submission until validated
      const validName = validateName();
      const validEmail = validateEmail();
      const validMessage = validateMessage();
  
      if (validName && validEmail && validMessage) {
        alert("Form submitted successfully!");
        // To actually submit the form, uncomment the next line:
        // form.submit();
      } else {
        // Focus on the first invalid field
        if (!validName) {
          nameInput.focus();
        } else if (!validEmail) {
          emailInput.focus();
        } else if (!validMessage) {
          messageInput.focus();
        }
      }
    });
  });
  