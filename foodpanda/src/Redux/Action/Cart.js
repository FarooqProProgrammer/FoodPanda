function Cart(user) {
    console.log(user);
    return {

        type: 'SET_ADD_CART',

        data: user

    }

}

export {
    Cart
}