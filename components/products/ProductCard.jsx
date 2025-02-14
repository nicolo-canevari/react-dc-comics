// Componente che rappresenta una singola card per ogni prodotto
export default function ProductCard(props) {

    return (

        <div className="prod-card">

            <div className="card">

                <div className="album">

                    <img src={props.productThumb} alt={props.productTitle} />

                </div>

                <div className="title_text">

                    <h4>{props.productTitle}</h4>

                </div>



            </div>

        </div>

    );

}

