var input = document.getElementById("input");
var activelist = document.getElementById("activelist");
var completelist = document.getElementById("completelist");


function Addtask() {

    
    var task = input.value;
    var li = document.createElement("li");
    li.textContent = task;
    var span = document.createElement("span");
    span.innerHTML = "\u00d7"

    li.appendChild(span)

    activelist.appendChild(li);
    input.value=''

}

activelist.addEventListener(
    "click", (e) => {
        var removed;
        if(e.target.tagName == "LI") {
            e.target.classList.toggle("checked")

        }
        else if(e.target.tagName == "SPAN") {
            e.target.parentElement.remove();
            
        }
        
        
    }
)


