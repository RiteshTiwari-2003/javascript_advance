/**we just covered two topic in this file we first covered good part of callback and second covered bad part of call back
 * in first part we tell about how callback super importent when we take asynchronous property in javascript but in second part we tell about 
 * what -2 problem we will face by using callback
 * in second part we also hear about callback hell and inversion of control which are two major importent issue faces when uses the callback
 */
console.log("namaste javascript");
setTimeout(function(){
    console.log("javascript");
},5000);
console.log("aashiqi 2");// so callback function is used to bring asynchromnous property into the javascript
const card=["shoes","Kurta","Pants"];
/**for making ecommerse website we first make order then make payment so we take two backend api from backend 
 * one is for create order and second is for proc eed to payment
 */
//api.createOrder();
//api.proceedToPayment();
/**in these two api first we create order when we create order only after that we come to procreed the payment
 * so there is dependencies, then how to manage dependencies in the code , because there is async operation is'nt it, so 
 * callback comes into the picture,
 * , then call abck can write the code for this kind of behaviour,
 */
api.createOrder(card,function(){
    api.proceedToPayment(function(){
        api.createSummeryPage(function(){
            api.updateWallet();
        });
    
    });
});
/**and we hae give this callback function to createOrder api so this is responsibility of createOrder api to create order and call the function (callback function)
 * that way we can handle async operation in javascript
 * so we first create the order and after this done the payment and after this done the order summery page 
 * so after the payment we ceeate a summery page
 * so by the way we write above code by this format we maintain the order or asynchronous to one function execute after the another function complition only
 * 
 * so by the use of callback we maintain the order that proceed payment only occur when order is created and summery page only created when the order is created and payment is done
 * 
 * so first we create the order , after this we proced the payment and after this we create the order summery and i also want to update the wallet after the order summery
 * 
 * so we create one more api for update the wallet so we only update the wallet when the order summery is created
 * so whenever is large code base and many api and api is dependent upon other so it execute one after another so at this time what happen we end up failing into callback hell
 * 
 * 
 * so what is the callback hell so one callback inside another callback inside another api or some if statement or some random thing happening makes this callback hell
 * and code starts to grow horizentaly instead of vertically so this is the callback
 * this callback hell also known as pyramid of doom
 * 
 * 
 * now you see the inversion of control 
 * so inversion of control when you lose control over code when using callback
 * this in sound hear very complicated that how this lose control over code like in the below code:
 *  
 * 
 */
api.createOrder(card,function(){
    api.proceedPayment();
});
/**in these above code we xcreate a callback function and give it to the createOrder api.and now we as a developer sitting back in chill
 * and we are blidling trusting create order api how we are blidly trusting we gave this callback function to create order api ,
 * now we are accepted that create order api create order and after this call the function,is it not risky? it is very risky
 * how it is risky because this is the importent peace of our code and we gave the control of program to our create order api
 * now it is responsibilty of create order api to call our function proceed payment back,
 * and we are blindly trusting create order api, now we dont know create order api must have been in other service or some other developer wrote it or an intern wrote it.
 * right there could be a lot of bugs inside it
 * what if our callback function never called can happen you dont know, we are just blinding trusting ,
 * what if our callback function called twice because we dont k ow what happen in the api,
 * whenevr this call back function called by some other function, we give the control of function some other function or piece of code
 * and we dont know what happen behind the since now
 * this is the verry importent problem we face when we use callback,
 */
