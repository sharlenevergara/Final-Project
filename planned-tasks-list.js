let counter = 0; //For assigning the unique ID

/* Creating function for the Add button */
function addTask () {
    if (document.getElementById("inputTask").value == "" ||
        document.getElementById("inputDate").value == "" || 
        document.getElementById("inputTime").value == ""
    ) {
        alert("Please input all the following.");
    } else {
        var divCurrentTask = document.createElement("div"); //creating the main container for the current tasks - FIRST MAIN
        divCurrentTask.className = "col-md-12 mt-2 task position-relative"; //assigning class name for the container
        divCurrentTask.id = "container" + ++counter; // creating a unique ID for the new task

        var divDateTime = document.createElement("div"); //creating an outer container for the date and time
        divDateTime.className = "position-absolute d-flex";
        divDateTime.style.right = "90px";
        divDateTime.style.bottom = "10px";

        var divDate = document.createElement("div"); //creating a container for the date
        divDate.style.marginRight = "18px";
        divDate.innerHTML = document.getElementById("inputDate").value; //the date inputted will be stored in the divDate
        /* If you want to insert/replace the value inside the div, use .innerHTML */
        /* If you want to insert value without deleting the existing value, use appendChild */
        /* If you want to insert a value in the textbox, use .value */

        var divTime = document.createElement("div"); //creating a container for the time
        divTime.innerHTML = document.getElementById("inputTime").value; //the time inputted will be stored in the divTime

        divDateTime.appendChild(divDate); //it will be used in order to insert this value into the outer container of the date and time
        divDateTime.appendChild(divTime); //it will be used in order to insert this value into the outer container of the date and time

        var divTask = document.createElement("div"); //creating a container for the task
        divTask.id = "task" + counter;
        divTask.innerHTML = document.getElementById("inputTask").value;

        var inputCurrentTask = document.createElement("div"); //creating container for the inputted task
        inputCurrentTask.className = "w-100 d-flex inputTask";
        inputCurrentTask.id = "containerID" + counter; //creating a unique number for the inputted task
        inputCurrentTask.setAttribute("readonly", true);

        /* These two will be used in order to display both the task and the date/time in the textbox */
        inputCurrentTask.appendChild(divTask); //the inserted task will be stored in the inputCurrentTask, to be able to display
        inputCurrentTask.appendChild(divDateTime); //the inputted date and time will be stored in the inputCurrentTask, to be able to display
        divCurrentTask.appendChild(inputCurrentTask); // the whole container of the inputCurrentTask along with the date/time and the task will be stored in the main container which is the divCurrentTask
        document.getElementById("currentTaskContainer").appendChild(divCurrentTask);

        var divIcon = document.createElement("div"); //creating container for the icons
        divIcon.className = "icon position-absolute";
        divIcon.id = "containerID" + counter;

        var checkButton = document.createElement("button"); //creating button for the check symbol
        checkButton.className = "fa fa-check";
        checkButton.id = counter;
        checkButton.addEventListener('click', function() { //creating an event to the check button
                
                var divCurrentTask = document.createElement("div"); 
                divCurrentTask.className = "col-md-12 mt-2 task position-relative";
                divCurrentTask.id = "container" + ++counter;
        
                var divTask = document.createElement("div");
                divTask.id = "task" + counter;
                divTask.innerHTML = document.getElementById("task" + checkButton.id).innerHTML;
        
                var inputCurrentTask = document.createElement("div");
                inputCurrentTask.className = "w-100 d-flex inputTask";
                inputCurrentTask.id = "containerID" + counter;
                inputCurrentTask.setAttribute("readonly", true);
        
                inputCurrentTask.appendChild(divTask); 
                divCurrentTask.appendChild(inputCurrentTask); 
                document.getElementById("completedTaskContainer").appendChild(divCurrentTask);
        
                var divIcon = document.createElement("div");
                divIcon.className = "icon position-absolute";
                divIcon.id = "containerID" + counter;
                divIcon.style.right = "15px";
        
                var trashButton = document.createElement("button");
                trashButton.className = "fa fa-trash";
                trashButton.id = counter;
                trashButton.addEventListener('click', function() {
                    for (let i=0; i<2; i++) {
                        document.getElementById("container" + trashButton.id).remove();
                    }
                })
        
                divIcon.appendChild(trashButton);
                divCurrentTask.appendChild(divIcon);
                document.getElementById("completedTaskContainer").appendChild(divCurrentTask);
        
                document.getElementById("reset").reset(); //clearing the values in the form

            for (let i=0; i<2; i++) {
                document.getElementById("container" + checkButton.id).remove(); //this part will remove the specific list from the current task
            }
        })

        var trashButton = document.createElement("button");
        trashButton.className = "fa fa-trash p-0";
        trashButton.id = counter;
        trashButton.addEventListener('click', function() {
            for (let i=0; i<2; i++) {
                document.getElementById("container" + trashButton.id).remove();
            }
        })

        divIcon.appendChild(checkButton); //storing the checkButton to divIcon
        divIcon.appendChild(trashButton); //storing trashButton to divIcon
        divCurrentTask.appendChild(divIcon); //storing divIcon (trash and check) to divCurrentTask
        document.getElementById("currentTaskContainer").appendChild(divCurrentTask); //storing the divCurrentTask to currentTaskContainer in order to display what's inside the divCurrentTask

        document.getElementById("reset").reset(); //clearing the values in the form
    }
}