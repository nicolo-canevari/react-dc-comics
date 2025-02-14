// Componente che rappresenta una singola card per ogni prodotto
export default function ProductCard(props) {

    return (

        <div className="prod-card">

            <img src={props.productSrc} alt={props.productTitle} />
            <h4>{props.productTitle}</h4>

        </div>

    );

}

