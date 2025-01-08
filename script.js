// JavaScript to handle the form submission (this is a simple version)
// In a real project, you'd want to use an API to send emails, etc.

document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    
    alert("Thank you for your message! I will get back to you soon.");
    document.getElementById("contact-form").reset();
});
