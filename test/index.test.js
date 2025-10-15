const { capitalizeWords, filterActiveUsers, logAction } = require('../index')

//Tests for capitalizeWords

test('Correctly capitalizes first letters of words in a string', () => {
    const testString = "hello world";

    const correctString = capitalizeWords(testString);

    expect(correctString).toBe("Hello World");


});

test('Test passes with an empty string', () => {
    const testString = "";

    const correctString = capitalizeWords(testString);

    expect(correctString).toBe("");

    
});

test('Test passes with special characters', () => {
    const testString = "hello-world";

    const correctString = capitalizeWords(testString);

    expect(correctString).toBe("Hello-World");

    
});

test('Test passes with single word strings', () => {
    const testString = "hello";

    const correctString = capitalizeWords(testString);

    expect(correctString).toBe("Hello");

    
});

//Tests for filterActiveUsers

test('Test filters correctly in an array containing active and inactive users', () => {
    const testArray = [{ username: "John", isActive: true}, { username: "Tom", isActive: false}];

    const correctArray = filterActiveUsers(testArray);

    expect(correctArray).toEqual([{ username: "John", isActive: true}]);


});

test('Test filters correctly in an array containing only inactive users', () => {
    const testArray = [{ name: "John", isActive: false}, { name: "Tom", isActive: false}];

    const correctArray = filterActiveUsers(testArray);

    expect(correctArray).toEqual([]);

    
});

test('Test filters an empty array correctly', () => {
    const testArray = [];

    const correctArray = filterActiveUsers(testArray);

    expect(correctArray).toEqual([]);

    
});

//tests for logAction

test('Creates a log of the action performed by the user with a timestamp', () => {
    const action = "login";

    const user = "James";

    const correctLog = logAction(action, user);

    const timestamp = new Date().toISOString();

    expect(correctLog).toBe(`User James performed login at ${timestamp}`);

    
});

test('Creates a log of the action performed by the user with a timestamp', () => {
    const action = "login";

    const user = "James";

    const correctLog = logAction(action, user);

    const timestamp = new Date().toISOString();

    expect(correctLog).toBe(`User James performed login at ${timestamp}`);

    
});


