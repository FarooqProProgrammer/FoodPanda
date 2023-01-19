export default function CartReducer(state = {}, action) {

    //console.log('user inside reducer', action.data)

    switch (action.type) {

        case 'SET_ADD_CART': return { ...state, Cart: action.data }

   
        default: return state

    }

}
