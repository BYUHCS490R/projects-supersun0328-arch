document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const fullname = document.getElementById("fname").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const state = document.getElementById("state").value;
    const age = document.getElementById("age").value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value || "";
    const agree = document.querySelector('input[name="agree"]').checked;

    if (!fullname || !email || !state) {
        alert("Please enter your name, email, and state.");
        return;
    }

    if (!age || age < 18) {
        alert("You need to be 18 or older.");
        return;
    }

    if (!gender) {
        alert("Please choose a gender.");
        return;
    }

    if (!agree) {
        alert("Please check the agreement box.");
        return;
    }

    const formdata = {
        name: fullname,
        email: email,
        password: password,
        state: state,
        age: age,
        gender: gender,
        agree: agree
    };

    console.log(formdata);

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "submit.json", true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            document.getElementById("message").innerHTML = response.message;
            document.getElementById("myForm").reset();
        } else if (xhr.readyState === 4) {
            alert("Error submitting form.");
        }
    };

    xhr.send();
});