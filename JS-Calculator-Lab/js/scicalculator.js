/*
1. Add event listener to each calculator button on click.
2. Create a function that changes value of input display to value of buttons.
3. Store or keep record of clicked button values before user clicks equals button. Maybe push each clicked button to a storage area.
5. Create a function that computes math when user clicks equals button.
6. Display result to input display when user clicks equals button.

*/

let buttons = document.querySelectorAll(".button");

// console.log(buttons);

let input = document.querySelector(".display");

let record = "";

for (let i=0; i<buttons.length; i++){
    buttons[i].addEventListener("click", displayValue);
}

function displayValue (event) {
    input.value = event.target.value
    record += `${event.target.value}`;
    if (event.target.value === "="){
        record = record.slice(0, -1);
        computation();
    }
    if (event.target.value === "0"){
        record = "";
    }
}

function computation() {
   let outcome = math.evaluate(record);
   input.value = outcome;
   console.log(outcome);
   return outcome;
}

//Error handling by alerting user error message
window.addEventListener("error", handleError, true);
function handleError(event) {
    if (event.message) {
      alert("error: "+event.message);
    } else {
      alert("error: "+event.type+" from element: "+(event.srcElement || event.target));
    }
}

