import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
import { useSelector } from "react-redux";

const Product = () => {

    const state = useSelector(state => state);

    

    return (
        <>
            <div className="main-product">
                <Navbar />
                    <div className="card-flex-div">
                        {
                            state.productsLists.map((val, ind) => {
                                return (
                                    <Cards key={ind} title={val.title} description={val.description} price={val.price} id={val.id} varients={val.varients}/>
                                );
                            })

                        }
                        {/* <Cards /> */}
                    </div>
            </div>
        </>
    );
}

export default Product;