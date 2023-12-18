const location = (string) => {
    fetch(`https://api.weatherapi.com/v1/current.json?key=97c535db72414aa8a65153632231412&q=${string}`, {mode: 'cors'}) 
    .then(resp =>  resp.json())
    .then(response => console.log(response))
}

const windData = () => {
    console.log(location('germantown').current)
}

location('germantown')

windData()