export const initialState = {
    basket:[]
}

function reducer(state,action)
{
    switch(action.type)
    {
        case "ADD_TO_BASKET":
            return {state};
        case "REMOVE_FROM_BASKET":
            break;
        default:
            return state;
            
    }
}

export default reducer;