$(document).ready(function () {
    $("#loginForm").submit((e) => {
        let email = $('#emailInput').val();
        let password = $('#passwordInput').val();

        if (!email) {
            alert("Email cannot be empty!")
        }
        else if (!password) {
            alert("Password field cannot be empty!")
        }
        else {
            let result = confirm(`Email entered is: ${email}`)

            if (result) {
                $('#emailInput').val("");
                $('#passwordInput').val("");
            } else {
                alert("I will not clear the form!")
            }
        }

    })
})