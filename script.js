
/* Gestion du choix des produits */
function ajouterAuPanier(nomProduit) {
    const choix = document.getElementById("choix");

    if (choix) {
        choix.textContent = nomProduit;

        alert("Vous avez choisi : " + nomProduit);
    }
}

/* Gestion du formulaire de contact */
const formulaire = document.getElementById("contactForm");

if (formulaire) {
    formulaire.addEventListener("submit", function (event) {
        event.preventDefault();

        const nom = document.getElementById("nom").value.trim();
        const confirmation = document.getElementById("confirmation");

        confirmation.textContent =
            "Merci " + nom + " ! Votre formulaire a été rempli avec succès.";

        confirmation.classList.remove("d-none");

        formulaire.reset();
    });
}
