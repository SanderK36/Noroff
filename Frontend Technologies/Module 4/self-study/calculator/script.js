const display = document.querySelector(".display"); // fixed
const buttons = document.querySelectorAll("button");
let currentInput = "";
const operators = ["+", "-", "*", "/"];

for (const button of buttons) {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value === "C") {
            currentInput = "";
            display.textContent = "0";
            return;
        }

        if (value === "=") {
            try {
                currentInput = eval(currentInput).toString();
                display.textContent = currentInput;
            } catch (error) {
                display.textContent = "Error";
                currentInput = "";
            }
            return;
        }

        if (operators.includes(value)) {
            if (currentInput === "" && value !== "-") return;
            const lastChar = currentInput.slice(-1);
            if (operators.includes(lastChar)) {
                currentInput = currentInput.slice(0, -1) + value;
            } else {
                currentInput += value;
            }
            display.textContent = currentInput;
            return;
        }

        if (value === ".") {
            const segments = currentInput.split(/[\+\-\*\/]/);
            const lastSegment = segments[segments.length - 1];
            if (lastSegment.includes(".")) return;
            currentInput += ".";
            display.textContent = currentInput;
            return;
        }

        currentInput += value;
        display.textContent = currentInput;
    });
}