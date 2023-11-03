//create an OBJECT that holds all the raw materials
let stocks = {
    fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
}


//using arrow functions
let order = (fruit_name, call_production) => {
    setTimeout(() => {
        console.log(`${stocks.fruits[fruit_name]} was ordered`);
        call_production();
    }, 2000);
    
}

let production = () => {
    setTimeout(() => {
        console.log("Production has started");
        setTimeout(() => {
            console.log("The fruit has been chopped");
            setTimeout(() => {
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
                setTimeout(() => {
                    console.log("The machine was started");
                    setTimeout(() => {
                        console.log(`${stocks.holder[0]} was selected`);  
                        setTimeout(() => {
                            console.log(`${stocks.toppings[0]} was added as toppings`);
                            setTimeout(() => {
                                console.log("Serve Ice Cream");
                            }, 2000)
                        }, 3000)
                    }, 2000)
                }, 1000)
            }, 1000)
        }, 2000)
    }, 0);
};
order(0,production);
