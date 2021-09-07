import {BrowserRouter as Router, Route,Switch} from "react-router-dom";
import Home from "../screens/Home";
import Product from "../screens/Product";
import ProductDetails from "../screens/ProductsDetails";

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/product" component={Product}/>
                <Route exact path="/product-details/:id" component={ProductDetails}/>
            </Switch>
        </Router>
    );
}

export default AppRouter;