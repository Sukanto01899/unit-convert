//Variable
let selectOption  = document.getElementById('select-option');
let input = document.getElementById('input');
let output = document.getElementById('output');
let inputValue = document.getElementById('input-value');
let getValue = document.getElementById('get-value');

//Change option by select
selectOption.addEventListener('change', ()=>{
    if(selectOption.value === "Area"){
        input.value = 'Square meter';
        output.value ='Square Kilometer';
        inputValue.value = '';
        getValue.value = '';
    }else if(selectOption.value === 'Length'){
        input.value = 'Meter';
        output.value ='Centimeter';
        let disInput = document.querySelector('option[value="Square meter"]');
        disInput.setAttribute('disabled', true);
        let disOutput = document.querySelector('option[value="Square Kilometer"]');
        disOutput.setAttribute('disabled', true);
        inputValue.value = '';
        getValue.value = '';
    }else if(selectOption.value === 'Time'){
        input.value = 'Second'
        output.value ='Minute'
        let disInput = document.querySelector('option[value="Square meter"]')
        disInput.setAttribute('disabled', true)
        let disOutput = document.querySelector('option[value="Square Kilometer"]')
        disOutput.setAttribute('disabled', true);
        inputValue.value = '';
        getValue.value = '';
    }else if(selectOption.value === 'Energy'){
        input.value = 'Joule'
        output.value ='Kilocalorie'
        let disInput = document.querySelector('option[value="Square meter"]')
        disInput.setAttribute('disabled', true)
        let disOutput = document.querySelector('option[value="Square Kilometer"]')
        disOutput.setAttribute('disabled', true);
        inputValue.value = '';
        getValue.value = '';
    }else if(selectOption.value === 'Mass'){
        input.value = 'Kilogram'
        output.value ='Gram'
        let disInput = document.querySelector('option[value="Square meter"]')
        disInput.setAttribute('disabled', true)
        let disOutput = document.querySelector('option[value="Square Kilometer"]')
        disOutput.setAttribute('disabled', true);
        inputValue.value = '';
        getValue.value = '';
    }
})

//Change Direction
//Code start here............

// Calculation
function calculas() {
    let inValue = input.value;
    if(inValue === 'Square meter'){
        let SquareKilometer =  inputValue.value/ (1e+6);
        getValue.value = SquareKilometer.toFixed(10);
    }else if(inValue === 'Meter'){
        let Centimeter = inputValue.value * 100;
        getValue.value = Centimeter.toFixed(10);
    }else if(inValue === 'Second'){
        let Minute = inputValue.value / 60;
        getValue.value = Minute.toFixed(10);
    }else if(inValue === 'Joule'){
        let Kilocalorie = inputValue.value / 4184;
        getValue.value = Kilocalorie.toFixed(10);
    }else if(inValue === 'Kilogram'){
        let Gram = inputValue.value * 1000;
        getValue.value = Gram.toFixed(10)
    }
}

inputValue.addEventListener('keyup',calculas);
inputValue.addEventListener('change',calculas);