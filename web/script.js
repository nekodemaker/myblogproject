window.onload = function () {
    var xmlhttp = new XMLHttpRequest();
    var formLogin = document.forms["login-form"];
    var formRegister = document.forms["register-form"];

    formLogin.onsubmit = function () {
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("ok");
            }
        };
        xmlhttp.open("POST", "?action=login", true);
        xmlhttp.send();
    };

    formRegister.onsubmit = function () {
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("ok");
            }
        };
        xmlhttp.open("POST", "?action=register", true);
        xmlhttp.send();
    };
};

