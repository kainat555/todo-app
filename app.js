let showItem = document.querySelector("#show-item");


function addItem() {
    let addItem = document.querySelector("#todo-item");

    let li = document.createElement("li");
    let liText = document.createTextNode(addItem.value);
    li.appendChild(liText);

    if(document.getElementById("todo-item").value === ""){
        {
        alert("Please insert something");
    }
    }


    let dltBtn = document.createElement("button");
    let dltBtnText = document.createTextNode("Remove");
    dltBtn.appendChild(dltBtnText);
    dltBtn.setAttribute("class" , "dlt")
    dltBtn.setAttribute("onclick", "dltItem(this)");
    li.appendChild(dltBtn);


    showItem.appendChild(li);
    addItem.value = "";


    let editBtn = document.createElement("button");
    let editBtnText = document.createTextNode("Edit");
    editBtn.appendChild(editBtnText);
    li.appendChild(editBtn);
    editBtn.setAttribute("class" , "edit")
    editBtn.setAttribute("onclick", "editItem(this)");
}

function dltItem(e) {
    e.parentNode.remove();      
}


function dltAll() {
    let dltAll = document.querySelector("#show-item");
    dltAll.innerHTML = "";
}

function editItem(e) {
    let val = e.parentNode.childNodes[0].nodeValue; 
    let valueEdit = prompt("Enter what you want to edit", val);
    e.parentNode.childNodes[0].nodeValue = valueEdit;  
}