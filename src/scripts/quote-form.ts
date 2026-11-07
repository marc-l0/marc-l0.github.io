// Progressive enhancement: Netlify also receives a standard HTML POST without JS.
const form = document.querySelector<HTMLFormElement>("[data-quote-form]");

if (form) {
  const fields = form.querySelector<HTMLFieldSetElement>("fieldset")!;
  const submit = form.querySelector<HTMLButtonElement>(
    'button[type="submit"]',
  )!;
  const status = form.querySelector<HTMLParagraphElement>("#quote-status")!;
  const failure = form.querySelector<HTMLParagraphElement>("#quote-error")!;
  const service = form.querySelector<HTMLSelectElement>("#quote-service")!;
  const controls = [
    ...form.querySelectorAll<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >("fieldset input, fieldset textarea, fieldset select"),
  ];
  let sending = false;
  form.noValidate = true;

  function validate(control: (typeof controls)[number]): boolean {
    control.setCustomValidity("");
    const text = control.value.trim();
    let message = "";
    if (control.required && !text)
      message =
        control instanceof HTMLSelectElement
          ? "Selecciona un servicio o pide orientación."
          : "Completa este campo.";
    else if (
      control instanceof HTMLInputElement &&
      control.type === "email" &&
      control.validity.typeMismatch
    )
      message = "Escribe un correo válido, por ejemplo: nombre@empresa.com.";
    else if (
      control instanceof HTMLInputElement ||
      control instanceof HTMLTextAreaElement
    ) {
      if (control.minLength > 0 && text.length < control.minLength)
        message = `Escribe al menos ${control.minLength} caracteres.`;
      else if (control.maxLength > 0 && text.length > control.maxLength)
        message = `Usa como máximo ${control.maxLength} caracteres.`;
    }
    control.setCustomValidity(message);
    const error = document.getElementById(`${control.id}-error`);
    if (error) {
      error.textContent = message;
      error.hidden = !message;
    }
    if (message) control.setAttribute("aria-invalid", "true");
    else control.removeAttribute("aria-invalid");
    return !message;
  }

  function preselect(value: string | null): boolean {
    if (
      !value ||
      ![...service.options].some((option) => option.value === value)
    )
      return false;
    service.value = value;
    status.hidden = true;
    failure.hidden = true;
    validate(service);
    return true;
  }
  preselect(new URLSearchParams(location.search).get("servicio"));

  // Same-page service CTAs preserve any details the visitor has already entered.
  document.addEventListener("click", (event) => {
    const anchor =
      event.target instanceof Element
        ? event.target.closest<HTMLAnchorElement>("a[href]")
        : null;
    if (
      !anchor ||
      event.defaultPrevented ||
      event.ctrlKey ||
      event.metaKey ||
      event.shiftKey ||
      event.altKey ||
      event.button !== 0
    )
      return;
    const url = new URL(anchor.href);
    if (
      url.origin !== location.origin ||
      url.pathname !== location.pathname ||
      url.hash !== "#contacto" ||
      !url.searchParams.has("servicio")
    )
      return;
    if (sending) {
      event.preventDefault();
      return;
    }
    if (!preselect(url.searchParams.get("servicio"))) return;
    event.preventDefault();
    history.replaceState(null, "", url);
    service.scrollIntoView({
      block: "center",
      behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
    service.focus({ preventScroll: true });
  });

  controls.forEach((control) => {
    control.addEventListener("blur", () => validate(control));
    control.addEventListener("input", () => {
      if (!sending) {
        status.hidden = true;
        failure.hidden = true;
      }
      if (control.getAttribute("aria-invalid") === "true") validate(control);
    });
    control.addEventListener("change", () => validate(control));
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (sending) return;
    status.hidden = true;
    failure.hidden = true;
    const invalid = controls.filter((control) => !validate(control));
    if (invalid.length) {
      failure.textContent =
        "Revisa los campos señalados antes de enviar tu consulta.";
      failure.hidden = false;
      invalid[0].focus();
      return;
    }
    if (import.meta.env.DEV) {
      failure.textContent =
        "En este servidor local puedes revisar el formulario, pero el envío está disponible en el sitio publicado. También puedes escribirme por correo.";
      failure.hidden = false;
      failure.focus();
      return;
    }
    const body = new URLSearchParams();
    new FormData(form).forEach((value, key) => {
      if (typeof value === "string") body.append(key, value);
    });
    sending = true;
    fields.disabled = true;
    form.setAttribute("aria-busy", "true");
    submit.textContent = "Enviando…";
    status.textContent = "Se está enviando tu consulta.";
    status.hidden = false;
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 20000);
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
        signal: controller.signal,
      });
      if (!response.ok) throw new Error(`HTTP_${response.status}`);
      form.reset();
      preselect(new URLSearchParams(location.search).get("servicio"));
      status.textContent =
        "Gracias, tu consulta se envió correctamente. Te responderé al correo que indicaste.";
      status.focus();
    } catch (error) {
      status.hidden = true;
      const reason = error instanceof Error ? error.message : "";
      failure.textContent =
        reason === "HTTP_429"
          ? "Se han recibido demasiadas solicitudes. Espera un momento antes de volver a intentarlo. Tus datos se conservaron."
          : ["HTTP_400", "HTTP_404", "HTTP_405"].includes(reason)
            ? "El formulario no está disponible en este momento. Tus datos se conservaron; puedes volver a intentarlo más tarde o escribirme por correo."
            : "No pude confirmar el envío. Tus datos siguen en el formulario: puedes volver a intentarlo o escribirme por correo. Si recibiste una confirmación antes, no hace falta reenviar.";
      failure.hidden = false;
      failure.focus();
    } finally {
      window.clearTimeout(timeout);
      sending = false;
      fields.disabled = false;
      form.removeAttribute("aria-busy");
      submit.innerHTML = 'Enviar consulta <span aria-hidden="true">→</span>';
    }
  });
}
