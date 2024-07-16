// JavaScript code can be added here for any interactive elements or form submission handling
// For example, handling form submission

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get values from form inputs
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    
    // Here you can add code to send the form data to a server using fetch or XMLHttpRequest
    // For demonstration purposes, let's just log the values to the console
    console.log("Name: " + name + ", Email: " + email + ", Message: " + message);
    
    // Optionally, you can display a confirmation message to the user
    alert("Message sent!");
    
    // Clear the form inputs
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
});
