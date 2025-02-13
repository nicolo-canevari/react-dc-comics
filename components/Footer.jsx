// Destrutturazione dei "links" dalla prop, uso (props) se non voglio usare la destrutturazione
export default function Footer({ links }) {

    return (

        <footer>

            <section id="fcont1">

                <div id="link">

                    <div className="column">

                        <h2>DC COMICS</h2>
                        <ul>

                            {links.dcComics.map((link, index) => (

                                <li key={index}>

                                    <a href={link.href}>{link.name}</a>

                                </li>

                            ))}

                        </ul>

                        <h2>SHOP</h2>
                        <ul>

                            {links.shop.map((link, index) => (

                                <li key={index}>

                                    <a href={link.href}>{link.name}</a>

                                </li>

                            ))}

                        </ul>

                    </div>

                    <div className="column">

                        <h2>DC</h2>
                        <ul>

                            {links.dc.map((link, index) => (

                                <li key={index}>

                                    <a href={link.href}>{link.name}</a>

                                </li>

                            ))}

                        </ul>

                    </div>

                    <div className="column">

                        <h2>SITES</h2>
                        <ul>

                            {links.sites.map((link, index) => (

                                <li key={index}>

                                    <a href={link.href}>{link.name}</a>

                                </li>

                            ))}

                        </ul>

                    </div>

                </div>

                <div id="f_logo">

                    <img src="./public/img/dc-logo-bg.png" alt="" />

                </div>

            </section>

            <section id="fcont2">

                <div className="signup">

                    <button>

                        <h3>SING-UP NOW!</h3>

                    </button>

                </div>

                <div className="icons">

                    <h3>FOLLOW US</h3>

                    <img src="./public/img/footer-facebook.png" alt="" />
                    <img src="./public/img/footer-twitter.png" alt="" />
                    <img src="./public/img/footer-youtube.png" alt="" />
                    <img src="./public/img/footer-pinterest.png" alt="" />
                    <img src="./public/img/footer-periscope.png" alt="" />

                </div>

            </section>




        </footer>

    )

}