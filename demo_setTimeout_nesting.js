//without nesting
setTimeout(() => {
    document.body.style.backgroundColor = 'red'
}, 1000)

setTimeout(() => {
    document.body.style.backgroundColor = 'green'
}, 2000)

setTimeout(() => {
    document.body.style.backgroundColor = 'blue'
}, 3000)

//with nesting
setTimeout(() => {
    document.body.style.backgroundColor = 'red';
    setTimeout(() => {
        document.body.style.backgroundColor = 'green';
        setTimeout(() => {
            document.body.style.backgroundColor = 'blue'
        }, 1000)
    }, 1000)
}, 1000)

//Creating a Generic Function for the above
/* const delayedColorChange = (newColor, delay) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
    }, delay)
} */

//adding a function parameter doNext() for callbacks
const delayedColorChange = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
    }, delay)
}

delayedColorChange('red', 1000, () => {
    delayedColorChange('orange', 1000, () => {
        delayedColorChange('yellow', 1000, () => {
            delayedColorChange('green', 1000, () => {
                delayedColorChange('blue', 1000, () => {
                })
            })
        })
    })
})

