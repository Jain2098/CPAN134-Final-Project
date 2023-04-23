const gif = document.querySelector('.funnygif');
let formdetails = false;

function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name == "" || email == "" || message == "") {
        alert("Please fill out all the mandatory fields.");
        return false;
    }
    else {
        formdetails = true;
        gif.src = './media/submitted.jpg';
        alert("Thanks for contacting us!\n\nYour message has been sent successfully.\nWe will get back to you as soon as possible.");
    }
}
