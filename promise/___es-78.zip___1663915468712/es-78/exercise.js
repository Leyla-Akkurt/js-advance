
const isLogged = true;
function userLoggedIn(isLogged){
return new Promise((resolve,reject)=>{
    if(isLogged){
        resolve(Math.random());
    }
    else {
         reject(new Error("User is not log in"));
        
    }
});
}

function secondFunction(number){
return new Promise((resolve,reject)=>{
  if(number>0.5){
     resolve(`{name:"John",age:24}`);
  }
  else{
     reject(new Error("You enter the wrong number"));
  }

 });
}

userLoggedIn(isLogged)
.then((val)=>{console.log(val);
return val;})
.then(secondFunction)
.then ((val)=>console.log(val))
.catch((err)=>console.error(err))
.finally(()=>console.log("Process complete"))

