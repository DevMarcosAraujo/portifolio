import { useState } from 'react';
import './Header.css';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className='Header'>
            <span>MA</span>

            {/* Botão de menu hambúrguer (aparece apenas no mobile) */}
            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </button>

            {/* Menu de navegação */}
            <nav className={menuOpen ? "nav open" : "nav"}>
                <a href="#">Sobre Mim</a>
                <a href="#">Conhecimentos</a>
                <a href="#">Esperiência</a>
                <a href="#">Projetos</a>
            </nav>
        </header>
    );
}

export default Header;
