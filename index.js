var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(string) {
  console.log(`${string} has been added to your cart.`)
  var string = {[string]: Math.floor(Math.random() * 100)}
  cart.push(string)
  if (cart.length > 0) {
    return cart
  }
 // write your code here
}

function viewCart() {
  var cartTotal =  cart[0] + cart[i]
  // write your code here
}

function total() {
    var total = 0
    for (let i = 0; i < cart.length; i++) {
      total += cart[i][Object.keys(cart[i])[0]]
  }
   return total
}

  // write your code here

function removeFromCart(string) {
  for (let i = 0; cart.length > i; i++) {
    if (cart[i].hasOwnProperty(string)) {
      cart.splice(i, 1)
    } else if (cart.hasOwnProperty(string) === false) {
      console.log(`That item is not in your cart.`)}
  }
}
  // write your code here

function placeOrder(cardNumber) {
  if (cardNumber === NaN)
    { console.log (`Sorry, we don't have a credit card on file for you.`)
  }  else {console.log (`Your total cost is $${total()}, which will be be charged to the card ${cardNumber}.`)
  }
  while (cart.length > 0 ) {
    cart.push(cart[0])
  }
  return cart
}
