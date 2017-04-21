window.onload = function () {
    var xmlhttp = new XMLHttpRequest();
    var formLogin = document.forms["login-form"];
    var formRegister = document.forms["register-form"];
    var formCreateArticle = document.forms["create-article-form"];
    var buttonsShowArticle = document.querySelectorAll(".show-article");
    var formCreateComment = document.forms["make-comment-form"];
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
        /*  for (var i = 0; i < buttonsShowArticle.length; i++) {
              buttonsShowArticle[i].onclick = function () {
                  xmlhttp.onreadystatechange = function () {
                      if (this.readyState == 4 && this.status == 200) {
                          console.log("ok");
                      }
                  };
                  xmlhttp.open("POST", "?action=showArticle&id_article="+this.id, true);
                  xmlhttp.send();
              }.bind(i);
          }*/
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
};
