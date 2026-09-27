const display = document.getElementById("display");

function append(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function toRadians(degrees) {
    return degrees * Math.PI / 180;
}

function sin(x) {
    return Math.sin(toRadians(x));
}

function cos(x) {
    return Math.cos(toRadians(x));
}

function tan(x) {
    return Math.tan(toRadians(x));
}

function log(x) {
    return Math.log10(x);
}

function ln(x) {
    return Math.log(x);
}

function sqrt(x) {
    return Math.sqrt(x);
}

function calculate() {

    try {

        const expression = display.value;

        if (expression === "") {
            return;
        }

        const result = Function(
            "sin",
            "cos",
            "tan",
            "log",
            "ln",
            "sqrt",
            `"use strict"; return (${expression})`
        )(sin, cos, tan, log, ln, sqrt);

        if (!Number.isFinite(result)) {
            throw new Error("Invalid result");
        }

        display.value = Number(result.toFixed(10));

    } catch (error) {

        display.value = "Error";

        setTimeout(() => {
            clearDisplay();
        }, 1000);
    }
}