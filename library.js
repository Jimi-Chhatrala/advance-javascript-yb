// export let message = 'ES6 Modules';
let message = 'ES6 Modules';

// export
function user(name) {
  return `Hello ${name}.`;
}

// export
class Test {
  constructor() {
    console.log('Test constructor called.');
  }
}

export { message, user, Test };
