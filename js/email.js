document.addEventListener("DOMContentLoaded", function () {
  fetch("config.json")
    .then((response) => response.json())
    .then((config) => {
      // Inicjalizacja EmailJS z kluczem z pliku konfiguracyjnego
      emailjs.init(config.user_id);

      // Obsługa formularza
      document
        .getElementById("footer-form")
        .addEventListener("submit", function (event) {
          event.preventDefault();

          const formData = {
            from_name: document.getElementById("name").value,
            from_email: document.getElementById("email").value,
            message: document.getElementById("message").value,
          };

          emailjs.send(config.service_id, config.template_id, formData).then(
            function (response) {
              alert("Wiadomość wysłana pomyślnie!");
              document.getElementById("footer-form").reset();
            },
            function (error) {
              alert("Nie udało się wysłać wiadomości.");
              console.log(error);
            }
          );
        });
    })
    .catch((error) => {
      console.error("Błąd w ładowaniu konfiguracji:", error);
    });
});
