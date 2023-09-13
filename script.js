let disValues = document.querySelectorAll(".num");
let duration = 2000;

disValues.forEach((dValue)=>{
    let sValue = 0;
    let eValue = dValue.getAttribute("data-val");
    let steps = parseInt(Math.floor(duration / eValue));
    let counter = setInterval(()=>{
        sValue = sValue + 1;
        dValue.textContent = sValue;
        if(eValue == sValue){
            clearInterval(counter);
        }
    },steps)
})