import logo from '../../assets/img/logo.svg'
import './style.css'

function Header() {
  return (
    <>
      <header>
        <div className="dsmeta-logo-container">
          <img src={logo} alt="DHArtes" />
          <h1>DSMeta</h1>
          <p>
            Desenvolvido por
            <a href="https://www.instagram.com/diogo_meneses_">
               @diogo_meneses_
            </a>
          </p>
        </div>
      </header>
    </>
  )
}

export default Header;
