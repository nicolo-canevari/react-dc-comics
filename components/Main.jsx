// Importo FeatureMain.jsx
import FeatureMain from "./FeatureMain.jsx";

// Importo ProductsList
import ProductsList from './products/ProductsList.jsx';

export default function Main() {

    return (

        <main>

            <div id="cont-jumbo">

                <section>

                    <img src="./public/img/jumbotron.jpg" alt="" />

                </section>

            </div>

            <section id="container-dc">

                <div id="label">

                    <h5>CURRENT SERIES</h5>

                </div>

                <div className="comics_container">

                    <ProductsList />

                </div>

                <div id="load_button">

                    <button>LOAD MORE</button>

                </div>

            </section>

            {/* Componente che contiene le icone e il blocco azzurro */}
            <FeatureMain />

        </main>

    );

}

