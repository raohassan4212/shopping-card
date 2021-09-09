import Navbar from "../components/Navbar";
import AddsItems from "../components/AddsItems";

const AddToCart = (prop) => {
    const { title, price } = prop.location.state;
    console.log(prop);
    return (
        <div className="add-to-cart-main-div">
            <Navbar />
            <AddsItems title={title} price={price}/>
        </div>
    );
}

export default AddToCart;