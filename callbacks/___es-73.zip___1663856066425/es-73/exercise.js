//traditional function syntax concepts like callback hells, promise chaining would eventually become more difficult to understand, or even writing would become a little complex
function printAsyncName(callback,name){
    setTimeout(callback,1000);
    setTimeout(()=>console.log(name),2000);
}
const callback= () => console.log("Hello");
printAsyncName(callback,"John")