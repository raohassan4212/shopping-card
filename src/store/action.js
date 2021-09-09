function AddProduct(product) {
    return (dispatch) => {
        dispatch({type: "ADDPRODUCT",addProducts: [product]})
    }
}

export {
    AddProduct
}