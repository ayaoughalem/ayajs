let names = ["James", "John", "Alice", "Bob", "Jane"];

names.forEach(name => {
    let firstLetter = name.charAt(0).toLowerCase();
    if (firstLetter === 'j') {
        console.log("Goodbye " + name);
    } else {
        console.log("Hello " + name);
    }
});