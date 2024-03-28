const getStoredCart = ()=>{
    const storedCartString = localStorage.getItem('cart');
    if(storedCartString){
        return JSON.parse(storedCartString)
    }
    return [];
}
// Add to local storage
const saveCartTols = cart=>{
    const cartStringfield = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringfield);
}


//Add item the cart
const addToLS = id =>{
    const cart = getStoredCart();
    cart.push(id);
    //save cart
    saveCartTols(cart);
}

const removeFromLS = id =>{
    const cart = getStoredCart();
    const remaining = cart.filter(idx => idx!==id);
    saveCartTols(remaining);
}

export {addToLS, getStoredCart, removeFromLS}