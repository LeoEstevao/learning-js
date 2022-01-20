// We use Try/Catch when our code can return unexpected errors or
// When we want information about returned errors

try {
    // TRY a code block
    issoVaiErrar()
} catch (error) {
    // If ERROR, do this
    console.log('Error executing function. Error: ', error );
    // throw new ReferenceError(error);
} finally {
    // No matter what, AlWAYS do this
    console.log('Finishing test');
}
// PS: Finally is OPTIONAL


// We normally use throw, when we are expecting a specific error
    // Every error has a type(name) and a description(message) that we can inform
    // Some error types
        // Error, RangeError, ReferenceError, SyntaxError, TypeError, URIError
    // Descriptions and message are customizable, or we can pass the default message (in case the function returns a default message error, like catch)
function errorHappening(a, b){
    if(typeof(a) != 'number' || typeof(b) != 'number')
        // PS: we can throw a 'new' error to return a specific error (with type and message to our developers)
        throw new TypeError('Values must be numeric');
}
errorHappening('a', 5);