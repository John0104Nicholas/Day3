// XML HTTP Request : It is used to interact with servers via API.
// Why : To get the data from the Server via API

// Step 01: Create a XHR Object
// var variableName = userdefined your choice
var request = new XMLHttpRequest();
// Step 02: Specify the API
request.open('GET', 'https://restcountries.com/v2/all');
// Step 03: Send the request to the server
request.send();
// Step 04: Define what happens when the response comes back (onload)
request.onload = function() {
    var result = JSON.parse(request.response);
    for (var i in result) {
    console.log(result[i].name);
        console.log(result[i].region);
        console.log(result[i].subregion);
        console.log(result[i].population);
    }
}
