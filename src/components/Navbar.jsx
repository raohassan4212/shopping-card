import { useHistory } from "react-router-dom";

const Navbar = () => {

    const history = useHistory();

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
                <button onClick={gotoAddToCart} className="nav-btn nav-btn-hover">Cart</button>
                </span>
            </nav>
        </div>
    );
}

export default Navbar;