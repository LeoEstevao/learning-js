// A promise, is a function that will be processed asynchronous, and return a resolve (succeeded), or reject (failed, but will not stop your application)
const datas = new Promise( (resolve, reject ) => {
    // Consuming an extern API
    fetch('https://reqres.in/api/users?page=1').then( res => {

    // We have to return RESOLVE() or REJECT() manually, because even if they are both processed in this block, the promise will only return one value, and the first one processed will be considered in functions that recognized 'success' and 'error'

    if(res.status === 200)
        resolve(res.json())
    reject('Data not found! Code:' + res.status)

    })
})


// Receives the promise and:
datas.then( result => {
    // If the return is a resolve():
    console.log(result.data)
}).catch( err => {
    // IF the return is a reject()
    console.log(err)
}).finally( () => {
    // (Optional) Doesn't matter the return, always do this!
    console.log('Always doing this!');
})


// We can also call a function that will return a Promise(), like:
function myPromise () {
    return new Promise( (resolve, reject) => {
        fetch('https://reqres.in/api/users?page=1').then( res => {
            if(res.status === 200)
                resolve(res.json())
            reject('Data not found! Code:' + res.status)
        })
    })
}

myPromise().then( results => {
    // resolve():
    console.log(results.data)
}).catch( error => {
    // reject()
    console.log(error)
}).finally( () => {
    // (Optional) always do this!
    console.log('Always doing this!')
})
