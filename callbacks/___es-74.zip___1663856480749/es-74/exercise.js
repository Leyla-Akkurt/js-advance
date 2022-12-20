function repeatHello(callback){
    setInterval(callback,1000);
}
const callback= () => {console.log("Hello")}

repeatHello(callback);

// Because its simpler to use an arrow function.