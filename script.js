function toggleCaseStudy(id) {
    const fullDescription = document.getElementById(`case-study-${id}`);
    const button = document.querySelector(`#case-study-${id} + .read-more`);
    
    if (fullDescription.style.display === "block") {
        fullDescription.style.display = "none";
        button.textContent = "Read More";
    } else {
        fullDescription.style.display = "block";
        button.textContent = "Read Less";
    }
}
// JavaScript for form validation (optional)
document.getElementById("contact-form").addEventListener("submit", function(event) {
    // Prevent form submission if fields are empty
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        event.preventDefault(); // Stop form from submitting
    }
});
