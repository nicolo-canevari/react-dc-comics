// Destrutturazione dei "links" dalla prop
export default function Header({ links }) {

    return (

        <header>

            <div>

                <figure>

                    <img src="./public/img/dc-logo.png" alt="logo" />

                </figure>

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

            </div>

        </header>

    );

}