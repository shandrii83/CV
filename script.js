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




// Local storage handling




const boton = document.querySelector("#submit");
const datos = document.querySelector("#datos");

const iniciar = () => {
    boton.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent form submission to keep data in localStorage
        let name = document.getElementById('name').value;
        let mail = document.getElementById('mail').value;
        let subject = document.getElementById('subject').value;

        localStorage.setItem('name', name);
        localStorage.setItem('mail', mail);
        localStorage.setItem('subject', subject);

        mostrar();
    });

    // Load stored data on page load
    mostrar();
};

const mostrar = () => {
    datos.innerHTML = '';

    let name = localStorage.getItem('name');
    let mail = localStorage.getItem('mail');
    let subject = localStorage.getItem('subject');

    if (name || mail || subject) {
        datos.innerHTML += `<div>Name: ${name}</div>`;
        datos.innerHTML += `<div>Email: ${mail}</div>`;
        datos.innerHTML += `<div>Subject: ${subject}</div>`;

        datos.innerHTML += `<div>
                <input type="button" onclick="eliminarTodo();" value="Delete information from LocalStorage">
            </div>`;
    }
};

const eliminarTodo = () => {
    localStorage.clear();
    mostrar();
};

window.onload = iniciar;






