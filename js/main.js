(function () {
  var openBtn = document.getElementById("mobile-menu-open");
  var closeBtn = document.getElementById("mobile-menu-close");
  var menu = document.getElementById("mobile-menu");

  if (!openBtn || !closeBtn || !menu) return;

  function openMenu() {
    menu.classList.add("mobile-menu--open");
    menu.setAttribute("aria-hidden", "false");
    openBtn.setAttribute("aria-expanded", "true");
    document.body.classList.add("no-scroll");
  }

  function closeMenu() {
    menu.classList.remove("mobile-menu--open");
    menu.setAttribute("aria-hidden", "true");
    openBtn.setAttribute("aria-expanded", "false");
    document.body.classList.remove("no-scroll");
  }

  openBtn.addEventListener("click", openMenu);
  closeBtn.addEventListener("click", closeMenu);

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && menu.classList.contains("mobile-menu--open")) {
      closeMenu();
    }
  });
})();
