/**in this article we going to know about all promise api
 * so first promise api that we are going to learn is 
 * promise all()
 * so why this promise.all is used and what is the contratc for it me tell you that suppose you have to make parallel api call and get the result it is very
 * importent use case very populer use case 
 * what happen lets suppose you have 10 ids let me taken hypothetical example there are 10 ids call it ass user ids and you want you have api call for user info and 
 * you want to make 10 parallel api call and get the result from 10 differnent user how will you do that
 * so when you will use promise all like api so now it is used to handle multiple promises together okay if there are multiple api calls 
 * multiple promise it will handle that, how the promise .all the contract of promise.all is it takes the an array of promises as a input 
 * 
 * so i am calling this aas array but when you read this on documentation it is iterable
 * so what you pass inside promise.all() a iterable and aq array is iterable, so it will take an array of promises 
 * assume that you have three promises three api calls or three promises you canhave multiple as much number as you want to ,
 * but right now i just concerned about three , suppose there are three promises p1 , p2, p3, when you call promise.all and give three parameter p1 , p2, p3 then it will make three parallel api call
 * and get  the result
 * lets suppose p1 take 3 second to come , p2 takes 1 second and p3 takes 2 second,
 * and suppose all of them success means all the api ca;; success they did not fail, so in that case what will happen so output of promise.all will be an array
 * with the result of all these promise
 * what did promise.all do it make api call it collect all the result,a nd it will give it inside the array and it will give it back
 * just like array.map you give a array and return a array , so promise.a will return the array with valuue of all these result val1, val2, val3
 * this val1 comes from p1 and val2 comes from p2 and val 3 comes from p3, how much time these api takes ,
 * the first api takes 3 second , second api took 1 second and third api took 2 second.
 * but final promise.all api takes 3 second basically after three second this will give me this result : [val1,val2,val3]
 * because promise.all makes all three api calls parallel but it will wait for all of them to finish, this is importent thing it will wait for 
 * all of them to finish
 * it will collect the result and it will give you the result , this will be the output here .
 * but what if any of these promise get fail,right now all the promises were geting fullfilled they were getting success, they were getting resolved what idf any of these promise rejected 
 * then promise .all work differently 
 * again we see that similer type of example where promise.all but this time what happen it again has these three promises p1,p2 and p3 
 * but this time one of the promise get rejected , letus take same kind of example p1 take 3 second p2 take 1second p3 take 2 second
 * but what happen after 1 second the p2 get rejected , what will happen so listen to me vary carefully takedown note in your notebook 
 * as soon as any of these promise get rejected promise.all will throw an error , promise . all will also be a failure and whatever error it will get 
 * from that promise , it will throw the same error as its result 
 * okay the output will be a error and it will be same error which return by p2,
 * 
 * immediatly as soon as error occur means after 1 second you will see an error , it will not even wait for other promises to get successfull
 * or rejected or whatever , right now it is just tone second , and it will throw an error 
 */