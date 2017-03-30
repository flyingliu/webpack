var style = require('./css/my.css');
var bstyle = require('./css/b.css');


var message = require("./message");
import Button from './button';
import Img from './image';
import $ from 'jquery';

var msg = () => (`<p>${message.hi}</p>
    <p class="${style.box}"> DEV: ${DEVELOPMENT} abc </p>
    <p>${Img}</p>
`);
// var msg = () => (Button.button);


var app = document.getElementById("app");


app.innerHTML = `
    <div id="menu">
        <button id="loagePage1">load page 1</button>
        <button id="loagePage2">load page 2</button>
   </div>
   <div id="content">
        <h1>Home</h1>
   </div>
`;

document.getElementById('loagePage1').addEventListener('click', () => {
    console.log('Hi');
    System.import('./page1')
        .then(pageModule => {
            document.getElementById('content').innerHTML = pageModule.default
        })
});


document.getElementById('loagePage2').addEventListener('click', () => {
    console.log('Hi');
    System.import('./page2')
        .then(pageModule => {
            document.getElementById('content').innerHTML = pageModule.default
        })
});
// Button.attachEl();

$("#app").css("background", "yellow")

if (DEVELOPMENT) {
    if (module.hot) {
        module.hot.accept();
    }
}