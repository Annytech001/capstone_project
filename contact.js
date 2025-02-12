document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent actual form submission

    // Get input values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let message = document.getElementById("message").value.trim();

    // Basic validation
    if (name === "" || email === "" || subject === "" || message === "") {
        alert("Please fill out all fields.");
        return;
    }

    // Email format validation
    let emailPattern = /glorybassey@gmail.com/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    alert("Message sent successfully!");
    document.getElementById("contactForm").reset();
});
