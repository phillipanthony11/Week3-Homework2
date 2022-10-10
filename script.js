var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));
var timeRows = document.querySelectorAll(".hour")


const start = new Date()
var currentTime = start.getHours()

var rowValues = document.querySelectorAll('.hour p')
timeRows.forEach(timeRegulator)

function timeRegulator(row, i) {
    var rowTime = rowValues[i].getAttribute('data-militaryTime')
    if(rowTime<currentTime){
        row.classList.add("past")
    } else if (rowTime==currentTime){
        row.classList.add("present")
    } else { 
        row.classList.add("future")
    }
    
}

var saveButtons = document.querySelectorAll('.save')
saveButtons.forEach(assignEventListeneter)
function assignEventListeneter(saveButton){
    saveButton.addEventListener('click', save)
    

}

function save(event){
    var inputValue = event.target.previousElementSibling
    (inputValue.value)
    
}
// 1. Save value to local storage in an array of objects
// 2. Create an initialize function that renders the local storage items


// Edge cases:
// 1. Eliminate horizontal scrolling 