// Importo FeatureMain.jsx
import FeatureMain from "./FeatureMain.jsx";

// Importo ProductsList
import ProductsList from './products/ProductsList.jsx';

export default function Main() {

    return (

        <main>

            <div id="cont-jumbo">

                <section id="jumbotron">

                    <img src="./public/img/jumbotron.jpg" alt="" />

                </section>

            </div>

            <section id="container-dc">

                <ProductsList />

                {/* <div className="comics-container">

                    <div className="prod-card">

                        


                    </div>

                </div> */}

            </section>

            {/* Componente che contiene le icone e il blocco azzurro */}
            <FeatureMain />

        </main>

    );

}

