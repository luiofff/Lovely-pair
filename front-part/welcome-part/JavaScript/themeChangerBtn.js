let state = "white";
        activeThemeBtn.addEventListener("click", function(event) {
            langMenuJs.classList.add("lang-menu-defolt");
            let target = event.target;
            if (state==="white") {
                // background
                document.body.style.background = "linear-gradient(180deg, #000000 0%, #5C204C 0.02%, #FFFFFF 208.77%)";
                // text
                changeColorLogoJs1.style.color = "#fff";
                changeColorLogoJs2.style.color = "#fff";
                // form
                cardJs.style.background = "#fff";
                secondCardJs.style.background = "#5D214D";
                regBtnJs.style.background = "#fff";
                // change-btn
                changeLogo.innerHTML = "☼";
                changeLogo.style.color = "#111";
                themeChangeBlockJs.style.background = "#fff";
                //lang-btn
                langBtn.style.background = "#fff";
                langBtn.style.color = "#111";
                

                
                langMenuJs.classList.add("lang-menu-defolt");
                state = "black";

            } else {
                // background
                document.body.style.background = "linear-gradient(180deg, #FFFFFF 0%, #7D2063 224.44%)";
                // text
                changeColorLogoJs1.style.color = "#111";
                changeColorLogoJs2.style.color = "#111";
                // form
                cardJs.style.background = "#5D214D";
                secondCardJs.style.background = "#fff"
                regBtnJs.style.background = "#5D214D"
                // change-btn
                changeLogo.innerHTML = "☾";
                changeLogo.style.color = "#fff";
                themeChangeBlockJs.style.background = "#111";
                //lang-btn
                langBtn.style.background = "#111";
                langBtn.style.color = "#fff";

                state = "white";
            }
        })