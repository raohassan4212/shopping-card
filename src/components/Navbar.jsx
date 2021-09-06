const Navbar = () => {
    return (
        <div className='container-fluid'>
            <nav className='main-nav'>
                <span className="btn-span">
                <button className="nav-btn nav-btn-hover-2">Shopping Home</button>
                <button className="nav-btn nav-btn-hover">Products</button>
                </span>
                <span className="btn-span">
                <button className="nav-btn nav-btn-hover">Cart</button>
                </span>
            </nav>
        </div>
    );
}

export default Navbar;