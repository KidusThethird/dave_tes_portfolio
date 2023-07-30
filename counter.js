let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
   if(endValue < 2000){ startValue +=10;}
   else if (endValue < 100000){
        startValue +=50;
    }
    else if(endValue > 300000){
      startValue += 200;
    if(endValue < startValue){console.log('they are equal')}
    }
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
      console.log('true for ' + startValue)
    }
  }, duration);
});