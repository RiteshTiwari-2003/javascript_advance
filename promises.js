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
 * it fill the value at the place of undefined, this promise data field automatically after the this async operation done, and at the undefined basically which is a empty data is replaced by 
 * some data like orderdetails,
 * once we have orderdetails how we continue the program forward, how to we proceed to payment.
 * 
 * now what will we do , we attach callback function to the promise object
 * 
 * 
 * promise.then(function (orderId){
 * proceedToPayment(orderId)});
 * 
 * 
 * 
 * 
 * 
 */
//and we can say that this peace of code is lot of better 
const promise=createOrder(cart);
promise.then(function (orderId){
    proceedToPayment(orderId)}); // then 
    //this function like
    createOrder(cart,function(orderId){
        proceedToPayment(orderId);
    });

/**in above case we attach the callback function to the promise object and in second one old one we were passes the callbback function to the another function 
 * so there is difference between the word attaching and passing in old one we pass the callback funtion to the another function api,
 * but in new one we attach the caqllback function in the promise object
 * in old one proceedpayment dependent on the another function api which is create order api but in new one this control is taken by ourself.
 * in new one with the help of promise the createorder apin the do only its job,
 * and it will fill the promise object with the data whatever it return, and as soon as the promise data filled with data that returened by createorder function after that it immediate execute or automatically call the callback funcction or the proceedpayment api
 * 
 * and now control of program with us and promises gives this control to us and promises give us this trust and garantee that it will call this callback function whenever there is data inside the promise object
 * and in earlier piece of code we have lot of doubts that what hve this createorder api might have call the function twice thrice and might never call it
 * promise handle it peacefully
 * in new one as soon as the data inside the promise it call the callback function and proceed payment definetly
 */



