let lang_state = "closed";

document.addEventListener("click", (event) => {
    let target = event.target;
    if (target.name === "menu-lang") {
        if (lang_state === "closed") {
            langMenuJs.classList.remove("lang-menu-defolt");
            lang_state = "open";
            console.log(langMenuJs.classList);
        } else if (lang_state = "open") {
            langMenuJs.classList.add("lang-menu-defolt");
            lang_state = "closed";
        }
    }  
})
