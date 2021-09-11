
function AddProduct(product) {
    return (dispatch) => {
        dispatch({type: "ADDPRODUCT",cardProduct: product})
    }
}

function RMCardProduct(id) {
    return (dispatch) => {
        dispatch({type: "DELETEPRODUCT",payload: id})
    }
}


export {
    AddProduct,
    RMCardProduct
}