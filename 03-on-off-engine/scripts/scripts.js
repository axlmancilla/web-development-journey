const btn = document.querySelector("button");
const txt = document.querySelector("p");

btn.addEventListener("click", updateBtn);

function updateBtn() {
    if (btn.textContent === "Start Engine") {
        btn.textContent = "Stop Engine";
        txt.textContent = "The Engine has Started";
    } else {
        btn.textContent = "Start Engine";
        txt.textContent = "The Engine is Stopped";
    }
}