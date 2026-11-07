const menu = document.querySelector<HTMLElement>("[data-header-menu]");
if (menu) {
  const nav = menu.querySelector<HTMLElement>("[data-nav-scroller]")!;
  const status = menu.querySelector<HTMLElement>("[data-nav-status]")!;
  const hint = menu.querySelector<HTMLElement>("[data-nav-hint]")!;
  const track = menu.querySelector<HTMLElement>("[data-nav-track]")!;
  const mobile = matchMedia("(max-width: 700px)");
  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
  let frame = 0;

  function update() {
    frame = 0;
    const total = nav.scrollWidth;
    const maximum = total - nav.clientWidth;
    const overflow = mobile.matches && maximum > 2;
    const position = Math.max(0, Math.min(nav.scrollLeft, maximum));
    const left = overflow && position > 2;
    const right = overflow && position < maximum - 2;
    menu!.toggleAttribute("data-scroll-left", left);
    menu!.toggleAttribute("data-scroll-right", right);
    status.hidden = !overflow;
    track.hidden = !overflow;
    nav.tabIndex = overflow ? 0 : -1;
    if (!overflow) return;
    hint.textContent =
      left && right
        ? "← Desliza para explorar →"
        : right
          ? "Desliza para ver más →"
          : "← Desliza para volver";
    menu!.style.setProperty(
      "--nav-window",
      `${(nav.clientWidth / total) * 100}%`,
    );
    menu!.style.setProperty("--nav-offset", `${(position / total) * 100}%`);
  }
  function scheduleUpdate() {
    if (!frame) frame = requestAnimationFrame(update);
  }
  function revealCurrent() {
    if (mobile.matches) {
      const current = nav.querySelector<HTMLElement>("[aria-current]");
      if (current)
        nav.scrollLeft =
          current.offsetLeft - (nav.clientWidth - current.offsetWidth) / 2;
    }
    scheduleUpdate();
  }
  nav.addEventListener("scroll", scheduleUpdate, { passive: true });
  nav.addEventListener("keydown", (event) => {
    if (
      event.target !== nav ||
      !mobile.matches ||
      !["ArrowLeft", "ArrowRight"].includes(event.key)
    )
      return;
    event.preventDefault();
    nav.scrollBy({
      left: (event.key === "ArrowRight" ? 1 : -1) * nav.clientWidth * 0.7,
      behavior: reducedMotion.matches ? "auto" : "smooth",
    });
  });
  nav.addEventListener("focusin", (event) => {
    if (mobile.matches && event.target instanceof HTMLAnchorElement)
      event.target.scrollIntoView({
        block: "nearest",
        inline: "nearest",
        behavior: "instant",
      });
  });
  new ResizeObserver(scheduleUpdate).observe(nav);
  mobile.addEventListener("change", revealCurrent);
  void document.fonts.ready.then(revealCurrent);
  revealCurrent();
}
