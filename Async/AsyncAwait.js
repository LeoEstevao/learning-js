// Async functions can work as asynchronous, since we use await in 
    // Ps: await can only be used, inside async functions.
async function asyncAwait () {
    // This command will finish, after the promise (fetch) return the request
    const dataFetch = await fetch('https://reqres.in/api/users?page=1');
    datas = await dataFetch.json()
    console.log(datas)
}

asyncAwait();