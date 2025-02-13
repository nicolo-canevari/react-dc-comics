// funzione che si occuperà del menu della navbar
function NavMenu({ links }) {

    return (

        <nav>

            <ul>

                {/* Controllo se "links è un array" prima di usare "map*/}
                {Array.isArray(links) && links.map((link, index) => (

                    <li key={index}>

                        {/* Verifico se "isActive" è true per aggiungere la classe "active" */}
                        <a href={link.href} className={link.active ? 'active' : ''}>

                            {/* proprietà "name" dell'array */}
                            {link.name}

                        </a>

                    </li>

                ))}

            </ul>

        </nav>

    );

}

export default NavMenu;