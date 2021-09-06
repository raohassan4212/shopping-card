import {BrowserRouter as Router, Route,Switch} from "react-router-dom";
import Home from "../screens/Home";
import Product from "../screens/Product";

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/product" component={Product}/>
            </Switch>
        </Router>
    );
}

export default AppRouter;