const INITIAL_STATE = {

}

const Reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
                case "UPDATEDATA":
                    return {
                        ...state,
                        username: action.username
        
                    }
                default:
                    return state
            }
}

export default Reducer;