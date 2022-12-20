
function repeatHello(callback){
    let id=setInterval(callback,1000);
    setTimeout(()=>clearInterval(id),5000);
}

const callback = () => console.log("Hello");

repeatHello(callback);

// Because its simpler to use an arrow function.