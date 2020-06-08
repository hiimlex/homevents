const INITIAL_STATE = {
    userEmail: "",
    userLogged: false,
};

function usuarioReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "LOG_IN":
            return {
                ...state,
                userLogged: true,
                userEmail: action.userEmail,
            };
        case "LOG_OUT":
            return {
                ...state,
                userLogged: false,
                userEmail: "",
            };
        default:
            return state;
    }
}

export default usuarioReducer;
