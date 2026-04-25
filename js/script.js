const button = document.querySelector("button");
const input = document.querySelector("input");
const warning = document.querySelector(".warning");
const tasks = document.querySelector(".lists-container");

button.addEventListener("click", addTask);
function addTask() {
    const task_text = input.value.trim();
    if (task_text === "") {
        warning.style.display = "block";
    }
    else {
        const task = document.createElement("li");
        task.textContent = task_text;
        tasks.appendChild(task);
        warning.style.display = "none";
        const delete_btn = document.createElement("span");
        delete_btn.textContent = "X";
        task.appendChild(delete_btn);
        saveTask();
        input.value = "";
        input.focus();
    }
}

tasks.addEventListener("click", function (event) {
    if (event.target.tagName == "LI") {
        event.target.classList.toggle("checked");
        saveTask()
    } else if (event.target.tagName == "SPAN") {
        event.target.parentElement.remove();
        saveTask()
    }

});
function saveTask() {
    localStorage.setItem("tasks", tasks.innerHTML)
}
function getTasks() {
    tasks.innerHTML = localStorage.getItem("tasks");
}
getTasks()

