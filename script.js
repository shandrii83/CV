function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('mail').value;
    var subject = document.getElementById('subject').value;

    if (name === "" || email === "" || subject === "") {
        alert("Please fill in all fields");
        return false;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }



    // Use Email.js to send the email
    var templateParams = {
        from_name: name,
        to_email: 'sharmarandrey@gmail.com',
        subject: 'New Form Submission',
        message: `Name: ${name}\nEmail: ${email}\nMessage: ${subject}`,
    };

    emailjs.send('service_scynkmo', 'template_ox7pyvb', templateParams)
        .then(function (response) {
            alert("Email sent successfully!");
        }, function (error) {
            console.error("Failed to send email. Error:", error);
            alert("Failed to send email. Error: " + error.text);
        });

    return false; // Prevent the form from submitting
}