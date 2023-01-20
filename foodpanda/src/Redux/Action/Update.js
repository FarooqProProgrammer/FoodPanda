function UpdateCart(user) {
    console.log(user);
    return {

        type: 'SET_UPDATE_CART',

        data: user

    }

}

export {
    UpdateCart
}