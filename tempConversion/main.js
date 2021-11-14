const calculateTemp = () => {
    const numTemp = document.getElementById('temp').value;

    const tempSelected = document.getElementById('temp_diff');
    const valueTemp  = temp_diff.options[tempSelected.selectedIndex].value;

    const celToFah = (cel) => {
        let fahrenheit = ((cel * 9/5) + 32).toFixed(2);
        return fahrenheit;
    }

    const fahToCel = (far) => {
        let celsius = ((far -32) * 5/9).toFixed(2);
        return celsius;
    }

    let result;

    if(valueTemp== 'cel'){
        result = celToFah(numTemp);
        document.getElementById('result-box').innerHTML = `= ${result} Fahrenheit`;
    } 
    else {
        result = fahToCel(numTemp);
        document.getElementById('result-box').innerHTML = `= ${result} Celsius`;
    }
}
