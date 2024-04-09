document.addEventListener("DOMContentLoaded", function() {
    const display = document.querySelector(".container1");
    const buttons = document.querySelectorAll(".btn");
    const resetButton = document.querySelector(".btn5-reset");
    const equalButton = document.querySelector(".btn5-equal");
    const delButton = document.querySelector(".btn-del");

    let calculation = "";

    function updateDisplay() {
        display.textContent = calculation;
    }

    function handleButtonClick(event) {
        const buttonValue = event.target.textContent;
        if (buttonValue === "DEL") {
            calculation = calculation.slice(0, -1);
        } else {
            calculation += buttonValue;
        }
        updateDisplay();
    }

    function handleResetButtonClick() {
        calculation = "";
        updateDisplay();
    }

    function handleEqualButtonClick() {
        try {
            calculation = eval(calculation);
            updateDisplay();
        } catch (error) {
            alert("Invalid expression");
        }
    }
    buttons.forEach(button => {
        button.addEventListener("click", handleButtonClick);
    });

    resetButton.addEventListener("click", handleResetButtonClick);
    equalButton.addEventListener("click", handleEqualButtonClick);
    delButton.addEventListener("click", handleButtonClick); // For the DEL button
});
