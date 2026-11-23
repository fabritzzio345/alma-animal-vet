(() => {
    // Activa el modo de demostración cuando la página está incrustada.
    if (window.self === window.top) {
        return;
    }

    function stopAction(event) {
        event.preventDefault();
        event.stopImmediatePropagation();
    }

    function isContactLink(link) {
        const href = link.getAttribute("href");

        if (!href) {
            return false;
        }

        let url;

        try {
            url = new URL(href, document.baseURI);
        } catch {
            return false;
        }

        const contactProtocols = [
            "tel:",
            "mailto:",
            "sms:",
            "whatsapp:"
        ];

        return (
            contactProtocols.includes(url.protocol) ||
            url.hostname === "wa.me" ||
            url.hostname === "www.wa.me" ||
            url.hostname === "whatsapp.com" ||
            url.hostname.endsWith(".whatsapp.com")
        );
    }

    // Intercepta el envío antes de los manejadores del formulario.
    window.addEventListener("submit", stopAction, true);

    function stopContactClick(event) {
        if (!(event.target instanceof Element)) {
            return;
        }

        const link = event.target.closest("a[href]");

        if (link && isContactLink(link)) {
            stopAction(event);
        }
    }

    window.addEventListener("click", stopContactClick, true);
    window.addEventListener("auxclick", stopContactClick, true);

    function disableForms() {
        document.querySelectorAll("form").forEach((form) => {
            form.inert = true;

            form.querySelectorAll(
                "input, select, textarea, button"
            ).forEach((field) => {
                field.disabled = true;
            });

            const notice = document.createElement("p");

            notice.textContent =
                "Vista de portafolio. Este formulario está desactivado.";

            form.before(notice);
        });

        document.querySelectorAll("a[href]").forEach((link) => {
            if (!isContactLink(link)) {
                return;
            }

            link.setAttribute("aria-disabled", "true");
            link.removeAttribute("href");
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener(
            "DOMContentLoaded",
            disableForms, {
                once: true
            }
        );
    } else {
        disableForms();
    }
})();