import { useSelector } from "react-redux";
import { RMCardProduct } from "../store/action";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { AddProduct } from "../store/action"


const AddsItems = () => {


    const dispatch = useDispatch();

    let cartProducts = localStorage.getItem("cardProducts");

    if (cartProducts) {
        cartProducts = JSON.parse(cartProducts)
    }
    else {
        cartProducts = [];
    }

    const state = useSelector(state => state);

    let rmCardProduct = (event, id) => {
        dispatch(RMCardProduct(id));
    }

    console.log(state.cardProduct.price)

    useEffect(() => {
        const cartProductsDispatch = localStorage.getItem("cardProducts");

        dispatch(AddProduct(JSON.parse(cartProductsDispatch)));
    },[])

    return (
        <>
            <div className="add-to-cart-sub-div" >
                <table className="add-to-cart-table">
                    <thead>
                        <tr>
                            <th colSpan="5" className="main-th">Add to cart</th>
                        </tr>
                        <tr className="add-to-cart-tr tr-main-height">
                            <td className="col-margin col-bol">Product   </td>
                            <td className="col-margin col-bol">Product Name</td>
                            <td className="col-margin col-bol">Description</td>
                            <td className="col-margin col-bol">Price</td>
                            <td className="col-margin col-bol">Items Remove</td>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            cartProducts.map((v, i) => {
                                return (
                                    <tr key={i} className="add-to-cart-tr tr-sub-height">
                                        <td className="col-margin"><img src={v.image} width="70px" alt="" /></td>
                                        <td className="col-margin">{v.title}</td>
                                        <td className="col-margin">default product</td>
                                        <td className="col-margin">{v.price}</td>
                                        <td className="col-margin"><button onClick={(event) => rmCardProduct(event, v.cardId)} className="add-to-cart-rm-btn">Remove</button></td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>


                </table>



            </div>
            <div className="add-to-cart-total-div">
                <p>Total: { cartProducts.map(v => v.price).reduce((prev,next) => prev + next,0 )}</p>
            </div>
        </>
    );
}

export default AddsItems;