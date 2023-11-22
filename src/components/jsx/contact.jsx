import { Link } from 'react-router-dom';
import '../style/contact.sass'

function Contact() {
    
    return(
        <div>
            <div id='coordonnées'>
                <div className='coordonnee'>
                <i class="fa fa-light fa-location-dot coordonneeIcon"></i>
                <div className='coordonneetxt'>
                    <h2>Adresse</h2>
                    <p>5 rue François Massabo<br/>13002 Marseille</p>
                </div>
                </div>

                <div className='coordonnee'>
                <i class="fa fa-light fa-phone coordonneeIcon"></i>
                <div className='coordonneetxt'>
                <h2>Téléphone</h2>
                <p>06.41.15.28.12</p>
                </div>
                </div>

                <div className='coordonnee'>
                <i class="fa-brands fa-linkedin-in coordonneeIcon"></i>
                <div className='coordonneetxt'>
                    <h2>Linkedin</h2>
                    <p>
                        <Link to="https://www.linkedin.com/in/alhassane-seye/" target="_blank">Mon profil linkedin</Link>
                    </p>
                </div>
                </div>

                <div className='coordonnee'>
                <i class="fa fa-light fa-envelope coordonneeIcon"></i>
                <div className='coordonneetxt'>
                    <h2>Mail</h2>
                    <p>seyealhassane@gmail.com</p>
                </div>

                </div>

            </div>

            <form>

            </form>

        </div>
    )
}

export default Contact