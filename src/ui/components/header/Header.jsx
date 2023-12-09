import React, {useState} from 'react'
import './header.css'
import { Link } from 'react-router-dom'

function Header() {
  const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
      setShowDropdown(!showDropdown);
    };
  
  return (
    <header>
        <nav>
          <Link to="/">Calculo</Link>
          <ul className="navList">
            <li>
                <Link to="/">Inicio</Link>
            </li>
            <li>
                <Link to="/historia-calculo">História</Link>
            </li>
            <li>
                <Link to="/uso-calculo">Uso do Cálculo</Link>
            </li>
            <li className="dropdown" onMouseEnter={toggleDropdown}>
              <p className='drop-p'>Integral e Derivada</p>
              {showDropdown && (
                <li className="dropdown-content">
                  <Link to="/integral">Integral</Link>
                  <Link to="/derivada">Derivada</Link>
                </li>
              )}
            </li>
          </ul>
        </nav>
      </header>
  )
}

export default Header