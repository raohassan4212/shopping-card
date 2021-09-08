import Navbar from "../components/Navbar";

const AddToCart = () => {
    return (
        <div className="add-to-cart-main-div">
            <Navbar />

            <div className="add-to-cart-sub-div" >
                <table className="add-to-cart-table">
                    <thead>
                        <tr>
                            <th className="main-th">Add to cart</th>
                        </tr>
                        <tr>
                            <th>Product   </th>
                            <th>Product Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Items Remove</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td><img src="/static/images/iphone.png" width="70px" alt="" /></td>
                            <td>iphone x</td>
                            <td>default product</td>
                            <td>100</td>
                            <td><button>Remove</button></td>
                        </tr>

                        <tr>
                            <td><img src="/static/images/iphone.png" width="70px" alt="" /></td>
                            <td>iphone x</td>
                            <td>default product</td>
                            <td>100</td>
                            <td><button>Remove</button></td>
                        </tr>
                    </tbody>


                </table>
            </div>
        </div>
    );
}

export default AddToCart;