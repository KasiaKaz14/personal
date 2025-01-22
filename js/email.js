document.addEventListener("DOMContentLoaded", function () {
  fetch("config.json")
    .then((response) => response.json())
    .then((config) => {
      emailjs.init(config.user_id);

      document
        .getElementById("footer-form")
        .addEventListener("submit", function (event) {
          event.preventDefault();

          const name = document.getElementById("name").value.trim();
          const email = document.getElementById("email").value.trim();
          const message = document.getElementById("message").value.trim();

          if (!name || !email || !message) {
            alert("Please fill in all fields.");
            return;
          }

          if (!/\S+@\S+\.\S+/.test(email)) {
            alert("Please enter a valid email address.");
            return;
          }

          const formData = { from_name: name, from_email: email, message };

          emailjs.send(config.service_id, config.template_id, formData).then(
            function () {
              alert("Message sent successfully!");
              document.getElementById("footer-form").reset();
            },
            function (error) {
              alert("Failed to send message. Please try again.");
              console.error(error);
            }
          );
        });
    })
    .catch((error) => {
      console.error("Error loading configuration:", error);
    });
});
