let heading = document.getElementById("mainHeading");

heading.innerHTML = "Sai Srujan Reddy - Cyber Security Student";

let button = document.getElementById("changeTextBtn");

button.addEventListener("click", function(){

    heading.innerHTML = "Welcome to My Portfolio Website";

});

let submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", function(){

    let email = document.getElementById("email").value;

    let message = document.getElementById("message").value;

    let result = document.getElementById("result");

    if(!email.includes("@")){

        result.innerHTML = "Please enter a valid email address";

    }

    else if(message.length < 10){

        result.innerHTML = "Message must be at least 10 characters";

    }

    else{

        result.innerHTML = "Message sent successfully!";

    }

});
let darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", function(){

    document.body.classList.toggle("dark-mode");

    localStorage.setItem(
        "darkMode",
        document.body.classList.contains("dark-mode")
    );

});
if(localStorage.getItem("darkMode") === "true"){

    document.body.classList.add("dark-mode");

}