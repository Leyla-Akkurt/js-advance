const number = 7;
function isValid(number){
return new Promise((resolve,reject)=>{
    if(number>10){
        return resolve(number);
    }
    else{
        reject(new Error("Number is not greater than 10"))
    }
});
}
isValid(number)
.then((val)=>{console.log(val);
return val;})
.catch((err)=>console.error(err));