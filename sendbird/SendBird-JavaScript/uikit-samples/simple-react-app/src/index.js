import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// function notifyMe() {
//   // Let's check if the browser supports notifications
//   if (!("Notification" in window)) {
//     alert("This browser does not support desktop notification");
//   }

//   // Let's check whether notification permissions have already been granted
//   else if (Notification.permission === "granted") {
//     // If it's okay let's create a notification
//     var notification = new Notification("Hi there!");
//   }

//   // Otherwise, we need to ask the user for permission
//   else if (Notification.permission !== "denied") {
//     Notification.requestPermission().then(function (permission) {
//       // If the user accepts, let's create a notification
//       if (permission === "granted") {
//         var notification = new Notification("Hi there!");
//       }
//     });
//   }

  // At last, if the user has denied notifications, and you
  // want to be respectful there is no need to bother them any more.
// }

// notifyMe();



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
