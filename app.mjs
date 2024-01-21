const inputbox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

let currentDate = new Date();



document.getElementById("currentDate").innerHTML =  currentDate;

const addtask = () =>
{
    if(inputbox.value === "")
    {
        alert("You must write something");
    }
    else
    {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value = "";
    saveData();
}
listContainer.addEventListener("click", function(e)
{
    if (e.target.tagName === "LI") 
    {
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
    }

}, false);
const saveData = () =>
{
    localStorage.setItem("data", listContainer.innerHTML);
}
const showtask = () =>
{
    listContainer.innerHTML = localStorage.getItem("data");
}
showtask();