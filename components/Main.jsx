// Importo FeatureMain.jsx
import FeatureMain from "./FeatureMain.jsx";

export default function Main() {

    return (

        <main>

            <div id="cont-jumbo">

                <section id="jumbotron">

                    <img src="./public/img/jumbotron.jpg" alt="" />

                </section>

            </div>

            <div id="container1">

                <section id="content">

                    {/* <h1><a href="">» Content goes here «</a></h1> */}

                </section>

            </div>

            {/* Componente che contiene le icone e il blocco azzurro */}
            <FeatureMain />

        </main>

    );

}

