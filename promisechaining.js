/**in this video we tell how to create the promise 
 * how can we handle in promise 
 * live example of promise chaining
 */
const cart=["shoes","pants","kurta"];
const promise=createOrder(cart);
promise.then(function(orderId){console.log(orderId);})
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
function validateCart(cart){
    return true;

}