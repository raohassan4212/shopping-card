import Navbar from "../components/Navbar";
import { useParams, useHistory } from "react-router-dom";

const ProductDetails = (prop) => {

    const { id } = useParams();

    const { title, price, description, varients } = prop.location.state;

    const history = useHistory();

    const gotoAddToCart = () => {
        history.push("/add-to-cart")
    }


    return (
        <div className="container-fluid main-product-detail-div">
            <Navbar />
            <div>
                <p className="product-detail-p">Product # {id}</p>

                <div className="product-detail-sub-main">
                    <div>
                        <img src="/static/images/iphone.png" alt="" />
                    </div>
                    <div>
                        <p className="font-size-product-detail">{title} - {description}</p>

                        <p className="font-size-product-detail">US $ {price}</p>


                        {
                            varients.map((varient, i) => {
                                return (
                                    <div key={i}>
                                        <p className="font-size-product-detail">{varient.title}</p>
                                        {varient.items.map((item, j) => {
                                            return (
                                                <button key={j} className="product-detail-btn-sub">{item.title}</button>
                                            );
                                        })}
                                    </div>
                                );
                            })
                        }


                        <button onClick={gotoAddToCart} className="product-detail-btn">Add to Cart</button>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;