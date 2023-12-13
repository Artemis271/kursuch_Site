let registrationFields = document.getElementById("registrationFields");
let signInFields = document.getElementById("signInFields");
let title = document.getElementById("title");
let message = document.getElementById("message"); // Новый элемент для сообщений

function switchToSignIn() {
    registrationFields.style.display = "none";
    signInFields.style.display = "block";
    title.innerHTML = "Вход";
}

function switchToSignUp() {
    registrationFields.style.display = "block";
    signInFields.style.display = "none";
    title.innerHTML = "Регистрация";
}

function checkForm(el){
    let email, password;

    if (registrationFields.style.display !== "none") {
        email = el.email.value;
        password = el.password.value;


    } else {
        email = el.signInEmail.value;
        password = el.signInPassword.value;

        if (email && password) {
            // В данном случае, просто выводим сообщение об успешном входе для любых данных
            alert('Добро пожаловать');
            window.location.href='index.html';
        } else {
            alert('Введите почту и пароль');
        }
    }
    return false;
}
