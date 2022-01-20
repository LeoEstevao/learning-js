// Fetch() Will fetch a url or file and return an object with server and status info

// PS: Fetch() API is not yet supported by nodejs, so we need to install a node package, or just use our browser (rendered by html file)
fetch('https://reqres.in/api/users?page=1').then( res => {
    // To datas be 'readable', we need to parse to JSON (json()). 
        // This will be done as a promise, so we need first to read the data in another async output, because if we try it here, the response will not be ready to be processed
    return res.json();
}).then( dataRes => {
    // From now on, we have the data readable and ready to be used.
    const data = dataRes.data;

    document.getElementById('output').innerHTML = JSON.stringify(data);

    console.log(dataRes);
    console.log(data)
});
