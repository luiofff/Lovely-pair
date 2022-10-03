let state = "white";

changeTheme.addEventListener("click", () => {
    if (state==="white") {
        // background
        document.body.style.background = "linear-gradient(180deg, #000000 0%, #5C204C 0.02%, #FFFFFF 208.77%)";
        // pair block back
        pairBlockJs.style.background = "#460B36";
        // change Theme
        profileBlockJs.style.background = "#460B36";
        changeTheme.innerHTML = "☀";
        // logo
        changeColorLogoJs1.style.color = "#fff";
        changeColorLogoJs2.style.color = "#fff";

        state = "black";
    } else {
        // background
        document.body.style.background = "linear-gradient(180deg, #FFFFFF 0%, #7D2063 224.44%)";
        // pair block back
        pairBlockJs.style.background = "#5D214D";
        // change Theme
        profileBlockJs.style.background = "#5D214D";
        changeTheme.innerHTML = "☾";
        // logo
        changeColorLogoJs1.style.color = "#111";
        changeColorLogoJs2.style.color = "#111";


        state = "white";
    }
})