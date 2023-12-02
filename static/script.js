document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Send data to the server (backend) for authentication
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        })
        .then((response) => response.json())
        .then((data) => {
            if (data.success) {
                alert("Login successful!");
                // Redirect to a dashboard or another page
            } else {
                alert("Login failed. Please check your credentials.");
            }
        })
        .catch((error) => {
            console.error("Error:", error);
        });
    });
});
