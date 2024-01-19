var input = document.getElementById("input");
var activelist = document.getElementById("activelist");
var completelist = document.getElementById("completelist");
var addbt = document.getElementById("addbt")



function Addtask() {

    if (input.value === '') {
        alert("Task can't be empty")
    } else {
        //store task in a varable..
        var task = input.value;
        
        var li = document.createElement("li");
        li.textContent = task;
        var span = document.createElement("span");
        span.className="removebtn"
        span.innerHTML = "\u00d7"

        //create one btn for mark the task as complete..
        var completebtn = document.createElement("span");
        completebtn.className = "completebt";


        li.appendChild(span)
        li.appendChild(completebtn)

        activelist.appendChild(li);
        input.value = ''
      //  savetask()
    }

}

input.addEventListener(
    "keypress",
    (event)=>{
        if (event.keyCode===13) {
            Addtask()
        }
    }
)

activelist.addEventListener(
    "click", (e) => {
        var removed;
        if (e.target.className === "completebt") {
            e.target.parentElement.classList.toggle("checked");
          //  savetask()
        }
        else if (e.target.className === "removebtn") {
            e.target.parentElement.remove();
           // savetask();
        }
    }
)

/*function savetask() {
    localStorage.setItem("tasks", activelist.innerHTML)
}

function displaytasks() {
    activelist.innerHTML=localStorage.getItem("tasks");
}

displaytasks();
*/

