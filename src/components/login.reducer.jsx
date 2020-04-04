export const initialState = {
    username: '',
    password: '',
    error: '',
    isLoading: false,
    isLoggedIn: false,
  };

export function loginReducer(state, action) {
    switch(action.type) {
        case 'login': 
            return {
                ...state,
                isLoading: true,
            }
        case 'field': 
            return {
                ...state,
                [action.fieldName]: action.fieldValue,
            }
        case 'failure': 
            return {
                ...state,
                isLoggedIn: false,
                isLoading: false,
                error: 'try again',
            }
        case 'success': 
            return {
                ...state,
                isLoggedIn: true,
                isLoading: false,
                error: '',
                password: '',
            }
        case 'logout': 
            return {
                ...state,
                isLoggedIn: false,
                isLoading: false,
                error: '',
                username: '',
                password: '',
            }
        default:
            return state
    }
}