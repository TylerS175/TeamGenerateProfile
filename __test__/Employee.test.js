const Employee = reqiure('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Michael', 90, 'michaelholmes@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('gets employee name', () => {
    const employee = new Employee('Michael', 90, 'michaelholmes@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test('get employee ID', () => {
    const employee = new Employee('Michael', 90, 'michaelholmes@gmail.com');
    expect(employee,getName()).toEqual(expect.any(String));
});

test('get employee email', () => {
    const employee = new Employee('Michael', 90, 'michaelholmes@gmail.com');
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});
test('gets role of employee', () => {
    const employee = new Employee('Nicole', 90, 'nicole.elisaw@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
});