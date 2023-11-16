import '../style/header.sass'

function Header() {
    return (
      <nav id='header'>
        <div id='titre'>Portfolio</div>
        <ul id='menu'>
          <li className='menu'>Accueil</li>
          <li className='menu'><a href="#colorSkills">Compétences</a></li>
          <li className='menu'><a href="#worksPage">Projets</a></li>
        </ul>
      </nav>
    );
  }

export default Header