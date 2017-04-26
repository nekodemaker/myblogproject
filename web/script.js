window.onload = function () {
    var xmlhttp = new XMLHttpRequest();
    var formLogin = document.forms["login-form"];
    var formRegister = document.forms["register-form"];
    var formCreateArticle = document.forms["create-article-form"];
    var buttonsShowArticle = document.querySelectorAll(".show-article");
    var formCreateComment = document.forms["post-comment"];
    var formChangePassword = document.forms["change-password-form"];
    console.log(buttonsShowArticle);

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

    function clickOnShowArticle() {
        for (var i = 0; i < buttonsShowArticle.length; i++) {
            buttonsShowArticle[i].onsubmit = function () {
                xmlhttp.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 200) {
                        console.log("ok");
                    }
                };
                xmlhttp.open("POST", "?action=showArticle", true);
                xmlhttp.send();
            }.bind(i);
        }
    };

    function submitOnCreateComment() {
        formCreateComment.onsubmit = function () {
            xmlhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    console.log("ok");
                }
            };
            console.log("here");
            xmlhttp.open("POST", "?action=createComment", true);
            xmlhttp.send();
        };
    };

    function submitOnChangePassword() {
        formCreateComment.onsubmit = function () {
            xmlhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    console.log("ok");
                }
            };
            console.log("here");
            xmlhttp.open("POST", "?action=changePassword", true);
            xmlhttp.send();
        };
    };

    if (formLogin != undefined)
        submitOnLogin();
    if (formRegister != undefined)
        submitOnRegister();
    if (formCreateArticle != undefined)
        submitOnCreateArticle();
    if (buttonsShowArticle != undefined)
        clickOnShowArticle();
    if (formCreateComment != undefined)
        submitOnCreateComment();
    if (formChangePassword != undefined)
        submitOnChangePassword();
};

