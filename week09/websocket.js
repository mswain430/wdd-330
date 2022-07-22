const URL = 'wss://echo.websocket.org/';
const outputDiv = document.getElementById('output');
const form = document.forms[0];
const connection = new WebSocket(URL);

connection.addEventListener('open', () => {
    output('CONNECTED');
}, false);

function output(message) {
    const para = document.createElement('p');
    para.innerHTML = message;
    outputDiv.appendChild(para);
}

form.addEventListener('submit', message, false);

function message(event) {
    event.preventDefault();
    const text = form.message.value;
    output(`SENT: ${text}`);
}
connection.addEventListener('message', (event) => {
    output(`RESPONSE: ${event.data}`);
}, false);

connection.addEventListener('close', () => {
    output('DISCONNECTED');
}, false);

connection.addEventListener('error', (event) => {
output(`<span style='color: red;'>ERROR: ${event.data}</span>`);
}, false);

if(window.Notification) {
    Notification.requestPermission();
}
if(window.Notification) {
    Notification.requestPermission()
    .then((permission) => {
        if(Notification.permission === 'granted') {
        new Notification('Hello JavaScript!');
        }
    });
}
const notification = new Notification('JavaScript: Novice to Ninja',{
    body: 'The new book from SitePoint',
    icon: 'sitepoint-logo.png'
});

notification.close();

notification.addEventListener('click', () => {
window.open('https://sitepoint.com')
}, false);