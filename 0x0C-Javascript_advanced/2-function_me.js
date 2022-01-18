function welcomeMessage(fullName) {
  return function sayHi() {
    alert(`Welcome ${fullName} `);
  };
}

const guillaume = welcomeMessage("Guillaume");
const alex = welcomeMessage("Alex");
const fred = welcomeMessage("Fred");
