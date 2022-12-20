function printAsyncName(callback, name) {
    setTimeout(callback,1000);
    setTimeout(()=>console.log(name),2000);
  }
  
  
  const greeting = () => console.log('Hello');
  
  printAsyncName(greeting, 'John');
  
  
  //The callback function must be an arrow function, can you also explain why?
  // Because its simpler to use an arrow function.