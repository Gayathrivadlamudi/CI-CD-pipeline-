import sum from "./sum.js";
//in pacake.json we have added a test script to run jest with the experimental vm modules flag, which is required for using ES modules in Jest. this script will be executed when we run npm test in the terminal. jest is a testing framework that allows us to write and run tests for our code. it provides a simple and intuitive API for writing tests, as well as powerful features like mocking and snapshot testing. sometimes jest may not work with imports and exports in ES modules, so we need to use the experimental vm modules flag to enable this feature.
//  "scripts": {
//     //we write the test script to run jest with the experimental vm modules flag, which is required for using ES modules in Jest.
//     //this script will be executed when we run npm test in the terminal.
//     //jest is a testing framework that allows us to write and run tests for our code. It provides a simple and intuitive API for writing tests, as well as powerful features like mocking and snapshot testing.
//     //sometimes jest may not work with imports and exports in ES modules, so we need to use the experimental vm modules flag to enable this feature.
//     "test": "node --experimental-vm-modules node_modules/jest/bin/jest.js"
//   }
// ////why testenvironment is set to node in jest.config.js?
// The testEnvironment is set to 'node' in jest.config.js 
// because the code being tested is a Node.js application. 
// By setting the test environment to 'node', Jest will use the Node.js environment for running tests, 
// which is necessary for testing server-side code that relies on Node.js features and modules. This ensures that the tests run in an environment 
// that closely resembles the actual runtime environment of the application.
test("add 2 and 2 to equal 4",()=>{
    expect(sum(2,2)).toBe(4);
});