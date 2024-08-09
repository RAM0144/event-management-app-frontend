const initialState = {
    bookings: [], 
    
}

function cartReducer(state = initialState, action) {
    switch (action.type) {
        case "cart_add":
            return {
              ...state,
              bookings: [...state.bookings, action.book],  
            };
        case "cart_remove":
            return {
                ...state,
                bookings: state.bookings.toSpliced(action.index, 1),
            };
        case "cart_clear":
            return {
                bookings: [],
            }    
        default:
            return state;        
    }
}

export default cartReducer;