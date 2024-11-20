/**promises are uses to handle asynchronus operation in javascript */
const cart=["shoes","pants","kurta"];
//createOrder(cart);//create order api return orderId
//proceedToPayment(orderId);//this  is executed after create order api
/**so now check how we write this code using callback using callback we bring asynchronous functioon and property in code
 * 
 */
createOrder(cart,function(orderId){
    proceedToPayment(orderId);
});
/**now this is responsibility of crweate order api to create order and execute or call the callback function after that
 * but in this very importent issue we faces which is inversion of control, because we blidly trusted on create order api for call the callback function 
 * probably it never call or call twice who know, because this create order api can be writen by some other developer on currently in some other service 
 * and we cant just blindly trust these api, so we are just giving control of our program to other code ,
 * so letus see how to handle  this problem using promises, 
 * so we create createOrder api as that it no longeer take call back function in it hand, it just take as a parameter which is cart
 * it will return a promise.
 * like 
 * const promise=createOrder(cart);
 * // return {data:undefined};//undefined means empty value
 * whenever we write above code  this createorder api return a promise,and a promisse is nothing but a empty object
 * empty object with some data value in it .in it that data value hold whatever this api return to us.
 * now this create order api a async operation it takes time but we dont know how much time it take,but as soon line 19 is executed it return a object.
 * 
 * with data with some empty undefiend property, it assume that it return some empty object with some undefined data, and after 3 second 4 second at whatever time this createorder async fiunction executed
 * it fill the value at the place of undefined
 * 
 * 
 */

