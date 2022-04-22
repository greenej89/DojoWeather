function removeElement(element) {
    console.log('Removing element');
    element.remove();
}

function loadPage() {
    alert('Loading weather report...')
}

function convertTemp() {
    console.log('Converting temperatures to');
    var tempArray = document.getElementsByClassName('temp');

    var tempUnit = document.querySelector("#temp-unit").value
    console.log(tempUnit);
    if (tempUnit == "fahrenheit") {
        convertToFahrenheit(tempArray);
    } else {
        convertToCelsius(tempArray);
    }
}

function convertToFahrenheit(tempArray) {
    for (i=0; i<tempArray.length; i++) {
        tempArray[i].innerText = Math.round((parseInt(tempArray[i].innerText) * (9/5) + 32));
    }
}
function convertToCelsius(tempArray) {
    for (i=0; i<tempArray.length; i++) {
        tempArray[i].innerText = Math.round((parseInt(tempArray[i].innerText) - 32) * (5/9));
    }
}