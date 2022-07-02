export class Errors{
    constructor(errorElementId){
        this.errorElement = document.getElementById(errorElementId);
    }

    handleError(error, callback){
        //parse out the error code from the error string
        const code = error.message.substring(0,3);
        this.displayError(error);
        // if it is something related to authentication then show the login
        if(code == 500 || code == 401) {
            callback();
        }
        console.log(code);
    }

    displayError(error){
        this.errorElement.innerHTML = error.message;
        this.errorElement.classList.remove('hidden');
    }

    clearError(){
        this.errorElement.innerHTML = '';
        this.errorElement.classList.add('hidden')
    }
}

//Server address
const baseURL = 'http://127.0.0.1:5500/';
//helper function to make an https request with fetch
// returns a json object

export async function makeRequest(
    url,
    method = 'Get',
    body = null,
    token = null
    ) {
    //we will need to set some custom options for the fetch call
    let options = {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        }
    };
    // if we are sending any data with the request add it here
    if (method == 'Post' || method == 'PUT') {
        options.body = JSON.stringify(body);
    }
    //if a token was passed in send it
    if(token){
        options.headers.Authorization = `Bearer ${token}`;
    }
    const response = await fetch(baseURL + url, options);
    // in this case we are processing the response as JSON before we check the status.
    // The API we are using will send back meaning ful messages
    // but we have to convert it before we can get them.
    const data = await response.json();

    if(!response.ok){
        //server will send a 500 server error if token expires
        // or a 401 if not authorized. ie bad username or password
        // 404 if URL requested doesn't exist
        // response.ok would be false
        console.log(response);
        throw new Error(`${data.status}: ${data.message}`);
    } else {
        return data;
    }
    // not catching the error here... so need to catch it later
}

