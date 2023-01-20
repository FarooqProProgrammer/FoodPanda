export default function UpdateCartReducer(state = {}, action) {

    //console.log('user inside reducer', action.data)

    switch (action.type) {

        case 'SET_UPDATE_CART': return { ...state, update: action.data }

   
        default: return state

    }

}
