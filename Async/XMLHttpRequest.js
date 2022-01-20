// XMLHttpRequest is the old way to work with AJAX


// Instance of XMLHttpRequest object
const xmlRequest = new XMLHttpRequest();

// Creating the request
xmlRequest.open('GET', 'https://reqres.in/api/users?page=1');

// Changing the response type (String is default, and don't work to parse with response.json())
xmlRequest.responseType = 'json';

// Send the GET REQUEST
xmlRequest.send();

// Sending params on POST REQUEST
// xmlRequest.send("firstName=Leonardo&lastName=Estevao");

// when request load, do:
xmlRequest.onload = function () {
        const obj = xmlRequest.response;
        console.log(obj.data);
}

// When state changes, do:
xmlRequest.onreadystatechange = function () {
    // Do anything
}

// readyState:
    // 0: request not initialized
    // 1: server connection established
    // 2: request received
    // 3: processing request
    // 4: request finished and response is ready

// status:
    // 200: "OK"
    // 403: "Forbidden"
    // 404: "Not Found"