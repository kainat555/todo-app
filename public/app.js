let showItem = document.querySelector("#show-item");
firebase.database().ref("todo's").on("child_added",function(data){
    console.log(data.val());

    let tr = document.createElement("tr");
    let td = document.createElement("td");
    let tdText = document.createTextNode(data.val().value);
    tr.appendChild(td).appendChild(tdText);

    
    console.log(data.val().key)
    
    let dltBtn = document.createElement("button");
    let dltBtnText = document.createTextNode("Remove");
    dltBtn.appendChild(dltBtnText);
    dltBtn.setAttribute("class", "dlt")
    dltBtn.setAttribute("id",data.val().key);
    dltBtn.setAttribute("onclick", "dltItem(this)");
    // console.log(dltBtn);
    
    tr.appendChild(dltBtn);
    
    
    showItem.appendChild(tr);
    
    
    let editBtn = document.createElement("button");
    let editBtnText = document.createTextNode("Edit");
    editBtn.appendChild(editBtnText);
    tr.appendChild(editBtn);
    editBtn.setAttribute("class", "edit")
    editBtn.setAttribute("id",data.val().key)
    editBtn.setAttribute("onclick", "editItem(this)");
    // console.log(editBtn);
    
    
})

function addItem() {
    let addItem = document.querySelector("#todo-item");
    // console.log(addItem.value)
    
    
    let key = firebase.database().ref("todo's").push().key;
    // console.log(key);
    let todo = {
        value: addItem.value,
        key: key
    }
    // console.log(todo);
    
    firebase.database().ref("todo's").child(key).set(todo);
    addItem.value = "";
    
    // if (addItem.value === "") {
    //     document.getElementById("addBtn").disabled = true;
    // }                  output wrong
}

function dltItem(e) {
    console.log(e.id)
    e.parentNode.remove();
    firebase.database().ref("todo's").child(e.id).remove();
}


function dltAll() {
    let dltAll = document.querySelector("#show-item");
    dltAll.innerHTML = "";
    firebase.database().ref("todo's").remove();
}

function editItem(e) {
    // let val = e.parentNode.childNodes[0].childNodes[0].nodeValue;
    let valueEdit = prompt("Enter what you want to edit", e.parentNode.childNodes[0].childNodes[0].nodeValue);
    let editTodos = {
        value : valueEdit,
        key : e.id
    }
    firebase.database().ref("todo's").child(e.id).set(editTodos)
    e.parentNode.childNodes[0].childNodes[0].nodeValue = valueEdit;
       console.log(e.id)                                                                                      
}

// console.log(firebase);