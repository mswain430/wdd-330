// Auth class which provides basic JWT based authentication
// Requires: access to the makeRequest function
import { makeRequest } from './authHelpers.js';

export default class Auth {
    constructor(errorHandler){
        this.jwtToken = '';
        this.user = {};
        this.errors = errorHandler;
    }

    async login(callback) {
        // replace the ids below with whatever you would like
        const username = document.getElementById('username');
        const password = document.getElementById('password');
        const postData = {
            email: username.value,
            password: password.value
        };
        try {
          // 1. use the makeRequest function to pass our credentials to the server
          const data = await makeRequest('login', 'POST', postData);
          // 2. if we get a successful response...we have a token!  Store it since we will need
          this.jwtToken = data.accessToken;
            // let's get the user details as well and store them locally in the class
           // you can pass a query to the API by appending it on the end of the url like this: 'users?email=' + email
          this.user = await this.getCurrentUser(username.value);
            // hide the login form
          console.log(data);

           // document.getElementById('login').classList.add('hidden');
          hideLogin();
           //clear the password
          password.value = '';

          this.errors.clearError();

         //since we have a token lets go get
          callback();
        } catch (error){
         //if there were any errors display
          this.errors.handleError(error);
          console.log(error);
      }
    }
    // uses the email of the currently logged in person
    async getCurrentUser(email){
        try {
            // 3. add the code here to make a request for the user identified by email...don't forget to send the token!
          const data = await makeRequest(
            'users?email=' + email,
            'GET',
            null,
            this.jwtToken
           );
          console.log(data);
          return data[0];
        } catch (error) {
            // if there were errors display
          this.errors.handleError(error);

          console.log(error);
        }
    }
    async updateUser() {
      // after logging in we pull down the user from api
      this.user.age = 40;
      try {
        const result = await makeRequest(
          'users/' + this.user.id,
          'PUT',
          this.user,
          this.jwtToken
          );
         console.log('Update user:', result);
       } catch(error){
         this.errors.handleError(error,showLogin);
        }
    }
    set token(value) {
        // we need this for the getter to work
    }
    get token() {
        return this.jwtToken;
    }
} // end auth class

function showLogin(){
    document.getElementById('login').classList.remove('hidden');
}

function hideLogin(){
    document.getElementById('login').classList.add('hidden');
}