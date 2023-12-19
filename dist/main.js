/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQSw4RkFBOEYsT0FBTyxJQUFJLGFBQWE7QUFDdEg7QUFDQTtBQUNBLGtFQUFrRSx3QkFBd0I7QUFDMUYsMkRBQTJELDBCQUEwQjtBQUNyRjtBQUNBLHNDQUFzQyxLQUFLLElBQUksS0FBSzs7QUFFcEQsU0FBUzs7QUFFVDs7Ozs7QUFLQTtBQUNBO0FBQ0EsZ0JBQWdCLFlBQVk7QUFDNUIsQ0FBQzs7O0FBR0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC1qcy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIilcbmNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0XCIpXG5jb25zdCBkaXNwbGF5SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5jb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxuXG5cblxuY29uc3QgbG9jYXRpb24gPSAoc3RyaW5nKSA9PiB7XG4gICAgZmV0Y2goYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9OTdjNTM1ZGI3MjQxNGFhOGE2NTE1MzYzMjIzMTQxMiZxPSR7c3RyaW5nfWAsIHttb2RlOiAnY29ycyd9KSBcbiAgICAudGhlbihyZXNwID0+ICByZXNwLmpzb24oKSlcbiAgICAudGhlbihyZXNwb25zZSA9PiB7IFxuICAgICAgICBjb25zdCB0ZW1wID0gKGBUaGUgY3VycmVudCB0ZW1wZXJhdHVyZSBpbiBGYXJlbmhlaXQgaXM6ICR7cmVzcG9uc2UuY3VycmVudC50ZW1wX2Z9YClcbiAgICAgICAgY29uc3Qgd2luZCA9IChgVGhlIGN1cnJlbnQgd2luZCBzcGVlZCBpbiBNUEggaXM6ICR7cmVzcG9uc2UuY3VycmVudC53aW5kX21waH1gKVxuICAgICAgICBcbiAgICAgICAgZGlzcGxheUluZm8udGV4dENvbnRlbnQgPSAoYCR7dGVtcH0sICR7d2luZH1gKVxuXG4gICAgICAgIH0pXG5cbn1cblxuXG5cblxuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGxvY2F0aW9uKGAke2lucHV0LnZhbHVlfWApXG59KVxuXG5cbmNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoZGlzcGxheUluZm8pXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=