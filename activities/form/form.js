        document.querySelector("form").addEventListener("submit", function(event) {
            event.preventDefault();

            const fullname = document.getElementById("fname").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            const state = document.getElementById("state").value;
            const age = document.getElementById("age").value;
            const gender = document.querySelector('input[name="gender"]:checked')?.value;

            if (!fullname || !email) {
                alert("you need a name and email");
                return;
            }

            if (!age || age < 18) {
                alert("you need to be 18 or older");
                return;
            }

            const formdata = {
                name: fullname,
                email: email,
                password: password,
                state: state,
                gender: gender,
                age: age
            };
            const xhr = new XMLHttpRequest();
            xhr.open("POST", "submit.json", true);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    const response = JSON.parse(xhr.responseText);
                    document.getElementById("message").innerHTML = response.message;
                } else if (xhr.readyState === 4) {
                    alert('Error submitting form.');
                }
            };

            xhr.send(JSON.stringify(formdata));
            console.log(formdata);
        });