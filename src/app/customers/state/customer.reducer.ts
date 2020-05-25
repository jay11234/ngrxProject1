const initialState = {
    customers: [{
        name: "Eden John",
        phone: "02222222",
        address: "15 linch field",
        membership: "Platinum",
        id: 1
    }],
    loading: false,
    loaded: true
}

export function CustomerReducer(state = initialState, action) {
    switch (action.type) {
        case "LOAD_CUSTOMERS": {
            return {
                ...state,
                loading: true,
                loaded: false
            }
        }
        default: {
            return state;
        }
    }
}