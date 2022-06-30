import {getJSON, makeRequest} from authHelpers.js;

makeRequest('login', 'POST', {
    password: 'user1',
    email: 'user1@email.com'
});