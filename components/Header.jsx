// Importo il componente NavMenu
import NavMenu from "./NavMenu.jsx";

// Destrutturazione dei "links" dalla prop
export default function Header({ links }) {

    return (

        <header>

            <div>

                <figure>

                    <img src="./public/img/dc-logo.png" alt="logo" />

                </figure>

                {/* Uso il componente NavMenu e passo i links come prop */}
                <NavMenu links={links} />

            </div>

        </header>

    );

}