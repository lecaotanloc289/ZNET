const initialState = {
    isAuth: false,
    data: {}
}
const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state, isAuth: true, data: action.payload
            }

        default: return state
    }
}

export default loginReducer