document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contact-form");

  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const contactData = new FormData(contactForm);

    const name = contactData.get("name");
    const email = contactData.get("email");
    const message = contactData.get("message");
    const date = new Date();
    const readableDate = date.toLocaleString("en-us", {
      timeZone: "UTC",
    });
    const data = {
      name: name,
      email: email,
      message: message,
      created: readableDate,
    };

    await fetch("https://formspree.io/f/mrgrggko", {
      method: "POST",
      headers: { "Accept": "application/json" },
      body: JSON.stringify(data),
    });

    window.location = "https://dunnjm814.github.io/";
  });
});
