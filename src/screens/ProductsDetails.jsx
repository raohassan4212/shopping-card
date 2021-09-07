import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";

const ProductDetails = (prop) => {
    

    const {id} = useParams();
    console.log(`id ${id} `);

    const {title,price,description,varients} = prop.location.state;
    console.log(title,price,description,varients[1].items[0].title,);


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

                        <div>
                            <p className="font-size-product-detail">{varients[0].title}</p>
                            <button className="product-detail-btn-sub">{varients[0].items[0].title}</button>
                            <button className="product-detail-btn-sub">{varients[0].items[1].title}</button>
                        </div>

                        <div>
                            <p className="font-size-product-detail">{varients[1].title}</p>
                            <button className="product-detail-btn-sub">{varients[1].items[0].title}</button>
                            <button className="product-detail-btn-sub">{varients[1].items[1].title}</button>
                            <button className="product-detail-btn-sub">{varients[1].items[2].title}</button>
                            <button className="product-detail-btn-sub">{varients[1].items[3].title}</button>
                        </div>

                        <button className="product-detail-btn">Add to Cart</button>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;