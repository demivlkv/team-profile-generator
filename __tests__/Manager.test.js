const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('Alex');

    expect(manager.name).toBe('Alex');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
});

test('creates an office number', () => {
    const manager = new Manager('Alex');

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('creates a role of manager', () => {
    const manager = new Manager('Alex');

    expect(manager.getRole()).toBe('Manager');
});