/**in this video we tell how to create the promise 
 * how can we handle in promise 
 * live example of promise chaining
 */
const cart=["shoes","pants","kurta"];
const promise=createOrder(cart);
console.log(promise);//when you see output on console Promise {<pending>} show why here see pending because in line 6 ceate order take 5 second to resolve means it return promise after 5 second from it is caqlled at that tiem js not waiting for it and come on this line so here is shown pending because at that time there is pending, so when we run the output Promise {<pending>} come and after 5 second in next line 12345 printed
promise.then(function(orderId){console.log(orderId);
    return orderId;
}).then(function(){
    return proceedToPayment(orderId);
}).then(function(paymentInfo){
    console.log(paymentInfo);

}).catch(function(err){
    console.log(err.message);// now on console printed the class is not ready
}); // now we attch faliure callback also to the promise object
/**how does we return promise from createorder api then we have knowledge about thaty how we create order and send or return the pronise to the consumer 
 * this is the consumer part now we create producing part 
 * now we will try to write own create order function, so create the function create order
*/
function createOrder(cart){
    // this return the promise 
    //now we create the promise , to cretae the promise we use promise constructor
    const pr=new Promise(function(resolve,reject){
        //create order we dont have database so here we will write to call the database or we will write validate cart
        //validate cart
        //so we diont go for cretae whole order we only see that validate the cart then you will make a api call to create an order then youn will get an order id that you will return as a success or faliure
        if(!validateCart(cart)){
            const err=new Error("this is not valid cart");
            reject(err);

        }
        //logic for create order
        const orderId="12345";
        if(orderId){
            //promise only give two things promise either resolve or fullfilled or promise is rejected
            // we resolve the promise after 5 second because of maintaining tha asynchronity in code
            setTimeout(function(){
                resolve(orderId);

            },5000);//now when you see output on console after 5 second the orderId should printed 

           
        }

    });
    //now how we do call this promise constructor, this promise constructor a parameter function which function take two parameter resolve and reject and these resolve and reject are the function whcih 
    //are given by javascript to build promises , it is not something which we pass in this is given by javascript by design of promise api
    //what will we do inside the promise is write our logic of handling whatever we need inside this this create order function, now see what createorder function do
    //we first take cart as a input and create order



    return pr;

}
function proceedToPayment(orderId){
    return new Promise(function(resolve,reject){
        resolve("payment successfull");
    });
}
function validateCart(cart){
    return true;

}
// so how we reject the promise for his you need to return false from validatecart functon, in cosnole in red color error shown now fro gracefully handle this error
// then now as a consumer we just written success part like in line 8 , but what if it fail how do we write the code so now for that promise also comes
//with one more function thst is known as catch

/**now we checking promise chaining and also add proceedToPayment method  
 * we add using then keyword also proceedToPayment proceedToPayment also return promise
 * in promise chaining either each function return promise 0or data
*/
