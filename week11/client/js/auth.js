// Auth class which provides basic JWT based authentication
// Requires: access to the makeRequest function
import { makeRequest } from './authHelpers.js';
export default class Auth {
    constructor() {
        this.jwtToken = '';
        this.user = {};
    }

    async login(callback) {
        // replace the ids below with whatever you would like
        const password = document.getElementById('password');
        const username = document.getElementById('username');
        const postData = {
            email: username.value,
            password: password.value
        };
        try {
            // 1. use the makeRequest function to pass our credentials to the server

            // 2. if we get a successful response...we have a token!  Store it since we will need

                // let's get the user details as well and store them locally in the class
           // you can pass a query to the API by appending it on the end of the url like this: 'users?email=' + email
            this.user = await this.getCurrentUser(username.value);
            // hide the login form
            document.getElementById('login').classList.add('hidden');
            //clear the password
            password.value = '';

            //since we have a token lets go get
            if(callback) {
                callback();
            }
      } catch (error){
        //if there were any errors display
        console.log(error);
      }
    }
    // uses the email of the currently logged in person
    async getCurrentUser(email){
        try {
            // 3. add the code here to make a request for the user identified by email...don't forget to send the token!
        } catch(error) {
            // if there were errors display
            console.log(error);
        }
    }
    set token(value){
        // we need this for the getter to work
    }
    get token(value){
        return this.jwtToken;
    }
} // end auth class