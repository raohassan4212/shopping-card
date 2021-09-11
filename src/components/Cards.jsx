import { useHistory } from "react-router-dom";



const Cards = ({title,description,price,id,image}) => {


    

    const history = useHistory();

    const gotoProductDetail = () => {
        history.push({ 
            pathname: `/product-details/${id}`,
           });
        
    }

    

    return (
        <>
            <button onClick={gotoProductDetail} className="product-link">
                <div className="main-card" >
                    <h2 className="card-h1">{title}</h2>
                    <div className="block">
                        <img className='card-img' src={image} alt="" />
                    </div>
                    <div className="block">
                        <p>{description}</p>
                        <p>price: {price}</p>
                    </div>
                </div>
            </button>
        </>
    );
}

export default Cards;