// import { message as msg, Test, user } from './library.js';
// import _default from './default.js';
// import { default as defaultFun } from './default.js';
import defaultFun, { anotherMessage } from './default.js';

import * as library from './library.js';
import { loginMessage, loginMessage1 } from './login/login3.js';

console.log('message:', library.message);
// console.log('msg:', msg);

document.body.innerHTML = library.message;
// document.body.innerHTML = msg;

console.log(library.user('John Doe'));

const test1 = new library.Test();

// _default();

defaultFun();

console.log(anotherMessage);

console.log('loginMessage from main root file:', loginMessage);
console.log('loginMessage1 via index file:', loginMessage1);
