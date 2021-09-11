import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";


const Navbar = () => {

    const history = useHistory();
    const state = useSelector(state => state);

    const gotoProductPage = () => {
        history.push("/product")
    }

    const gotoHomePage = () => {
        history.push("/")
    }

    const gotoAddToCart = () => {
        history.push("/add-to-cart")
    }

    return (
        <div className='container-fluid main-nav-div'>
            <nav className='main-nav'>
                <span className="btn-span">
                <button onClick={gotoHomePage} className="nav-btn nav-btn-hover-2">Shopping Home</button>
                <button onClick={gotoProductPage} className="nav-btn nav-btn-hover">Products</button>
                </span>
                <span className="btn-span">
                <button onClick={gotoAddToCart} className="nav-btn nav-btn-hover"><span>Cart</span><span className="add-cart-number">{state.cardProduct.length}</span></button>
                </span>
            </nav>
        </div>
    );
}

export default Navbar;