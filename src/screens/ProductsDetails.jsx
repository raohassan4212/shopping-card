import Navbar from "../components/Navbar";
import { useParams, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { AddProduct } from "../store/action";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";


const ProductDetails = () => {

    const state = useSelector(state => state);





    const dispatch = useDispatch();

    const { id } = useParams();

    const { title, price, description, varients, image } = useSelector((state) => state.productsLists.find((product) => product.id === id));

    const [priceVariant1, setPriceVariant1] = useState([0, 0]);
    console.log(priceVariant1);
    const history = useHistory();

 
    const sumOfVaraint = priceVariant1.reduce((prev,next) => prev + next, 0)





    const gotoAddToCart = () => {

        history.push({
            pathname: `/add-to-cart`,
        });

        let cardId = Math.random() * 0.0000001;

        let product = {
            cardId,
            title,
            price: price + sumOfVaraint,
            image,
        };

        let prevProducts = localStorage.getItem("cardProducts");
        if (prevProducts) {
            prevProducts = JSON.parse(prevProducts);
        } else {
            prevProducts = [];
        }
        prevProducts.push(product);


        localStorage.setItem(`cardProducts`, JSON.stringify(prevProducts));
        const cartProductsDispatch = localStorage.getItem("cardProducts");

        dispatch(AddProduct(JSON.parse(cartProductsDispatch)));


    }

    useEffect(() => {
        const cartProductsDispatch = localStorage.getItem("cardProducts");

        dispatch(AddProduct(JSON.parse(cartProductsDispatch)));
    }, [])





    return (
        <div className="container-fluid main-product-detail-div">
            <Navbar />
            <div>
                <p className="product-detail-p">Product # {id}</p>

                <div className="product-detail-sub-main">
                    <div>
                        <img src={image} alt="" />
                    </div>
                    <div>
                        <p className="font-size-product-detail">{title} - {description}</p>

                        <p className="font-size-product-detail">US $ {priceVariant1 ? price + sumOfVaraint : price}</p>


                        {
                            varients.map((varient, i) => {
                                return (
                                    <div key={i}>
                                        <p className="font-size-product-detail">{varient.title}</p>
                                        {varient.items.map((item, j) => {
                                            return (
                                                <button onClick={(event) => {
                                                    setPriceVariant1((arr) => {
                                                        arr[i] = item.price;
                                                        return [...arr];
                                                    })
                                                }} key={j} className="product-detail-btn-sub">{item.title}</button>
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