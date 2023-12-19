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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQSw4RkFBOEYsT0FBTyxJQUFJLGFBQWE7QUFDdEg7QUFDQTtBQUNBLGtFQUFrRSx3QkFBd0I7QUFDMUYsMkRBQTJELDBCQUEwQjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsS0FBSyxJQUFJLEtBQUs7O0FBRXBELFNBQVM7O0FBRVQ7Ozs7O0FBS0E7QUFDQTtBQUNBLGdCQUFnQixZQUFZO0FBQzVCLENBQUM7OztBQUdEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAtanMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpXG5jb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKVxuY29uc3QgZGlzcGxheUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JylcblxuXG5cbmNvbnN0IGxvY2F0aW9uID0gKHN0cmluZykgPT4ge1xuICAgIGZldGNoKGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PTk3YzUzNWRiNzI0MTRhYThhNjUxNTM2MzIyMzE0MTImcT0ke3N0cmluZ31gLCB7bW9kZTogJ2NvcnMnfSkgXG4gICAgLnRoZW4ocmVzcCA9PiAgcmVzcC5qc29uKCkpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4geyBcbiAgICAgICAgY29uc3QgdGVtcCA9IChgVGhlIGN1cnJlbnQgdGVtcGVyYXR1cmUgaW4gRmFyZW5oZWl0IGlzOiAke3Jlc3BvbnNlLmN1cnJlbnQudGVtcF9mfWApXG4gICAgICAgIGNvbnN0IHdpbmQgPSAoYFRoZSBjdXJyZW50IHdpbmQgc3BlZWQgaW4gTVBIIGlzOiAke3Jlc3BvbnNlLmN1cnJlbnQud2luZF9tcGh9YClcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgZGlzcGxheUluZm8udGV4dENvbnRlbnQgPSAoYCR7dGVtcH0sICR7d2luZH1gKVxuXG4gICAgICAgIH0pXG5cbn1cblxuXG5cblxuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGxvY2F0aW9uKGAke2lucHV0LnZhbHVlfWApXG59KVxuXG5cbmNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoZGlzcGxheUluZm8pXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=