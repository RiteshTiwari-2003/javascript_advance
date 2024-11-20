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
 * in new one as soon as the data inside the promise it call the callback function and proceed payment definetly, and it will call it once and only once 
 * 
 */

/**now we have see the how the promise object look actually
 */
const GITHUB_API="https://api.github.com/users/akshaymarch7";
const user=fetch(GITHUB_API); // as soon this executed a promise object come into user variable , it return us a promise
/**on console when we put debugger on line 67 then already before executing there is key value come as like user : undefined in script scope and global scope already present also
 * and as soon we execute this we get a promise object,in promise objectthere is the prototype present and also promisestate key present which value is "pending" 
 * there is two seperate thing one is promisestate and one is promiseresult promiseresult show whatever result it returning and promise state till whenever the data is not find by promise object till that time promise object show pending status but as soon the data return to the promise the status changed into fullfilled state
 * but when we prin console.log(user); it print on console promise <pending> but if we expend this it show promisestatus as fullfilled
 * it show pending and on opening it also show fullfilled but why its reason  is 
 * when data fetch the data on line 67 then it took some time because it is async operation and it take time to fetch the data from the website and bring it here but javascript does not wait for anyone so it move forward so because of this it show pending but if we open this then 
 * there it shows current status so pending status till now become fullfilled status , and in promise object promiseresult value which is undefined when from data no any reponse come or when status in pending status at that time
 * the value of promiseresult shown undefined but at this current time when data return from fetch function then promiseresult value become response which is an object
 * and in these various key present
 */
// now some callback attach with this promise object ;like this
user.then(function(data){
    console.log(data);
});//in these the data is just that thing which present in promise object promiseresult section, and thats how we attach callback to the promise, when i save this we find data as a response object on console

/**promise object is the spacial object in javascript and this is garantee that promise object only resolve once either a success or faliure 
 * either it will fullfill orr rejected also 
 * there is only three state inside the promise one is pending state one is fullfilled state and one is rejected state
 * 
 * and one more thing that promise object are immutable what does that means whenever data inside the promise object we can pass only here and there
 * and dont have to worry about someone can mutate the data, this is sos sos so great as adeveloper 
 * 
 * 
 */



