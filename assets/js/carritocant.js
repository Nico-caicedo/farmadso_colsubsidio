document.addEventListener("DOMContentLoaded", function() {
    var numberInput = document.getElementById("numberInput");
    var decrementButton = document.getElementById("decrement");
    var incrementButton = document.getElementById("increment");

    decrementButton.addEventListener("click", function() {
        var currentValue = parseInt(numberInput.value, 10);
        if (!isNaN(currentValue) && currentValue > 1) {
            numberInput.value = currentValue - 1;
        }
    });

    incrementButton.addEventListener("click", function() {
        var currentValue = parseInt(numberInput.value, 10);
        if (!isNaN(currentValue) && currentValue < 20) {
            numberInput.value = currentValue + 1;
        }
    });
});