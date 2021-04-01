const reducer = (accumulator, currentItem) => accumulator + currentItem.price;

const getCartTotal = (cart) => cart?.reduce(reducer, 0);

export default getCartTotal;
