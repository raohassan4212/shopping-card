import Navbar from "../components/Navbar";
import { useParams, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";



const ProductDetails = () => {

    const { id } = useParams();

    const { title, price, description, varients } = useSelector((state) => state.productsLists.find((product) => product.id == id))


    const history = useHistory();

    

    const gotoAddToCart = () => {
        
        history.push({ 
            pathname: `/add-to-cart`,
           });

           let product = {
               id,
               title,
               price
           };

           let prevProducts = localStorage.getItem("cardProducts");
           if (prevProducts) {
               prevProducts = JSON.parse(prevProducts);
           } else {
               prevProducts = [];
           }
           prevProducts.push(product);

           
           localStorage.setItem(`cardProducts`,JSON.stringify(prevProducts));



        
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