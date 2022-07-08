// promises
// resolve or reject

let myPromise = new Promise((res,rej) => {
    let watchTime=3;
    if(watchTime >1) {
        res("promise fullfilled")
    }
})

myPromise.then(msg => console.log("do dat"))