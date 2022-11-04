const clock = setInterval(function clock() {
    let text = document.querySelector('h2#goodMorEveNig');
    let bgClock = document.querySelector('body');
    let hours = document.querySelector('span#hours');
    let minutes = document.querySelector('span#minutes');
    let seconds = document.querySelector('span#seconds');

    let dateToday = new Date();
    let h = dateToday.getHours();
    let m = dateToday.getMinutes();
    let s = dateToday.getSeconds();


    hours.textContent = h;
    minutes.textContent = m;
    seconds.textContent = s;

    if(h < 10) h = '0' + h;
    if(m < 10) m = '0' + m;
    if(s < 10) s = '0' + s;

 
    if(h <= 12 && m <= 59 && s <= 59){        
        bgClock.style.backgroundImage = "url('./assets/morning.png')";
        text.innerHTML = `Good Morning!`
    } else if(h <= 18 && m <= 59 && s <= 59) {       
        bgClock.style.backgroundImage = "url('./assets/afternoon.png')";
        text.innerHTML = `Good Afternoon!`
    } else if(h <= 22 && m <= 59 && s <= 59) {       
        bgClock.style.backgroundImage = "url('./assets/evening.png')";
        text.innerHTML = `Good Evening!`
    } else{       
        bgClock.style.backgroundImage = "url('./assets/night.png')";
        text.innerHTML = `Good Night!`
    }
})
