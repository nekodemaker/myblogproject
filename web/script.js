window.onload = function () {
    var xmlhttp = new XMLHttpRequest();
    var formLogin = document.forms["login-form"];
    var formRegister = document.forms["register-form"];
    var formCreateArticle = document.forms["create-article-form"];

    function submitOnLogin() {
        formLogin.onsubmit = function () {
            xmlhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    console.log("ok");
                }
            };
            xmlhttp.open("POST", "?action=login", true);
            xmlhttp.send();
        };
    };

    function submitOnRegister() {
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

    function submitOnCreateArticle() {
        formCreateArticle.onsubmit = function () {
            xmlhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    console.log("ok");
                }
            };
            xmlhttp.open("POST", "?action=createArticle", true);
            xmlhttp.send();
        };
    };

    if (formLogin != undefined)
        submitOnLogin();
    if (formRegister != undefined)
        submitOnRegister();
    if (formCreateArticle != undefined)
        submitOnCreateArticle();
};

