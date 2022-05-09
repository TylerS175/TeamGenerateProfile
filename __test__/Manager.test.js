const Manager = require('../lib/Manager');

test('creates an Manager object', () => {
    const manager = new Manager('Michael', 90, 'michaelholmes@gmail.com', 5);
    expect(manager.officeNumber).toEqual(expect.any(Number));
});


test('gets role of employee', () => {
    const manager = new Manager('Michael', 90, 'michaelholmes@gmail.com');
    expect(manager.getRole()).toEqual("Manager");
}); 