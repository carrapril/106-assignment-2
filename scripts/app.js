var nonImportantClass = "far fa-star";
var ImportantClass = "fas fa-star";
var isImportant = false;
var hideShowForm = true;



function toggleImportant(){
    console.log("icon clicked!");
    if(isImportant){
        //non important
        isImportant = false;
        $("#iconImportant").removeClass(ImportantClass);
        $("#iconImportant").addClass(nonImportantClass);
       
    }
    else{
        //important
        $("#iconImportant").removeClass(nonImportantClass);
        $("#iconImportant").addClass(ImportantClass);
        isImportant = true;
    }   
}

function hideForm(){
    console.log("form button clicked");
    if(hideShowForm){
        hideShowForm = false;
        $("#form").hide();

    }
    else{
        hideShowForm = true;
        $("#form").show();
    }
}
function saveTask(){
    console.log("Information Stored");

    //get data

    let title = $("#txtTitle").val();
    let description = $("#txtDescription").val();
    let contact = $("#txtContact").val();
    let location = $("#txtLocation").val();
    let color = $("#selColor").val();
    let duedate = $("#selDate").val();

    //validate first 
    

    if(title.length < 5){

        alert("Title should be at least 5 chars long");
        return;
    
    }
    if(!duedate){
        alert("Due Date is required");
        return;
    }

        

    let task = new Task(title, description,isImportant, contact, location, color, duedate);
    console.log(task);
    
    

    // save the task

    //display

    displayTask(task);

    //clear the form 
    clearForm();


}
function clearForm(){
    $("#txtTitle").val("");
    $("#txtDescription").val("");
    $("#txtContact").val("");
    $("#txtLocation").val("");
    $("#selColor").val("");
    $("#selDate").val("");

}

function displayTask(task){
    // create the syntax
    let syntax =`<div class="task">
        <div><h4>${task.title}</h4></div>
        <div><p>${task.description}</p></div>

        <div>
        <label>${task.duedate}</label>
        </div>

        
        <div>
        <label>${task.location}</label>
        </div>
        <div>
        <label>${task.contact}</label>
        </div>
        

        <div>
        <button onclick="deleteTask()" class="btn btn-sm btn-danger">Remove</button>
        </div>

    </div>`;

    //append the syntax to an element on the screen
    $("#tasks-list").append(syntax);
}

function deleteTask(){
    console.log("deleting task");
}

function init() {

    //events
    $("#iconImportant").click(toggleImportant);{
        
    }
    $("#hideshow").click(hideForm);{

    }
    $("#savbtn").click(saveTask);{

    }

    //load data

}

window.onload = init;