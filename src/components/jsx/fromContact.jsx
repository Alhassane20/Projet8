import '../style/formcontact.sass'

function FormContact() {
    return(
    <form id="formulaireContact">
        <h3>Envoyez un mail</h3>
        <input type="text" placeholder="Nom" id="prenom" required="required"/>
        <input type="email" placeholder="Email" id='email'/>
        <input type="text" placeholder="Objet" id="objet" required="required"/>
        <textarea name="message" placeholder="Votre message..." id="message" required="required"/>
        <input type="submit" value="Envoyer" id='bouton'/>
    </form>
    )
}

export default FormContact