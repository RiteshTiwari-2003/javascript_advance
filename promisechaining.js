/**in this video we tell how to create the promise 
 * how can we handle in promise 
 * live example of promise chaining
 */
const cart=["shoes","pants","kurta"];
const promise=createOrder(cart);
promise.then(function(orderId){proceedToPayment(orderId);})
/**how does we return promise from createorder api then we have knowledge about thaty how we create order and send or return the pronise to the consumer */