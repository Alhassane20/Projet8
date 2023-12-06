export function afficherModal() {
    const modal = document.getElementById("modale")
    modal.style.display = "flex"

}

export function fermerModal() {
    const modal = document.getElementById("modale")
    modal.style.display = "none"
}

// document.addEventListener("click", (e) => {
//     const modal = document.getElementById("modale");
//     const formModal = document.getElementById("formModal");

//     // Vérifiez si la cible du clic est l'élément du formulaire ou un de ses enfants
//     if (formModal.contains(e.target)) {
//         // C'est à l'intérieur du formulaire, ne fermez pas le modal
//     } else {
//         // C'est en dehors du formulaire, fermez le modal
//         modal.style.display = "none";
//     }
// });