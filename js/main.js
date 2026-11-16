const menuPrincipal = document.querySelector("#menuPrincipal");

menuPrincipal?.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
        if (menuPrincipal.classList.contains("show")) {
            bootstrap.Collapse.getOrCreateInstance(menuPrincipal).hide();
        }
    });
});
