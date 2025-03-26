const meterInFeet = 3.28084
const literInGallon = 0.264172
const kilogramInPound = 2.20462

const input = document.getElementById('unit-input')
const button = document.getElementById('convert-btn')

const lengthEl = document.getElementById('lengthConversion')
const volumeEl = document.getElementById('volumeConversion')
const massEl = document.getElementById('massConversion')

button.addEventListener('click', conversion) 

function conversion() {
    const value = input.value

    let feetCon = value * meterInFeet
    let meters = value / meterInFeet
    lengthEl.textContent = `${value} meters = ${feetCon.toFixed(3)} feet |
     ${value} feet = ${meters.toFixed(3)} meters`
    
    let gallons = value * literInGallon
    let liters = value / literInGallon
    volumeEl.textContent = `${value} liters = ${gallons.toFixed(3)} gallons |
     ${value} gallons = ${liters.toFixed(3)} liters`

    let pounds = value * kilogramInPound
    let kilograms = value / kilogramInPound
    massEl.textContent = `${value} kilos = ${pounds.toFixed(3)} pounds |
     ${value} pounds = ${kilograms.toFixed(3)} kilos`
    
}