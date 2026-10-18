// ==================================================
// SANDIA COMMUNITY HIGH SCHOOL
// MAIN JAVASCRIPT
// ==================================================


// ================= MOBILE NAVIGATION =================

const menuToggle =
    document.getElementById("menu-toggle");

const mainNavigation =
    document.getElementById("main-navigation");


if (menuToggle && mainNavigation) {

    // Open and close menu

    menuToggle.addEventListener("click", function () {

        mainNavigation.classList.toggle("show");

        const menuIsOpen =
            mainNavigation.classList.contains("show");

        menuToggle.setAttribute(
            "aria-expanded",
            menuIsOpen
        );

        menuToggle.setAttribute(
            "aria-label",
            menuIsOpen
                ? "Close navigation menu"
                : "Open navigation menu"
        );

    });


    // Close menu when a navigation link is selected

    const navigationLinks =
        mainNavigation.querySelectorAll("a");

    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            mainNavigation.classList.remove("show");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        });

    });


    // Close menu when user clicks outside navigation

    document.addEventListener("click", function (event) {

        const clickedInsideNavigation =
            mainNavigation.contains(event.target);

        const clickedMenuButton =
            menuToggle.contains(event.target);

        if (
            !clickedInsideNavigation &&
            !clickedMenuButton
        ) {

            mainNavigation.classList.remove("show");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        }

    });

}



/* ================= CONTACT FORM ================= */

const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

if (contactForm && formStatus) {
    contactForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        formStatus.textContent = "Sending your inquiry...";

        const formData = Object.fromEntries(
            new FormData(contactForm).entries()
        );

        formData._subject =
            "New Inquiry - Sandia Community High School";
            formData._captcha="false";

        try {
            const response = await fetch(
                "https://formsubmit.co/ajax/a4c4d359e4f952490d8139006a57bacc",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    body: JSON.stringify(formData)
                }
            );

            const result = await response.json();

            if (
                !response.ok ||
                String(result.success).toLowerCase() === "false"
            ) {
                throw new Error("Submission failed");
            }

            formStatus.textContent =
                "Thank you! Your inquiry has been submitted successfully.";

            contactForm.reset();

        } catch (error) {
            console.error("Contact form error:", error);

            formStatus.textContent =
                "We could not submit your inquiry. Please try again later.";
        }
    });
}
