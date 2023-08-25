const inputBox = document.getElementById("inputBox");

// function to display input on calculator screen
function display(num) {
    inputBox.value += num;
}

// function to evaluate the expression and return result
function calculate() {
    try {
        inputBox.value = eval(inputBox.value);
    } catch (error) {
        inputBox.value = "Error";
    }
}

// function to clear the input screen
function clearScreen() {
    inputBox.value = "";
}

// function to delete the last character from input screen
function deleteLast() {
    inputBox.value = inputBox.value.slice(0, -1);
}

// add event listeners to buttons
document.querySelectorAll("button").forEach(function(button) {
    button.addEventListener("click", function(event) {
        const buttonText = event.target.innerText;

        if (buttonText === "AC") {
            clearScreen();
        } else if (buttonText === "DEL") {
            deleteLast();
        } else if (buttonText === "=") {
            calculate();
        } else {
            display(buttonText);
        }
    });
});
