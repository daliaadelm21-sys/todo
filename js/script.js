const button = document.querySelector("button");
const input = document.querySelector("input");
const warning = document.querySelector(".warning");
const tasks = document.querySelector(".lists-container");

button.addEventListener("click",addTask);
function addTask(){
    console.log("clicked")
    let task_text = input.value;
    if(task_text == "" || task_text.trim() == ""){
        warning.style.display = "block";
    }
    else{
        let task = document.createElement("li");
        task.textContent = task_text;
        tasks.appendChild(task);
        warning.style.display = "none";
        let delete_btn = document.createElement("span");
delete_btn.textContent = "X";
task.appendChild(delete_btn);
saveTask ()
    }
}

tasks.addEventListener("click", function(event){
    if(event.target.tagName == "LI"){
        event.target.classList.toggle("checked");
        saveTask ()
    }else if(event.target.tagName == "SPAN"){
        event.target.parentElement.remove();
        saveTask ()
    }
    
});
function saveTask (){
    localStorage.setItem("tasks", tasks.innerHTML)
}
function getTasks(){
    tasks.innerHTML = localStorage.getItem("tasks");
}
getTasks()

