const form = document.getElementById("form-control");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkform();
});

function checkform() {
    const usercheck = username.value.trim();
    const emailcheck = email.value.trim();
    const passwordcheck = password.value.trim();
    const password2check = password2.value.trim();
    //username
    if (usercheck === '') {
        setError(username, "Username cannot be blank");
    } else {
        setSuccess(username);
    }
    //password
    if(passwordcheck === '' ){
        setError(password, "password cannot be blank");
    }else{
            setSuccess(password)
    }
    if(password2check === '' ){
        setError(password2, "password cannot be blank");
    }else if(passwordcheck !== password2check){
        setError(password2, "password2 does not match");
    }else{
            setSuccess(password2)
    }
    //email
     if (emailcheck === '') {
        setError(email, "email cannot be blank");
    }else if(!isemail(emailcheck)){
        setError(email, "email is not valid");
    } else {
        setSuccess(email);
    }
}

function setError(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    small.innerText = message;
    formControl.className = "container error";
}

function setSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "container success";
}
function isemail(email) {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}

