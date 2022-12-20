const isLogged = true;
function userLoggedIn(isLogged){
return new Promise((resolve,reject)=>{
    if(isLogged){
        resolve(Math.random());
    }
    else {
         reject(console.error("User is not log in"));
        
    }
});
}

function secondFunction(number){
return new Promise((resolve,reject)=>{
  if(number>0.5){
     resolve(`{name:"John",age:24}`);
  }
  else{
     reject(console.error("You enter the wrong number"));
  }

 });
}

userLoggedIn(isLogged)
.then((val)=>{console.log(val);
return val;})
.then(secondFunction)
.then ((val)=>console.log(val))
.catch(()=>console.error("you got an error"))

