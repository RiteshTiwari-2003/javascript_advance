/**promises are uses to handle asynchronus operation in javascript */
const cart=["shoes","pants","kurta"];
//createOrder(cart);//create order api return orderId
//proceedToPayment(orderId);//this  is executed after create order api
/**so now check how we write this code using callback using callback we bring asynchronous functioon and property in code
 * 
 */
createOrder(cart,function(){
    proceedToPayment(orderId);
});
/**now this is responsibility of crweate order api to create order and execute or call the callback function after that
 * but in this very importent issue we faces which is inversion of control
 * 
 */

