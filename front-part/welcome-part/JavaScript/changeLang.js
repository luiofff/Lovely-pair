document.addEventListener("click", (event) => 
    {
        if (event.target.name === "btnLangJs") {
            if (event.target.value === "0") {
                // form
                nameJs.placeholder = "Введите имя";
                sernameJs.placeholder = "Введите фамилию";
                emailJs.placeholder = "Введите email";
                passwordFJs.placeholder = "Введите пароль";
                passwordSJs.placeholder = "Подтвердите пароль";
                // form
                regBtnJs.innerHTML = "Зарегистрироваться";
                enterJs.innerHTML = "Уже есть аккаунт?";
                logInJs.innerHTML = "Войти";

                langBtn.value = "RU";
                langMenuJs.classList.add("lang-menu-defolt");
            } else if (event.target.value === "1") {
                // form
                nameJs.placeholder = "Enter your name";
                sernameJs.placeholder = "Enter your last name";
                emailJs.placeholder = "Enter your email";
                passwordFJs.placeholder = "Enter password";
                passwordSJs.placeholder = "Confirm the password";
                // form
                regBtnJs.innerHTML = "Sign up";
                enterJs.innerHTML = "Already have an account?";
                logInJs.innerHTML = "Log in";

                langBtn.value = "EN";
                langMenuJs.classList.add("lang-menu-defolt");
            } else if (event.target.value === "2") {
                // form
                nameJs.placeholder = "输入你的名字";
                sernameJs.placeholder = "输入您的姓氏";
                emailJs.placeholder = "输入您的电子邮件";
                passwordFJs.placeholder = "输入密码";
                passwordSJs.placeholder = "确认密码";
                // form
                regBtnJs.innerHTML = "登记册";
                enterJs.innerHTML = "你已经有帐户了吗?";
                logInJs.innerHTML = "进入";

                langBtn.value = "CH";
                langMenuJs.classList.add("lang-menu-defolt");
            } else if (event.target.value === "3") {
                // form
                nameJs.placeholder = "Атын енгізіңіз";
                sernameJs.placeholder = "Тегін енгізіңіз";
                emailJs.placeholder = "Email енгізіңіз";
                passwordFJs.placeholder = "Құпия сөзді енгізіңіз";
                passwordSJs.placeholder = "Құпия сөзді растау";
                // form
                regBtnJs.innerHTML = "Тіркелу";
                enterJs.innerHTML = "Есептік жазба бар ма?";
                logInJs.innerHTML = "Кіру";

                langBtn.value = "KZ";
                langMenuJs.classList.add("lang-menu-defolt");
            }
        }
    }
)
