let userName = prompt("Who's there?");

if (userName == "admin") {
    let password = prompt("Password?");
    if (password == "master") {
        alert("Welcome!");
    } else if (password == "" || password == null){
        alert("Canceled");
    } else {
        alert("Wrong password");
    }
} else if (userName == "" || userName == null) {
    alert("Canceled");
} else {
    alert("I don't know you");
}