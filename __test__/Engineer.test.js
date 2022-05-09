const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Michael', 90, 'michaelholmes@gmail.com', 'michaelholmes27');
    expect(engineer.github).toEqual(expect.any(String));
});

test('get engineer github value', () => {
    const engineer = new Engineer('Michael', 90, 'michaelholmes@gmail.com', 'michaelholmes27');
    expect(engineer.getGithub().toEqual(expect.stringContaining(engineer.github.toString())));
});

test('gets role of employee', () => {
    const engineer = new Engineer('Michael', 90, 'michaelholmes@gmail.com', 'michaelholmes27');
     expect(engineer.getRole()).toEqual("Engineer");
});

