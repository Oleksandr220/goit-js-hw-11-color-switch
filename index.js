const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

  const indexColors = () => {
    colors.forEach(color => {
      if(colors.indexOf(color) === randomNum){
        console.log(color)
      }
  });
}
  

  
  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  
  
  const refs = {
    bodyEL: document.querySelector('body'),
    btnStart: document.querySelector('button[data-action="start"]'),
    btnStop: document.querySelector('button[data-action="stop"]'),
  }
  
  const timer = {
    isActive: false,
    intervalId: null,
  }
  
  
  const onClickBtnStart = () => {
    if(timer.isActive){
      return
    }

    const startTime = Date.now();
    timer.isActive = true;

    timer.intervalId = setInterval(()=> {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;
      const randomNum =  randomIntegerFromInterval(0,5);
      console.log(deltaTime)
      console.log(randomNum)

      const indexColors = () => {
        colors.forEach(color => {
          if(colors.indexOf(color) === randomNum){
            refs.bodyEL.style.backgroundColor = color;
          }
      });
    }

    indexColors()
      
  }, 1000)
console.log(setInterval)
}

const onClickBtnStop = () => {
  clearInterval(timer.intervalId);
  timer.isActive = false;
}



refs.btnStart.addEventListener('click', onClickBtnStart)
refs.btnStop.addEventListener('click', onClickBtnStop)