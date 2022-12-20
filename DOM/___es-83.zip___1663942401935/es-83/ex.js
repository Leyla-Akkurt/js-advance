const call = {
    caller: "Vito",
    says: () => {
    console.log(`Hey, ${this.caller} just called`);
    }
    };
    
    call.says();
/*
    const call = {
        caller: "Vito",
        says: function() {
        console.log(`Hey, ${this.caller} just called`);
        }
        };
        call.says();
        console.log(typeof NaN);*/
