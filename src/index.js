const form = document.querySelector("form")
const input = document.querySelector("input")
const displayInfo = document.createElement('div')
const contentDiv = document.querySelector('.content')



const location = (string) => {
    fetch(`https://api.weatherapi.com/v1/current.json?key=97c535db72414aa8a65153632231412&q=${string}`, {mode: 'cors'}) 
    .then(resp =>  resp.json())
    .then(response => { 
        const temp = (`The current temperature in Farenheit is: ${response.current.temp_f}`)
        const wind = (`The current wind speed in MPH is: ${response.current.wind_mph}`)
        
        
        
        displayInfo.textContent = (`${temp}, ${wind}`)

        })

}




form.addEventListener('submit', (e) => {
    e.preventDefault()
    location(`${input.value}`)
})


contentDiv.appendChild(displayInfo)
