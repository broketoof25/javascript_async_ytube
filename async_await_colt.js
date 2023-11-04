/* const sing = async () => {
    return "La La La La"
}

sing().then((data) => {
    console.log("Promise resolved with: ", data)
}) */

//If a Promise is rejected
const sing = async () => {
    throw "Oh no, problem"
    return "La La La La"
}

sing().then((data) => {
    console.log("Promise resolved with: ", data)
})
.catch(err => {
    console.log("oh no, promise rejected")
    console.log(err)
})

//defining a function 
const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        })
    }, delay)
} 

//write a async funciton with await
async function rainbow() {
    await delayedColorChange("red", 1000)
    await delayedColorChange("orange", 1000)
    await delayedColorChange("yellow", 1000)
    await delayedColorChange("green", 1000)
    await delayedColorChange("blue", 1000)
}

//Error Handling
const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject("Connection Timeout")
            }
            else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

async function makeTwoRequests() {
    try {
        let data1 = await fakeRequest("/page1")
        console.log(data1)
        let data2 = await fakeRequest("/page2")
        console.log(data2)
    }
    catch(e) {
        console.log("caught an error")
        console.log("error is: ", e)
    }
}