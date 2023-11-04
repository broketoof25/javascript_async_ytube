const fakeRequestPromise = (url) => {
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

fakeRequestPromise("yelp.com/api/coffee/page1")
    .then((data) => {
        console.log("It worked!! (pg1")
        console.log(data)
        return fakeRequestPromise("yelo.com/coffee/page2")
    })
    .then((data) => {
        console.log("It worked!! (pg2")
        console.log(data)
        return fakeRequestPromise("yelo.com/coffee/page3")
    })
    .then((data) => {
        console.log("It worked!! (pg3")
        console.log(data)
    })
    .catch(() => {
        console.log("Oh no, a request failed!")
    })