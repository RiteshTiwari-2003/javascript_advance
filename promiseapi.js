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
 * now what will happen with p1 and p3 now 
 * so whenever the promise is created you can not distroy promise and remove promise or cancel the promise these promise eventually reject or accept it all depend on their fate,
 * but promise.all rejected as soon as any of the promise rejected ,
 * ut what if i want to result of other promise success means if any one promise rejected but other promise selected then how i print other promise succeess
 * 
 * like if 10 api call result one is rehjected but i want other nine successfully result.
 * so in that case we have one more promise api to handle thst case is promise.allsetteled ([p1,p2,p3]) if all of them get successful (p1,p2, and p3)
 * p1 get 3 second , p2 get 1 second p3 get 2 second, so after 3 second all promise get result [val1,val2,val3] 
 * 
 * but what if my p2 get rejected , it get rejected in 1 second , it will still wait for all promise to fullfill, after 3 second even after one promise get failed 
 * it will wait for all the promise complete, after 1 second p2 promise get failed after 2 second p3 get success 
 * 
 * so it will get three secend to all these got setteled irrespective of success or failure it will give you all the failure 
 * it will give you val1 and err2 and val3 as a result, the output over here always be a array of the same number of element that you pass as the input
 * so basically this both promise.all and promise.allsettled are same but error handling of these is only differnet 
 * 
 * promise.all kind a fail fast, so even if one fail it will quicly give a result that one fail, and
 * in promise.allsetteled is just wait for all promise result and then we will take action acordingly 
 * 
 * just like it also depend upon use case also suppose you made 5 api call and if you really needed the result of all these five api calls to show a web page 
 * then you will use promise.all but suppose if you are showing five cards on your page and these five cards are populated by five api calls one of them fails just show four cards 
 * in that caase you use promise.allsetteled so thre are differrent use cases promise.any promise.all promise.allsetteled
 * use according to your use.
 * 
 * 3. 3rd promise api that maximum people use is promise.race
 * 
 * so promise.race take again array of promise [p1,p2,p3] , its race now , the person who will finish first will be the winner , the person who will finish the race be winner .
 * suppose p1 take 3 second , p2 takes 1 second , p3 takes 2 second 
 * as soon as first promise resolved that is after 1 second then what will be you do after 1 second it will give me the result of val2 
 * let me know this is not array this is a value val2 i represent around small bracket , this is the value of the first settled promise 
 * 
 * after 1 second whatever the value p2 will have give that value as a val2
 * let suppose p1 take 3 second p2 take 5 second and p3 take 2 second then after 3 second the p3 givee the value val3
 * 
 * so i am trying to say it is the race wahtever promise setteled first you will get the result .
 * now importent question when the first promise get successful what if the first promise get error, what if this promise got rejected 
 * what if after 2 second p3 will fail, what will hapeen error will be thrown, this error come from p3, so what will happen it will return the result
 * of first setteked promise
 * 
 * 
 * so whether it's kind of like a race first promice whatever is resolved in the array whether it is success whether it is failure it will throw it will return a result 
 * it will not wait for other promise to finish.
 * 
 * lets go for next promise api it is promise.any
 * it again take list of promise and array of promises and [p1,p2,p3] and we have this array of promises , now it is verymuch similer to race ,whenever the first promise got 
 * resolved the only different is it will wait for the first promise to get successful,
 * in promise.race if tou get first result either success or failure it will return the result 
 * but in promise.any it will wait for first success result
 * but what if every thing hre fail all the api called fail then the return result will be an aggregated error when all of them will be failed it return will be error obiuously
 * but this time it will aggregate error and this aggregate error will be array of all the three error[err1,err2,err3]
 */