const form = document.getElementById("commissionForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const clientName = document.getElementById("clientName").value.trim();
    const email = document.getElementById("email").value.trim();
    const commissionType = document.getElementById("commissionType").value;
    const budget = document.getElementById("budget").value.trim();
    const details = document.getElementById("details").value.trim();

    if (clientName === "" || email === "" || commissionType === "" || details === "") {
        alert("Please fill in all required fields: Name, Email, Commission Type, and Project Details.");
        return;
    }

    if (details.length < 10) {
        alert("Project details must be at least 10 characters long.");
        return;
    }

    if (budget !== "" && Number(budget) <= 0) {
        alert("Budget must be a positive number.");
        return;
    }

    const formData = {
        clientName: clientName,
        email: email,
        commissionType: commissionType,
        budget: budget,
        details: details
    };

    console.log(formData);

    fetch("response.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            message.innerHTML = "<p>" + data.message + "</p>";
            form.reset();
        })
        .catch(function () {
            message.innerHTML = "<p>Sorry, there was a problem submitting your request.</p>";
        });
});