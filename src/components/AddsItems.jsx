

const AddsItems = () => {

    


    

    let cartProducts = localStorage.getItem("cardProducts");
    
    
    if (cartProducts) {
        cartProducts = JSON.parse(cartProducts)
    }
    else {
        cartProducts = [];
    }

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
                                        <td className="col-margin"><img src="/static/images/iphone.png" width="70px" alt="" /></td>
                                        <td className="col-margin">{v.title}</td>
                                        <td className="col-margin">default product</td>
                                        <td className="col-margin">{v.price}</td>
                                        <td className="col-margin"><button className="add-to-cart-rm-btn">Remove</button></td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>


                </table>



            </div>
            <div className="add-to-cart-total-div">
                <p>Total: 250</p>
            </div>
        </>
    );
}

export default AddsItems;