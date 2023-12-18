/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0EsOEZBQThGLE9BQU8sSUFBSSxhQUFhO0FBQ3RIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsVSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLWpzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGxvY2F0aW9uID0gKHN0cmluZykgPT4ge1xuICAgIGZldGNoKGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PTk3YzUzNWRiNzI0MTRhYThhNjUxNTM2MzIyMzE0MTImcT0ke3N0cmluZ31gLCB7bW9kZTogJ2NvcnMnfSkgXG4gICAgLnRoZW4ocmVzcCA9PiAgcmVzcC5qc29uKCkpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gY29uc29sZS5sb2cocmVzcG9uc2UpKVxufVxuXG5jb25zdCB3aW5kRGF0YSA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhsb2NhdGlvbignZ2VybWFudG93bicpLmN1cnJlbnQpXG59XG5cbmxvY2F0aW9uKCdnZXJtYW50b3duJylcblxud2luZERhdGEoKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==