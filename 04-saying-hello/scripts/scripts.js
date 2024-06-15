const btn = document.querySelector("button");

btn.addEventListener("click", sayHello);

function sayHello() {
    const name = prompt("Ingresa tu nombre: ");
    const greeting = document.querySelector("#message");
    greeting.textContent = `Hello ${name}. How are you?`;
}   