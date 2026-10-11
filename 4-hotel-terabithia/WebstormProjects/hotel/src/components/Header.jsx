import logo from '../assets/hotelLuvizLogo.png'
import { Link, useLocation } from "react-router-dom";

function Header() {
    const location = useLocation();
    return (
        <header className="bg-[var(--footer-header)] text-[var(--color-text)]  p-6 w-full">

            {/* Container que separa esquerda e direita */}
            <div className="flex items-center justify-between w-full">

                {/* Logo à esquerda */}
                <div>
                    <img className="w-16 h-auto " src={logo} alt="Logo Minimalista" />
                </div>

                {/* Menu à direita */}
            <nav className="flex flex-wrap gap-6 text-white w-auto ">

                {location.pathname !== "/home" && (
                    <Link to="/home">Pagina home</Link>
                )}

                {location.pathname !== "/air" && (
                    <Link to="/air">Ar Condicionado</Link>
                )}

                {location.pathname !== "/events" && (
                    <Link to="/events">Eventos</Link>
                )}

                {location.pathname !== "/guest" && (
                    <Link to="/guest">Hóspedes</Link>
                )}

                {location.pathname !== "/reports" && (
                    <Link to="/reports">Relatórios</Link>
                )}

                {location.pathname !== "/reservation" && (
                    <Link to="/reservation">Reservas</Link>
                )}

                {location.pathname !== "/supply" && (
                    <Link to="/supply">Suprimentos</Link>
                )}

                {location.pathname !== "/exit" && (
                    <Link to="/exit">Sair</Link>
                )}

            </nav>
            </div>
        </header>
    );
}

export default Header;